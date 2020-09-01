using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using K_Api202001.Data;
using K_Api202001.Models;
using K_Api202001.Models.ModeView;
using Microsoft.Extensions.Configuration;
using K_Api202001.Tools;
using Microsoft.AspNetCore.Identity;

namespace K_Api202001.ApiControler
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProFormsController : ControllerBase
    {
        private readonly UserManager<UserIdentity> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly ApplicationDbContext _context;
        private IConfiguration _configuration;
        private readonly SmtpSettings _SmtpSettings;
        private readonly string imgProdectPath = "";

        public float pageCount { get; set; }
        public int itemCount = 20;

        public ProFormsController(IConfiguration configuration, ApplicationDbContext db, UserManager<UserIdentity> _userManager, RoleManager<IdentityRole> _roleManager, SignInManager<UserIdentity> signInManager)
        {
            userManager = _userManager;
            roleManager = _roleManager;
            _context = db;
            _configuration = configuration;

            var PathIMG = configuration["IMG:PathIMG"];
            imgProdectPath = PathIMG + "product/";

            _SmtpSettings = new SmtpSettings();
            _SmtpSettings.Password = configuration["Smtp:Password"];
            _SmtpSettings.Port = configuration["Smtp:Port"];
            _SmtpSettings.Server = configuration["Smtp:Server"];
            _SmtpSettings.FromAddress = configuration["Smtp:FromAddress"];

        }



        [HttpGet("{ProJectTypeId}")]
        public async Task<IActionResult> GetProForm(int ProJectTypeId)
        {
            var form = _context.ProForm.Where(i => i.ProJectTypeId == ProJectTypeId).Select(i=>new { i.Id , i.Name, i.AName, i.Required ,i.Type}) .ToList();

            return Ok (form);
        }

        // PUT: api/ProForms/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut]
        public async Task<IActionResult> PutProForm(PreFormModelView proForm)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (user == null) return Unauthorized();
            if (await userManager.IsInRoleAsync(user, "Adman") && !user.Block)
            {

                var form = _context.ProForm.SingleOrDefault(i => i.Id == proForm.Id);
                if (form == null) return NotFound();
                else
                {
                    form.Name = proForm.Name;
                    form.AName = proForm.AName;
                    form.Required = proForm.Required;
                    form.Type = proForm.Type;
                    form.ProJectTypeId = proForm.ProJectTypeId;
                }
                _context.SaveChanges();

                return Ok(new
                {
                    form.Id,
                    form.Name,
                    form.AName,
                    form.ProJectTypeId,
                    proForm.Required,
                    proForm.Type
                });
            }
            else return Unauthorized();
           
        }

        // POST: api/ProForms
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ProForm>> PostProForm(PreFormModelView Model)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (user == null) return Unauthorized();
            if (await userManager.IsInRoleAsync(user, "Adman") && !user.Block)
            {

                var proForm = new ProForm() { Name = Model.Name, AName = Model.AName, ProJectTypeId = Model.ProJectTypeId, Required=Model.Required ,Type=Model.Type};


            _context.ProForm.Add(proForm);
             _context.SaveChanges();

            return Ok(new
            {
                proForm.Id,
                proForm.Name,
                proForm.AName,
                proForm.ProJectTypeId,
                proForm.Required,
                proForm.Type
            });
            }
            else return Unauthorized();
        }

        // DELETE: api/ProForms/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ProForm>> DeleteProForm(int id)
        {
            var proForm = await _context.ProForm.FindAsync(id);
            if (proForm == null)
            {
                return NotFound();
            }

            _context.ProForm.Remove(proForm);
            await _context.SaveChangesAsync();

            return proForm;
        }

        private bool ProFormExists(int id)
        {
            return _context.ProForm.Any(e => e.Id == id);
        }
    }
}

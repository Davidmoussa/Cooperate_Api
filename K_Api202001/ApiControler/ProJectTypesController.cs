using K_Api202001.Data;
using K_Api202001.Models;
using K_Api202001.Tools;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace K_Api202001.ApiControler
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProJectTypesController : ControllerBase
    {



        private readonly UserManager<UserIdentity> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly ApplicationDbContext _context;
        private IConfiguration _configuration;
        private readonly SmtpSettings _SmtpSettings;
        private readonly string imgProdectPath = "";

        public float pageCount { get; set; }
        public int itemCount = 20;

        public ProJectTypesController(IConfiguration configuration, ApplicationDbContext db, UserManager<UserIdentity> _userManager, RoleManager<IdentityRole> _roleManager, SignInManager<UserIdentity> signInManager)
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

        // GET: api/ProJectTypes
        [HttpGet]
        public async Task<IActionResult> GetProJectType(int currentPage)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
           
            var ProJectType=   _context.ProJectType
                
                .Select(i=>new { i.id,i.Name,i.AName}).ToList();
            // Pagenation
           if (user != null)                  
            {
                if (await userManager.IsInRoleAsync(user, "User") && !user.Block)
                {
                    var products = _context.products.Where(i => !i.Delete && !i.sealler.UserIdentity.Block).Include(i => i.sealler.UserIdentity).Select(i => i.sealler.ProJectTypeId).ToList();
                    ProJectType = _context.ProJectType
                     .Where(i => products.Contains(i.id))
                     .Select(i => new { i.id, i.Name, i.AName }).ToList();
                   
                }


            }


            pageCount = (int)Math.Ceiling(decimal.Divide(ProJectType.Count, itemCount));
        //    if (currentPage > pageCount - 1) currentPage = (int)pageCount - 1;
            // End 

            if (ProJectType.Count == 0) return NotFound();
            else return Ok(new { itemCount, pageCount, currentPage, Data = ProJectType.Skip((currentPage) * itemCount).Take(itemCount).ToList() });
        }

        // GET: api/ProJectTypes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProJectTypeId(int id)
        {
            var proJectType =  _context.ProJectType.Select(i => new { i.id, i.Name, i.AName }).SingleOrDefault(i=>i.id==id);

            if (proJectType == null)
            {
                return NotFound();
            }

            return Ok( proJectType);
        }

        // PUT: api/ProJectTypes/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProJectType(int id, ProJectTypeUpDateModelView Model)
        {

            try
            {
                var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
                if (!await userManager.IsInRoleAsync(user, "Adman") && user.Block) return Unauthorized("Only  Adman");
                var ProJectType = new ProJectType();
                var forms = new List<ProForm>();
                var count = _context.ProJectType.Where(i => (i.AName == Model.AName || i.Name == Model.Name) && i.id != id).ToList().Count;
                if (count == 0)
                {
                     ProJectType = _context.ProJectType.SingleOrDefault(i => i.id == id);
                    if (ProJectType == null) return NotFound();
                    ProJectType.AName = Model.AName;
                    ProJectType.Name = Model.Name;
                   
                  
                    foreach (var item in Model.ProForm)
                    {

                        var form = _context. ProForm.SingleOrDefault(i => i.Id == item.Id && id == i.ProJectTypeId);
                      
                        if (form != null) {
                            form.Name = item.Name;
                            form.AName = item.AName;
                            form.Type = item.Type;
                            form.Required = item.Required;
                            forms.Add(form);
                        }
                        else
                        {
                            form = new ProForm { Name = item.Name, AName = item.AName, Type = item.Type, Required = item.Required, ProJectTypeId = id };
                            forms.Add(form);
                        }
                    }
                    var Delete=_context.ProForm.Where(i => i.ProJectTypeId == id).ToList();
                    _context.ProForm.RemoveRange(Delete);
                    _context.SaveChanges();
                    _context.ProForm.AddRange(forms);
                    _context.SaveChanges();
                    forms = _context.ProForm.Where(i => i.ProJectTypeId == id).ToList();


                }
                else throw new Exception("Name And AName is  unique value");

                return Ok(new
                {

                    ProJectType.id,
                    ProJectType.Name,
                    ProJectType.AName,
                    ProForm = forms.Select(i => new { i.AName, i.Id, i.Name, i.Type, i.Required }).ToList(),
                });
            }
            catch (Exception e) { return BadRequest(e.InnerException); }



        }

        // POST: api/ProJectTypes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<IActionResult> PostProJectType(ProJectTypeModelView Model)
        {

            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (!await userManager.IsInRoleAsync(user, "Adman") && user.Block) return Unauthorized("Only  Adman");


            var count = _context.ProJectType.Where(i => i.AName == Model.AName || i.Name == Model.Name).ToList().Count;
            if(count==0)
            {

                var ProJectType = new ProJectType();
                ProJectType.AName = Model.AName;
                ProJectType.Name = Model.Name;

                _context.ProJectType.Add(ProJectType);
                _context.SaveChanges();
                _context.ProForm.AddRange(Model.ProForm.Select(i => new ProForm()
                {

                    Name = i.Name,
                    AName = i.AName,
                    Type = i.Type,
                    Required = i.Required,
                    ProJectTypeId = ProJectType.id
                }));



                _context.SaveChanges();






                return Ok(new
                {

                    ProJectType.id,
                    ProJectType.Name,
                    ProJectType.AName,
                    ProForm = ProJectType.ProForm.Select(i => new { i.AName, i.Id, i.Name, i.Type, i.Required }).ToList(),
                });

            }
            else
            {
                return BadRequest("Name And AName is  unique value");
            }

        }

        // DELETE: api/ProJectTypes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ProJectType>> DeleteProJectType(int id)
        {

            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (!await userManager.IsInRoleAsync(user, "Adman") && user.Block) return Unauthorized("Only  Adman");


            var proJectType = await _context.ProJectType.FindAsync(id);
            if (proJectType == null)
            {
                return NotFound();
            }

            _context.ProJectType.Remove(proJectType);
            await _context.SaveChangesAsync();

            return proJectType;
        }

        private bool ProJectTypeExists(int id)
        {
            return _context.ProJectType.Any(e => e.id == id);
        }
    }
}

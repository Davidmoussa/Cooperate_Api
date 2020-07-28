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

namespace K_Api202001.ApiControler
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProFormsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProFormsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/ProForms
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<ProForm>>> GetProForm()
        //{
        //    return await _context.ProForm.ToListAsync();
        //}

        // GET: api/ProForms/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProForm(int id)
        {
            var form = _context.ProForm.Where(i => i.ProductTypeId ==id) .ToList();

            return Ok (form);
        }

        // PUT: api/ProForms/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut]
        public async Task<IActionResult> PutProForm(PreFormModelView proForm)
        {

            var form = _context.ProForm.SingleOrDefault(i => i.Id == proForm.Id);
            if (form == null) return NotFound();
            else
            {
                form.Name = proForm.Name;
                form.AName = proForm.AName;
                form.Required = proForm.Required;
                form.Type = proForm.Type;
                form.ProductTypeId = proForm.ProductTypeId;
            }
            _context.SaveChanges();

            return Ok(new
            {
                form.Id,
                form.Name,
                form.AName,
                form.ProductType,
                proForm.Required,
                proForm.Type
            }) ;
           
        }

        // POST: api/ProForms
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ProForm>> PostProForm(PreFormModelView Model)
        {

            var proForm = new ProForm() { Name = Model.Name, AName = Model.AName, ProductTypeId = Model.ProductTypeId,Required=Model.Required ,Type=Model.Type};


            _context.ProForm.Add(proForm);
             _context.SaveChanges();

            return Ok(new
            {
                proForm.Id,
                proForm.Name,
                proForm.AName,
                proForm.ProductType,
                proForm.Required,
                proForm.Type
            });
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

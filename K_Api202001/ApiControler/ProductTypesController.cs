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
    public class ProductTypesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProductTypesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/ProductTypes
        [HttpGet]
        public async Task<IActionResult> GetProductType()
        {
            return Ok(_context.ProductType
                .Include(i => i.ProForm)
                .Include(i => i.ProJectType)
                .Select(i => new
            {
                i.Id,
                i.AName,
                i.Name,
               
                Type = new { i.ProJectType.id, i.ProJectType.Name, i.ProJectType.AName },
                Form = i.ProForm.Select(i => new { i.Id, i.Name, i.AName, i.Required }).ToList(),
            }));
        }

        [HttpGet("Id")]
        public async Task<IActionResult> GetProductType(int Id)
        {
           var ProductType=_context.ProductType
                .Include(i=>i.ProForm)
                .Include(i=>i.ProJectType)
                .Select(i => new
            {
                i.Id,
                i.AName,
                i.Name,

                Type = new { i.ProJectType.id, i.ProJectType.Name, i.ProJectType.AName },
                Form = i.ProForm.Select(i => new { i.Id, i.Name, i.AName, i.Required }).ToList(),
            }).SingleOrDefault(i=>i.Id==Id);
            if (ProductType == null) return NotFound();
            else return Ok(ProductType);
        }

      

        // PUT: api/ProductTypes/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductType(int id, ProductTypeModelView Model)
        {

            var ProdectType = _context.ProductType.SingleOrDefault(i => i.Id == id);
            if (ProdectType == null) return NotFound();
            else
            {
                ProdectType.Name = Model.Name;
                ProdectType.AName = Model.AName;
                ProdectType.ProJectTypeId = Model.ProJectTypeId;
             
            }
            _context.ProductType.Add(ProdectType);
            _context.SaveChanges();
           
            return Ok (new { 
                ProdectType.Id ,
                ProdectType.AName ,
                ProdectType.Name ,
                ProdectType.ProJectTypeId ,
            });
        }

        // POST: api/ProductTypes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<IActionResult> PostProductType(ProductTypeModelView Model)
        {
            var prodectType = new ProductType()
            {
                AName = Model.AName,
                Name = Model.Name,
                ProJectTypeId = Model.ProJectTypeId
            };
            _context.ProductType.Add(prodectType);
            _context.SaveChanges();

            return Ok(new
            {
                prodectType.Id,
                prodectType.AName,
                prodectType.Name,
                prodectType.ProJectTypeId,
            });
        }

        // DELETE: api/ProductTypes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ProductType>> DeleteProductType(int id)
        {
            var productType = await _context.ProductType.FindAsync(id);
            if (productType == null)
            {
                return NotFound();
            }

            _context.ProductType.Remove(productType);
            await _context.SaveChangesAsync();

            return productType;
        }

        private bool ProductTypeExists(int id)
        {
            return _context.ProductType.Any(e => e.Id == id);
        }
    }
}

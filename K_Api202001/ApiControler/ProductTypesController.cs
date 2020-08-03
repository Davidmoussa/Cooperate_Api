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
    public class categoryController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public float pageCount { get; set; }
        public int itemCount = 20;
        public categoryController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/ProductTypes
        [HttpGet]
        public async Task<IActionResult> GetProduc( int currentPage)
        {
            var ProductType = _context.ProductType
               
                .Include(i => i.ProJectType)
                .Select(i => new
                {
                    i.Id,
                    i.AName,
                    i.Name,

                    category = new { id = i.ProJectType.id, category = i.ProJectType.Name, Acategory = i.ProJectType.AName },
                   
                }).ToList();

            // Pagenation

            pageCount = (int)Math.Ceiling(decimal.Divide(ProductType.Count, itemCount));
            if (currentPage > pageCount - 1) currentPage = (int)pageCount - 1;
            // End 

            if (ProductType.Count == 0) return NotFound();
            else return Ok(new { itemCount, pageCount, currentPage, Data = ProductType.Skip((currentPage) * itemCount).Take(itemCount).ToList() });
        }

        [HttpGet("Id")]
        public async Task<IActionResult> GetProductType(int Id)
        {
           var ProductType=_context.ProductType
               
                .Include(i=>i.ProJectType)
                .Select(i => new
            {
                i.Id,
                i.AName,
                i.Name,

                    category = new { id = i.ProJectType.id, category = i.ProJectType.Name, Acategory = i.ProJectType.AName },
                  
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
              id=  ProdectType.Id ,
                Acategory=  ProdectType.AName ,
                category=  ProdectType.Name ,
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
                Acategory = prodectType.AName,
                category = prodectType.Name,
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

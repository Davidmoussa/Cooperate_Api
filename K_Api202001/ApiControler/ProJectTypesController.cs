using K_Api202001.Data;
using K_Api202001.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace K_Api202001.ApiControler
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProJectTypesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public float pageCount { get; set; }
        public int itemCount = 20;

        public ProJectTypesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/ProJectTypes
        [HttpGet]
        public async Task<IActionResult> GetProJectType(int currentPage)
        {
            var ProJectType=   _context.ProJectType.Select(i=>new { i.id,i.Name,i.AName}).ToList();
            // Pagenation

            pageCount = (int)Math.Ceiling(decimal.Divide(ProJectType.Count, itemCount));
            if (currentPage > pageCount - 1) currentPage = (int)pageCount - 1;
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
        public async Task<IActionResult> PutProJectType(int id, ProJectType proJectType)
        {
            if (id != proJectType.id)
            {
                return BadRequest();
            }

            _context.Entry(proJectType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProJectTypeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ProJectTypes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ProJectType>> PostProJectType(ProJectType proJectType)
        {
            _context.ProJectType.Add(proJectType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProJectType", new { id = proJectType.id }, proJectType);
        }

        // DELETE: api/ProJectTypes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ProJectType>> DeleteProJectType(int id)
        {
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

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using K_Api202001.Data;
using K_Api202001.Models;
using Microsoft.AspNetCore.Identity;

namespace K_Api202001.ApiControler
{
    [Route("api/[controller]")]
    [ApiController]
    public class CitiesController : ControllerBase
    {

        private readonly UserManager<UserIdentity> userManager;
        private readonly ApplicationDbContext _context;


        public float pageCount { get; set; }
        public int itemCount = 20;
        //var item in Model.Attorney.OrderBy(d => d.AttorneyID).Skip((Model.currentPage) * Model.pagein).Take(Model.pagein).ToList()

        public CitiesController(ApplicationDbContext context, UserManager<UserIdentity> _userManager)
        {
            userManager = _userManager;
            _context = context;
        }

        // GET: api/Cities
        [HttpGet]
        public async Task<IActionResult> GetCities( int currentPage)
        {
           
                var Cities = _context.Cities.Select (i=>new { i.id,i.AName, i.Name}).ToList();
                // Pagenation

                pageCount = (int)Math.Ceiling(decimal.Divide(Cities.Count, itemCount));
                if (currentPage > pageCount - 1) currentPage = (int)pageCount - 1;
                // End 

                if (Cities.Count == 0) return NotFound();
                else return Ok(new { itemCount, pageCount, currentPage, Data = Cities.Skip((currentPage) * itemCount).Take(itemCount).ToList() });
         
        }

        // GET: api/Cities/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCity(int id)
        {
            var city =  _context.Cities.Select(i => new { i.id, i.AName, i.Name }).SingleOrDefault(i => i.id == id);

            if (city == null)
            {
                return NotFound();
            }

            return Ok( city);
        }

        // PUT: api/Cities/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCity(int id, City city)
        {
            if (id != city.id)
            {
                return BadRequest();
            }

            _context.Entry(city).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CityExists(id))
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

        // POST: api/Cities
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<City>> PostCity(City city)
        {
            _context.Cities.Add(city);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCity", new { id = city.id }, city);
        }

        // DELETE: api/Cities/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<City>> DeleteCity(int id)
        {
            var city = await _context.Cities.FindAsync(id);
            if (city == null)
            {
                return NotFound();
            }

            _context.Cities.Remove(city);
            await _context.SaveChangesAsync();

            return city;
        }

        private bool CityExists(int id)
        {
            return _context.Cities.Any(e => e.id == id);
        }
    }
}

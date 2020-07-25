using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using K_Api202001.Data;
using K_Api202001.Models;

namespace K_Api202001.ApiControler
{
    [Route("api/[controller]")]
    [ApiController]
    public class zonesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public zonesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/zones
        [HttpGet("/{CityId}")]
        public async Task<ActionResult<IEnumerable<zone>>> GetZones(int CityId)
        {
            return await _context.Zones.Where(i=>i.Cityid== CityId).ToListAsync();
        }

        // GET: api/zones/5
        [HttpGet("{id}")]
        public async Task<ActionResult<zone>> Getzone(int id)
        {
            var zone = await _context.Zones.FindAsync(id);

            if (zone == null)
            {
                return NotFound();
            }

            return zone;
        }

        // PUT: api/zones/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Putzone(int id, zone zone)
        {
            if (id != zone.id)
            {
                return BadRequest();
            }

            _context.Entry(zone).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!zoneExists(id))
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

        // POST: api/zones
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<zone>> Postzone(zone zone)
        {
            _context.Zones.Add(zone);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getzone", new { id = zone.id }, zone);
        }

        // DELETE: api/zones/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<zone>> Deletezone(int id)
        {
            var zone = await _context.Zones.FindAsync(id);
            if (zone == null)
            {
                return NotFound();
            }

            _context.Zones.Remove(zone);
            await _context.SaveChangesAsync();

            return zone;
        }

        private bool zoneExists(int id)
        {
            return _context.Zones.Any(e => e.id == id);
        }
    }
}

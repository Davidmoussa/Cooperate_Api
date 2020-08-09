using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using K_Api202001.Data;
using K_Api202001.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;

namespace K_Api202001.ApiControler
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class NewsController : ControllerBase
    {
        private readonly UserManager<UserIdentity> userManager;
        private readonly ApplicationDbContext _context;


        public float pageCount { get; set; }
        public int itemCount = 20;
        //var item in Model.Attorney.OrderBy(d => d.AttorneyID).Skip((Model.currentPage) * Model.pagein).Take(Model.pagein).ToList()

        public NewsController(ApplicationDbContext context, UserManager<UserIdentity> _userManager)
        {
            userManager = _userManager;
            _context = context;
        }
        // GET: api/News
        [HttpGet]
        public async Task<IActionResult> GetNews(int currentPage)
        {
           var News = _context.News.ToList();
            pageCount = (int)Math.Ceiling(decimal.Divide(News.Count, itemCount));
          //  if (currentPage > pageCount - 1) currentPage = (int)pageCount - 1;
            // End 

            if (News.Count == 0) return NotFound();
            else return Ok(new { itemCount, pageCount, currentPage, Data = News.Skip((currentPage) * itemCount).Take(itemCount).ToList() });

        }

        // GET: api/News/5
        [HttpGet("{id:int}")]
        public async Task<ActionResult<News>> GetNewsid(int id)
        {

            var news = await _context.News.FindAsync(id);

            if (news == null)
            {
                return NotFound();
            }

            return news;
        }

        // PUT: api/News/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNews(int id, News news)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (await userManager.IsInRoleAsync(user, "Adman"))
            {


                if (id != news.id)
                {
                    return BadRequest();
                }

                _context.Entry(news).State = EntityState.Modified;

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!NewsExists(id))
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
            else return Unauthorized();
          
        }

        // POST: api/News
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<News>> PostNews(News news)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (await userManager.IsInRoleAsync(user, "Adman"))
            {


                _context.News.Add(news);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetNews", new { id = news.id }, news);
            }
            else return Unauthorized();
        }

        // DELETE: api/News/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<News>> DeleteNews(int id)
        {
            var news = await _context.News.FindAsync(id);
            if (news == null)
            {
                return NotFound();
            }

            _context.News.Remove(news);
            await _context.SaveChangesAsync();

            return news;
        }

        private bool NewsExists(int id)
        {
            return _context.News.Any(e => e.id == id);
        }
    }
}

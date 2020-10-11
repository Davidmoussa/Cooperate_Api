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
    public class NotificationTokensController : ControllerBase
    {
        private readonly UserManager<UserIdentity> userManager;
        private readonly ApplicationDbContext _context;


        public float pageCount { get; set; }
        public int itemCount = 20;
        //var item in Model.Attorney.OrderBy(d => d.AttorneyID).Skip((Model.currentPage) * Model.pagein).Take(Model.pagein).ToList()

        public NotificationTokensController(ApplicationDbContext context, UserManager<UserIdentity> _userManager)
        {
            userManager = _userManager;
            _context = context;
        }








        // POST: api/NotificationTokens
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost("{connectionFierbaseId}")]
        public async Task<ActionResult> PostNotificationToken(string connectionFierbaseId)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);

            var notificationToken = new NotificationToken { UserId = user.Id, connectionFierbaseId = connectionFierbaseId, Type = userManager.GetRolesAsync(user).Result.FirstOrDefault() };

            _context.NotificationTokens.Add(notificationToken);
            _context.SaveChanges();
            return Ok();

        }

        // DELETE: api/NotificationTokens/5
        [HttpDelete("{connectionFierbaseId}")]
        public async Task<ActionResult> DeleteNotificationToken(string connectionFierbaseId)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            var NotificationToken = _context.NotificationTokens.SingleOrDefault(i => i.connectionFierbaseId == connectionFierbaseId && i.UserId == user.Id);
            if (NotificationToken == null) return NotFound();
            else
            {
                _context.NotificationTokens.Remove(NotificationToken);
                _context.SaveChanges();
                return Ok();
            }
 
        }

        private bool NotificationTokenExists(string id)
        {
            return _context.NotificationTokens.Any(e => e.UserId == id);
        }
    }
}

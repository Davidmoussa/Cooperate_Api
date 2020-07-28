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
    public class ReportController: ControllerBase
    {
        private readonly UserManager<UserIdentity> userManager;
        private readonly ApplicationDbContext _context;


        public float pageCount { get; set; }
        public int itemCount = 20;
        //var item in Model.Attorney.OrderBy(d => d.AttorneyID).Skip((Model.currentPage) * Model.pagein).Take(Model.pagein).ToList()

        public ReportController(ApplicationDbContext context, UserManager<UserIdentity> _userManager)
        {
            userManager = _userManager;
            _context = context;
        }

      [HttpGet("/{Id}")]
        public async Task<IActionResult> GetReportById  (int Id)
        {
            


            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (await userManager.IsInRoleAsync(user, "Adman"))
            {
              var report =   _context.Reports.Include(i => i.UserIdentity).Select(i =>
              new
              {
                  i.Id,
                  i.Date,
                  i.Text,
                  Acount = new { i.UserIdentity.Id, i.Type, i.UserIdentity.PhoneNumber, i.UserIdentity.Email }

              }
              ).SingleOrDefault(i => i.Id == Id);

              
                if (report == null) return NotFound();
                else return Ok(report);
            }
            else return Unauthorized();

        }

        [HttpPost("Text")]
        public async Task<IActionResult> postReports( string Text)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (await userManager.IsInRoleAsync(user, "User"))
            {
                var report = new Report();
                report.Date = DateTime.Now;
                report.Text = Text;
                report.AcountId = user.Id;
                report.Type = "User";
                _context.Reports.Add(report);
                _context.SaveChanges();
                return Ok(new { report.Id, report.Date, report.Text, report.AcountId })  ;
            }
            else if(await userManager.IsInRoleAsync(user, "Sealler"))
            {
                var report = new Report();
                report.Date = DateTime.Now;
                report.Text = Text;
                report.AcountId = user.Id;
                report.Type = "Sealler";
                _context.Reports.Add(report);
                _context.SaveChanges();
                return Ok(new { report.Id, report.Date, report.Text, report.AcountId });
            }

        
            else return Unauthorized();

        }


        [HttpGet("currentPage")]
        public async Task<IActionResult> GetReports( int  currentPage)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (await userManager.IsInRoleAsync(user, "Adman"))
            {
                var report = _context.Reports.Include(i => i.UserIdentity).Select(i =>
              new
              {
                  i.Id,
                  i.Date,
                  i.Text,
                  Acount = new { i.UserIdentity.Id, i.Type, i.UserIdentity.PhoneNumber, i.UserIdentity.Email }

              }
                ).OrderByDescending(i => i.Date).ToList();
                // Pagenation
                
                  pageCount = (int)Math.Ceiling(decimal.Divide(report.Count, itemCount));
                if (currentPage > pageCount - 1) currentPage =(int) pageCount - 1;
                // End 

                if (report.Count == 0) return NotFound();
                else return Ok(new { itemCount, pageCount, currentPage, Data= report.Skip((currentPage) * itemCount).Take(itemCount).ToList() });

            }
            else return Unauthorized();

        }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using K_Api202001.Data;
using K_Api202001.Models;
using K_Api202001.Models.ModeView;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace K_Api202001.ApiControler
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class RatesController : ControllerBase
    {

        private readonly UserManager<UserIdentity> userManager;
        private readonly ApplicationDbContext _context;


        public float pageCount { get; set; }
        public int itemCount = 20;
        //var item in Model.Attorney.OrderBy(d => d.AttorneyID).Skip((Model.currentPage) * Model.pagein).Take(Model.pagein).ToList()

        public RatesController(ApplicationDbContext context, UserManager<UserIdentity> _userManager)
        {
            userManager = _userManager;
            _context = context;
        }
        // GET: api/News
       


        [HttpPost("product")]
        public async Task<IActionResult> PostRateproduct(RateproductmodelView model)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (await userManager.IsInRoleAsync(user, "User") && !user.Block)
            {
                var product = _context.products.SingleOrDefault(i => i.Id == model.productId && i.Delete == false);
                if (product == null) return NotFound();
                var rate = _context.Rateproducts.SingleOrDefault(i => i.userId == user .Id && i.productId == product.Id);

                if (rate== null)
                {
                     rate = new Rateproduct
                    {
                         userId = user.Id,
                         productId = model.productId,
                        comment = model.comment,
                        reate = model.reate,

                    };
                    _context.Rateproducts.Add(rate);
                }
                else
                {
                    rate.reate = model.reate;
                    rate.comment = model.comment;
                }
                _context.SaveChanges();
                return Ok(new {
                    rate.productId,
                    rate.reate,
                    rate.comment,
                    rate.userId,
                   
                });
            }
            else
            {
                return Unauthorized();
            }
        }

        [HttpPost("Sealler")]
        public async Task<IActionResult> SeallerRatepost(RateseallermodelView model)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (await userManager.IsInRoleAsync(user, "User") && !user.Block)
            {
                var Sealler = _context.Seallers.SingleOrDefault(i => i.id == model.seallerId && i.UserIdentity.Block == false);
                if (Sealler == null) return NotFound();
                var rate = _context.Rateseallers.SingleOrDefault(i => i.userId == user.Id && i.seallerId == Sealler.id);

                if (rate == null)
                {
                    rate = new Ratesealler
                    {
                        userId = user.Id,
                        seallerId = model.seallerId,
                        comment = model.comment,
                        reate = model.reate,

                    };
                    _context.Rateseallers.Add(rate);
                }
                else
                {
                    rate.reate = model.reate;
                    rate.comment = model.comment;
                }
                _context.SaveChanges();
                return Ok(new
                {
                    rate.seallerId,
                    rate.reate,
                    rate.comment,
                    rate.userId,
                   
                });
            }
            else
            {
                return Unauthorized();
            }
        }

        [HttpDelete("product/id")]
        public async Task<IActionResult> Deleterateproduct(int id)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (await userManager.IsInRoleAsync(user, "User") && !user.Block)
            {
                var rare = _context.Rateproducts.SingleOrDefault(i => i.productId == id && i.userId == user.Id);
                if (rare == null) return NotFound();
                _context.Rateproducts.Remove(rare);
                _context.SaveChanges();
                return Ok();
            } else if ((await userManager.IsInRoleAsync(user, "Adman") && !user.Block)){
                var rare = _context.Rateproducts.SingleOrDefault(i => i.productId == id);
                if (rare == null) return NotFound();
                _context.Rateproducts.Remove(rare);
                _context.SaveChanges();
                return Ok();
            } else return Unauthorized();
         }


        [HttpDelete("sealler/id")]
        public async Task<IActionResult> Deleterateseallert(string id)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (await userManager.IsInRoleAsync(user, "User") && !user.Block)
            {
                var rare = _context.Rateseallers.SingleOrDefault(i => i.seallerId == id && i.userId == user.Id);
                if (rare == null) return NotFound();
                _context.Rateseallers.Remove(rare);
                _context.SaveChanges();
                return Ok();
            }
            else if ((await userManager.IsInRoleAsync(user, "Adman") && !user.Block))
            {
                var rare = _context.Rateseallers.SingleOrDefault(i => i.seallerId == id );
                if (rare == null) return NotFound();
                _context.Rateseallers.Remove(rare);
                _context.SaveChanges();
                return Ok();
            }
            else return Unauthorized();
        }

    }
}
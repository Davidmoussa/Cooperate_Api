using K_Api202001.Data;
using K_Api202001.Models;
using K_Api202001.Models.ModeView;
using K_Api202001.Tools;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace K_Api202001.ApiControler
{

    [Route("api/[controller]")]
    [ApiController]
    public class productsController : ControllerBase
    {
        //category
        private readonly UserManager<UserIdentity> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly ApplicationDbContext _contect;
        private IConfiguration _configuration;
        private readonly SmtpSettings _SmtpSettings;
        private readonly string imgProdectPath = "";
        private readonly string PathIMG = "";
        private readonly string wwwroot = "";
        private readonly IHostingEnvironment _environment;

        public float pageCount { get; set; }
        public int itemCount = 20;
        public productsController(IConfiguration configuration, ApplicationDbContext db, UserManager<UserIdentity> _userManager, RoleManager<IdentityRole> _roleManager, SignInManager<UserIdentity> signInManager , IHostingEnvironment _environment)
        {
            userManager = _userManager;
            roleManager = _roleManager;
            _contect = db;
            _configuration = configuration;
            PathIMG = configuration["IMG:PathIMG"];
            imgProdectPath = PathIMG ;


            //wwwroot = "wwwroot/Upload/product/";//  Path.Combine(_environment.ContentRootPath, "wwwroot/Upload/product/");
             wwwroot = configuration["IMG:imgupload"];
            //_SmtpSettings = new SmtpSettings();
            //_SmtpSettings.Password = configuration["Smtp:Password"];
            //_SmtpSettings.Port = configuration["Smtp:Port"];
            //_SmtpSettings.Server = configuration["Smtp:Server"];
            //_SmtpSettings.FromAddress = configuration["Smtp:FromAddress"];

        }

        //[HttpGet]
        //public async Task<IActionResult> ProdecGet()
        //{

        //}
        [HttpGet]
        public async Task<IActionResult> ProdecGet( int currentPage)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
       
            if ( await userManager.IsInRoleAsync(user, "Adman") && user?.Confirmed != Confirmed.block && !user.Block)
            {
                var prodect = _contect.products.Where(i => i.Delete == false)
                                      .Include(i => i.Colors)
                                      .Include(i => i.sealler)
                                      .Include(i => i.sealler.ProJectType)
                                      .Include(i => i.sealler.UserIdentity)
                                      .Include(i => i.Form)
                                     .Include(i => i.sealler.City)
                                     .Include(i => i.sealler.Rates)
                                      .Include(i => i.sealler.zone)
                                      .Include(i => i.sealler.Rates)
                                      .Include(i => i.Img)
                                      .Include(i => i.Rate)
                                      .Select(i =>
                                      new
                                      {
                                          i.Id,
                                          i.Name,
                                          i.AName,
                                          i.description,
                                          i.price,
                                          i.Stock,
                                          i.StockCount,
                                          i.Timespent,
                                          category = new { id = i.sealler.ProJectType.id, category = i.sealler.ProJectType.Name, Acategory = i.sealler.ProJectType.AName },
                                          sealler = new
                                          {
                                              i.sealler.id,
                                              i.sealler.projectAName,
                                              i.sealler.projectName,
                                              i.sealler.ProJectTypeId,
                                              i.sealler.UserIdentity.Email,
                                              i.sealler.UserIdentity.PhoneNumber,
                                              City = i.sealler.City == null ? null : new { i.sealler.City.id, i.sealler.City.Name, i.sealler.City.AName },
                                              zone = i.sealler.zone == null ? null : new { i.sealler.zone.id, i.sealler.zone.Name, i.sealler.zone.AName },
                                               rates = new
                                               {
                                                   rate = i.sealler.Rates.Count == 0 ? 0 : i.sealler.Rates.Sum(s => s.reate) / i.sealler.Rates.Count,
                                                   ratecount = i.sealler.Rates.Count,
                                                   rates = i.sealler.Rates.Select(i => new { i.seallerId, i.userId, i.reate, i.comment })
                                               }
                                          },
                                          Colors = i.Colors.Select(i => new { i.AColor, i.Id, i.Code, i.Color }).ToList(),
                                          Imgs = i.Img.Select(i => new { i.Id, img = imgProdectPath + i.img }).ToList(),
                                          Form = i.Form.Select(i => new { i.FormId, i.value, i.Form.AName, i.Form.Name, i.Form.Type, i.Form.Required }).ToList(),
                                          rates =  new { rate = i.Rate.Count == 0 ? 0 : i.Rate.Sum(s => s.reate) / i.Rate.Count,
                                              ratecount = i.Rate.Count,
                                              rates = i.Rate.Select(i=>new {i.productId, i.userId, i.reate, i.comment })
                                              }
                          
                                      }

                                      ).ToList();


                // Pagenation

                pageCount = (int)Math.Ceiling(decimal.Divide(prodect.Count, itemCount));
             //   if (currentPage > pageCount - 1) currentPage = (int)pageCount - 1;
                // End 

                if (prodect.Count == 0) return NotFound();
                else return Ok(new { itemCount= prodect.Count, pageCount, currentPage, Data = prodect.Skip((currentPage) * itemCount).Take(itemCount).ToList() });
            }
            else if (await userManager.IsInRoleAsync(user, "Sealler") && user?.Confirmed == Confirmed.approved && !user.Block)
            {
                var prodect = _contect.products.Where(i => i.Delete == false && i.SeallerId == user.Id)
                                      .Include(i => i.Colors)

                                      .Include(i => i.Form)
                                      .Include(i => i.Form)
                                      .Include(i => i.Img)
                                      .Include(i => i.Rate)
                                      .Select(i =>
                                      new
                                      {
                                          i.Id,
                                          i.Name,
                                          i.AName,
                                          i.description,
                                          i.price,
                                          i.Stock,
                                          i.StockCount,
                                          i.Timespent,


                                          Colors = i.Colors.Select(i => new { i.AColor, i.Id, i.Code, i.Color }).ToList(),
                                          Imgs = i.Img.Select(i => new { i.Id, img = imgProdectPath + i.img }).ToList(),
                                          Form = i.Form.Select(i => new { i.FormId, i.value, i.Form.AName, i.Form.Name, i.Form.Type, i.Form.Required }).ToList(),
                                           
                                          rates = new
                                          {
                                              rate = i.Rate.Count == 0 ? 0 : i.Rate.Sum(s => s.reate) / i.Rate.Count,
                                              ratecount = i.Rate.Count,
                                              rates = i.Rate.Select(i => new { i.productId, i.userId, i.reate, i.comment }).ToList()
                                          }
                                      }

                                      ).ToList();


                // Pagenation

                pageCount = (int)Math.Ceiling(decimal.Divide(prodect.Count, itemCount));
              //  if (currentPage > pageCount - 1) currentPage = (int)pageCount - 1;
                // End 

                if (prodect.Count == 0) return NotFound();
                else return Ok(new { itemCount= prodect.Count, pageCount, currentPage, Data = prodect.Skip((currentPage) * itemCount).Take(itemCount).ToList() });
            }
            else return Unauthorized();
        }

        [HttpGet("categoryId")]
        public async Task<IActionResult> ProdecGetbyProductTypeId( int currentPage, int categoryId)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (user == null) return Unauthorized();
            if (await userManager.IsInRoleAsync(user, "Sealler") && user?.Confirmed == Confirmed.approved && !user.Block)
            {
                var prodect = _contect.products.Where(i => i.sealler.ProJectTypeId == categoryId && i.SeallerId== user.Id&& i.Delete == false)
                       .Include(i => i.Colors)
                       .Include(i => i.sealler)
                       .Include(i => i.sealler.UserIdentity)
                       .Include(i => i.Form)
                       .Include(i => i.Form)
                       .Include(i => i.Img)
                       .Include(i => i.Rate)
                       .Select(i =>
                       new
                       {
                           i.Id,
                           i.Name,
                           i.AName,
                           i.price,
                           i.description,
                           i.Stock,
                           i.StockCount,
                           i.Timespent,
                           //category = new { id = i.sealler.ProJectType.id, category = i.sealler.ProJectType.Name, Acategory = i.sealler.ProJectType.AName },
                           //   sealler = new { i.sealler.id, i.sealler.projectAName, i.sealler.projectName, i.sealler.ProJectTypeId, i.sealler.UserIdentity.Email, i.sealler.UserIdentity.PhoneNumber },
                           Colors = i.Colors.Select(i => new { i.AColor, i.Id, i.Code, i.Color }).ToList(),
                           Imgs = i.Img.Select(i => new { i.Id, img = imgProdectPath + i.img }).ToList(),
                           Form = i.Form.Select(i => new { i.FormId, i.value, i.Form.AName, i.Form.Name, i.Form.Type, i.Form.Required }).ToList(),
                           rates = new
                           {
                               rate = i.Rate.Count == 0 ? 0 : i.Rate.Sum(s => s.reate) / i.Rate.Count,
                               ratecount = i.Rate.Count,
                               rates = i.Rate.Select(i => new { i.productId, i.userId, i.reate, i.comment }).ToList()
                           }
                       }

                       ).ToList();
                // Pagenation

                pageCount = (int)Math.Ceiling(decimal.Divide(prodect.Count, itemCount));
               // if (currentPage > pageCount - 1) currentPage = (int)pageCount - 1;
                // End 

                if (prodect.Count == 0) return NotFound();
                else return Ok(new { itemCount, pageCount, currentPage, Data = prodect.Skip((currentPage) * itemCount).Take(itemCount).ToList() });
            }
           
          else if ((await userManager.IsInRoleAsync(user, "User") || await userManager.IsInRoleAsync(user, "Adman")) && user?.Confirmed != Confirmed.block && !user.Block)
            {
                var prodect = _contect.products.Where(i => i.sealler.ProJectTypeId == categoryId && i.sealler.UserIdentity.Confirmed == Confirmed.approved && i.Delete == false)
                                      .Include(i => i.Colors)
                                      .Include(i => i.sealler)
                                       .Include(i => i.sealler.ProJectType)
                                      .Include(i => i.sealler.UserIdentity)
                                      .Include(i => i.Form)
                                      .Include(i => i.Form)
                                     .Include(i => i.sealler.City)
                                     .Include(i => i.sealler.zone)
                                     .Include(i => i.sealler.Rates)
                                     .Include(i => i.Rate)
                                      .Select(i =>
                                      new
                                      {
                                          i.Id,
                                          i.Name,
                                          i.AName,
                                          i.description,
                                          i.price,
                                          i.Stock,
                                          i.StockCount,
                                          i.Timespent,
                                          category = new { id = i.sealler.ProJectType.id, category = i.sealler.ProJectType.Name, Acategory = i.sealler.ProJectType.AName },
                                          sealler = new
                                          {
                                              i.sealler.id,
                                              i.sealler.projectAName,
                                              i.sealler.projectName,
                                              i.sealler.ProJectTypeId,
                                              i.sealler.UserIdentity.Email,
                                              i.sealler.UserIdentity.PhoneNumber,
                                              City = i.sealler.City == null ? null : new { i.sealler.City.id, i.sealler.City.Name, i.sealler.City.AName },
                                              zone = i.sealler.zone == null ? null : new { i.sealler.zone.id, i.sealler.zone.Name, i.sealler.zone.AName },
                                           rates = new
                                           {
                                               rate = i.sealler.Rates.Count == 0 ? 0 : i.sealler.Rates.Sum(s => s.reate) / i.sealler.Rates.Count,
                                               ratecount = i.sealler.Rates.Count,
                                               rates = i.sealler.Rates.Select(i => new { i.seallerId, i.userId, i.reate, i.comment })
                                           }
                                          },
                                          Colors = i.Colors.Select(i => new { i.AColor, i.Id, i.Code, i.Color }).ToList(),
                                          Imgs = i.Img.Select(i => new { i.Id, img = imgProdectPath + i.img }).ToList(),
                                          Form = i.Form.Select(i => new { i.FormId, i.value, i.Form.AName, i.Form.Name, i.Form.Type, i.Form.Required }).ToList(),
                                           rates = new
                                           {
                                               rate = i.Rate.Count == 0 ? 0 : i.Rate.Sum(s => s.reate) / i.Rate.Count,
                                               ratecount = i.Rate.Count,
                                               rates = i.Rate.Select(i => new { i.productId, i.userId, i.reate, i.comment }).ToList()
                                           }
                                      }

                                      ).ToList();
                // Pagenation

                pageCount = (int)Math.Ceiling(decimal.Divide(prodect.Count, itemCount));
            //    if (currentPage > pageCount - 1) currentPage = (int)pageCount - 1;
                // End 

                if (prodect.Count == 0) return NotFound();
                else return Ok(new { itemCount, pageCount, currentPage, Data = prodect.Skip((currentPage) * itemCount).Take(itemCount).ToList() });
            }
            else return Unauthorized();
            }

        [HttpGet("categoryId/{search}")]
        public async Task<IActionResult> search(int currentPage, string search)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (user == null) return Unauthorized();
            if (await userManager.IsInRoleAsync(user, "Sealler") && user?.Confirmed == Confirmed.approved && !user.Block)
            {
                var prodect = _contect.products.Where(i => (
                i.Name==search||
                i.AName==search
             
                ) && i.SeallerId == user.Id && i.Delete == false)
                       .Include(i => i.Colors)
                       .Include(i => i.sealler)
                       .Include(i => i.sealler.UserIdentity)
                       .Include(i => i.Form)
                       
                       .Include(i => i.Img)
                       .Include(i => i.Rate)
                       .Select(i =>
                       new
                       {
                           i.Id,
                           i.Name,
                           i.AName,
                           i.description,
                           i.price,
                           i.Stock,
                           i.StockCount,
                           i.Timespent,
                         //  category = new { id = i.sealler.ProJectType.id, category = i.sealler.ProJectType.Name, Acategory = i.sealler.ProJectType.AName },
                           //   sealler = new { i.sealler.id, i.sealler.projectAName, i.sealler.projectName, i.sealler.ProJectTypeId, i.sealler.UserIdentity.Email, i.sealler.UserIdentity.PhoneNumber },
                           Colors = i.Colors.Select(i => new { i.AColor, i.Id, i.Code, i.Color }).ToList(),
                           Imgs = i.Img.Select(i => new { i.Id, img = imgProdectPath + i.img }).ToList(),
                           Form =i.Form.Select(i=>new { i.FormId,i.value , i.Form.AName, i.Form.Name ,i.Form.Type, i.Form.Required  }),
                            rates = new
                            {
                                rate = i.Rate.Count == 0 ? 0 : i.Rate.Sum(s => s.reate) / i.Rate.Count,
                                ratecount = i.Rate.Count,
                                rates = i.Rate.Select(i => new { i.productId, i.userId, i.reate, i.comment }).ToList()
                            }
                       }

                       ).ToList();
                // Pagenation

                pageCount = (int)Math.Ceiling(decimal.Divide(prodect.Count, itemCount));
               // if (currentPage > pageCount - 1) currentPage = (int)pageCount - 1;
                // End 

                if (prodect.Count == 0) return NotFound();
                else return Ok(new { itemCount = prodect.Count, pageCount, currentPage, Data = prodect.Skip((currentPage) * itemCount).Take(itemCount).ToList() });
            }

            else if ((await userManager.IsInRoleAsync(user, "User") || await userManager.IsInRoleAsync(user, "Adman")) && user?.Confirmed != Confirmed.block && !user.Block)
            {
                var prodect = _contect.products.Where(i => (
                i.Name == search ||
                i.AName == search ||
                i.SeallerId == search||
                i.sealler.projectAName == search ||
                i.sealler.projectName == search ||
                i.sealler.UserIdentity.PhoneNumber == search
                ) && i.sealler.UserIdentity.Confirmed == Confirmed.approved && i.Delete == false)
                                      .Include(i => i.Colors)
                                      .Include(i => i.sealler)
                                       .Include(i => i.sealler.ProJectType)

                                      .Include(i => i.sealler.UserIdentity)
                                      .Include(i => i.Form)
                                     .Include(i => i.sealler.City)
                                       .Include(i => i.sealler.zone)
                                       .Include(i => i.sealler.Rates)
                                      .Include(i => i.Img)
                                      .Include(i => i.Rate)
                                      .Select(i =>
                                      new
                                      {
                                          i.Id,
                                          i.Name,
                                          i.AName,
                                          i.description,
                                          i.price,
                                          i.Stock,
                                          i.StockCount,
                                          i.Timespent,
                                          category = new { id = i.sealler.ProJectType.id, category = i.sealler.ProJectType.Name, Acategory = i.sealler.ProJectType.AName },
                                          sealler = new { i.sealler.id, i.sealler.projectAName, i.sealler.projectName, i.sealler.ProJectTypeId, i.sealler.UserIdentity.Email, i.sealler.UserIdentity.PhoneNumber,
                                              City = i.sealler.City == null ? null : new { i.sealler.City.id, i.sealler.City.Name, i.sealler.City.AName },
                                              zone = i.sealler.zone == null ? null : new { i.sealler.zone.id, i.sealler.zone.Name, i.sealler.zone.AName },
                                               rates = new
                                               {
                                                   rate = i.sealler.Rates.Count == 0 ? 0 : i.sealler.Rates.Sum(s => s.reate) / i.sealler.Rates.Count,
                                                   ratecount = i.sealler.Rates.Count,
                                                   rates = i.sealler.Rates.Select(i => new { i.seallerId, i.userId, i.reate, i.comment })
                                               }
                                          },
                                          Colors = i.Colors.Select(i => new { i.AColor, i.Id, i.Code, i.Color }).ToList(),
                                          Imgs = i.Img.Select(i => new { i.Id, img = imgProdectPath + i.img }).ToList(),
                                          Form = i.Form.Select(i => new { i.FormId, i.value, i.Form.AName, i.Form.Name, i.Form.Type, i.Form.Required }).ToList(),
                                           rates = new
                                           {
                                               rate = i.Rate.Count == 0 ? 0 : i.Rate.Sum(s => s.reate) / i.Rate.Count,
                                               ratecount = i.Rate.Count,
                                               rates = i.Rate.Select(i => new { i.productId, i.userId, i.reate, i.comment }).ToList()
                                           }
                                      }

                                      ).ToList();
                // Pagenation

                pageCount = (int)Math.Ceiling(decimal.Divide(prodect.Count, itemCount));
               // if (currentPage > pageCount - 1) currentPage = (int)pageCount - 1;
                // End 

                if (prodect.Count == 0) return NotFound();
                else return Ok(new { itemCount= prodect.Count, pageCount, currentPage, Data = prodect.Skip((currentPage) * itemCount).Take(itemCount).ToList() });
            }
            else return Unauthorized();
        }

        [HttpGet("Id")]
        public async Task<IActionResult> ProdecGetbyId(int Id)
        {
          
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (user == null) return Unauthorized();
            if (await userManager.IsInRoleAsync(user, "Sealler") && user?.Confirmed == Confirmed.approved && !user.Block)
            {

                var prodect = _contect.products.Where(i => i.Id == Id && i.SeallerId == user.Id && i.Delete == false)
                       .Include(i => i.Colors)
                       .Include(i => i.sealler)
                       .Include(i => i.sealler.UserIdentity)
                       .Include(i => i.Form)

                       .Include(i => i.Img)
                       .Include(i => i.Rate)
                       .Select(i =>
                       new
                       {
                           i.Id,
                           i.Name,
                           i.AName,
                           i.description,
                           i.price,
                           i.Stock,
                           i.StockCount,
                           i.Timespent,
                           category = new { id = i.sealler.ProJectType.id, category = i.sealler.ProJectType.Name, Acategory = i.sealler.ProJectType.AName },
                           // sealler = new { i.sealler.id, i.sealler.projectAName, i.sealler.projectName, i.sealler.ProJectTypeId, i.sealler.UserIdentity.Email, i.sealler.UserIdentity.PhoneNumber },
                           Colors = i.Colors.Select(i => new { i.AColor, i.Id, i.Code, i.Color }).ToList(),
                           Imgs = i.Img.Select(i => new { i.Id, img = imgProdectPath + i.img }).ToList(),
                           Form = i.Form.Select(i => new { i.FormId, i.value, i.Form.AName, i.Form.Name, i.Form.Type, i.Form.Required }).ToList(),
                           rates = new
                           {
                               rate = i.Rate.Count == 0 ? 0 : i.Rate.Sum(s => s.reate) / i.Rate.Count,
                               ratecount = i.Rate.Count,
                               rates = i.Rate.Select(i => new { i.productId, i.userId, i.reate, i.comment }).ToList()
                           }
                       }

                       ).SingleOrDefault();
                if (prodect == null) return NotFound();
                return Ok(prodect);
            }
             else if ((await userManager.IsInRoleAsync(user, "User") || await userManager.IsInRoleAsync(user, "Adman")) && user?.Confirmed != Confirmed.block && !user.Block)
            {
                var prodect = _contect.products.Where(i => i.Id == Id && i.sealler.UserIdentity.Confirmed == Confirmed.approved && i.Delete == false)
                      .Include(i => i.Colors)
                      .Include(i => i.sealler)
                      .Include(i => i.sealler.ProJectType)
                      .Include(i => i.sealler.UserIdentity)
                      .Include(i => i.Form)

                      .Include(i => i.sealler.City)
                      .Include(i => i.sealler.zone)
                      .Include(i => i.sealler.Rates)
                      .Include(i => i.Img)
                      .Include(i => i.Rate)
                      .Select(i =>
                      new
                      {
                          i.Id,
                          i.Name,
                          i.AName,
                          i.description,
                          i.price,
                          i.Stock,
                          i.StockCount,
                          i.Timespent,
                          category = new { id = i.sealler.ProJectType.id, category = i.sealler.ProJectType.Name, Acategory = i.sealler.ProJectType.AName },
                          sealler = new
                          {
                              i.sealler.id,
                              i.sealler.projectAName,
                              i.sealler.projectName,
                              i.sealler.ProJectTypeId,
                              i.sealler.UserIdentity.Email,
                              i.sealler.UserIdentity.PhoneNumber,
                              City = i.sealler.City == null ? null : new { i.sealler.City.id, i.sealler.City.Name, i.sealler.City.AName },
                              zone = i.sealler.zone == null ? null : new { i.sealler.zone.id, i.sealler.zone.Name, i.sealler.zone.AName },
                              rates = new
                              {
                                  rate = i.sealler.Rates.Count == 0 ? 0 : i.sealler.Rates.Sum(s => s.reate) / i.sealler.Rates.Count,
                                  ratecount = i.sealler.Rates.Count,
                                  rates = i.sealler.Rates.Select(i => new { i.seallerId, i.userId, i.reate, i.comment })
                              }
                          },
                          Colors = i.Colors.Select(i => new { i.AColor, i.Id, i.Code, i.Color }).ToList(),
                          Imgs = i.Img.Select(i => new { i.Id, img = imgProdectPath + i.img }).ToList(),
                          Form = i.Form.Select(i => new { i.FormId, i.value, i.Form.AName, i.Form.Name, i.Form.Type, i.Form.Required }).ToList(),
                           rates = new
                           {
                               rate = i.Rate.Count == 0 ? 0 : i.Rate.Sum(s => s.reate) / i.Rate.Count,
                               ratecount = i.Rate.Count,
                               rates = i.Rate.Select(i => new { i.productId, i.userId, i.reate, i.comment }).ToList()
                           }
                      }

                      ).SingleOrDefault();
                if (prodect == null) return NotFound();
                return Ok(prodect);
            }
            else
            {
                return Unauthorized();
            }



        }

        [HttpDelete("Id")]
        public async Task<IActionResult> ProdecDeletebyId(int Id)
        {

            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (user == null) return Unauthorized();
            if (await userManager.IsInRoleAsync(user, "Sealler") && user?.Confirmed == Confirmed.approved && !user.Block)
            {

                var prodect = _contect.products
                    .Include(i=>i.Form)
                    .Include(i=>i.Colors)
                    .Include(i=>i.Img)
                    .Include(i=>i.Order)
                    .Include(i => i.Rate)
                    .SingleOrDefault(i => i.Id == Id && i.SeallerId == user.Id && i.Delete == false);
                if (prodect == null) { return NotFound(); }
                else
                {
                    var CountOrderIN = prodect.Order.Where(i =>
                     i.orderStatus == orderStatus.Approved||
                     i.orderStatus == orderStatus.delivery||
                     i.orderStatus == orderStatus.Finshed
                    ).ToList().Count;
                    if (CountOrderIN == 0)
                    {
                        prodect.Delete = true;
                        // _contect.products.Remove(prodect);
                        _contect.SaveChanges();
                        foreach (var item in prodect.Img.ToList())
                        {
                            var fileNameold = wwwroot + item.img;

                            if (System.IO.File.Exists(fileNameold)) System.IO.File.Delete(fileNameold);
                        }
                        return Ok();
                    }
                    else { return BadRequest("cannot delete this prodect  "); }
                       

                   
                    
                }
            }
            else return Unauthorized();
        }


        [HttpPut("Id")]
        public async Task<IActionResult> ProdectPost(int Id ,[FromForm] productViewUpdata model)
        {


           

            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (user == null) return Unauthorized();
            if (await userManager.IsInRoleAsync(user, "Sealler") && user?.Confirmed == Confirmed.approved && !user.Block)
            {
                try
                {

                    var forms = new List<FormView>();
                    var Colors = new List<ColorView>();
                    var ImgPathupData = new List<string>();
                    ; if (model.Forms != null)
                        forms = JsonConvert.DeserializeObject<List<FormView>>(model.Forms);

                    if (model.Colors != null)
                        Colors = JsonConvert.DeserializeObject<List<ColorView>>(model.Colors);
                    if (model.ImgPathupData != null)
                         ImgPathupData = JsonConvert.DeserializeObject<List<string>>(model.ImgPathupData);

                    var product = _contect.products
                         .Include(i => i.Colors)
                   
                      .Include(i => i.Form)

                      .Include(i => i.Img)
                        .SingleOrDefault(i => i.Id == Id && i.SeallerId==user.Id &&i.Delete==false );
                    if (product == null) return NotFound();
                  
                    product.Name = model.Name;
                    product.AName = model.AName;              
                    product.description = model.description;
                    product.Stock = model.Stock;
                    product.price = model.price;
                   
                    product.StockCount = model.Stock == true ? model.StockCount : 0;                   
                    product.Timespent = model.Timespent;
                  //  _contect.SaveChanges();
                    if (forms!=null)
                    {
                        foreach (var item in forms)
                        {
                           var Form = product.Form.SingleOrDefault(i => i.FormId == item.FormId );
                            if(Form != null)
                            {
                                Form.value = item.Value;
                            }
                            else
                            {
                                Form = new productForm() { value = item.Value, ProductId = Id, FormId = item.FormId };
                                product.Form.Add(Form);
                            }
                            //_contect.SaveChanges();
                        }
                    }

                    if (Colors !=null)
                    {
                        foreach (var item in Colors)
                        {
                            var Color = product.Colors.SingleOrDefault(i=>i.Id==item.Id);
                            if (Color != null)
                            {
                                Color.AColor = item.AColor;
                                Color.Code = item.Code;
                                Color.Color = item.Color;

                            }
                            else
                            {
                                Color = new productColor() { productId = Id, AColor = item.AColor, Color = item.Color, Code = item.Code };
                                product.Colors.Add(Color);
                            }
                           // _contect.SaveChanges();
                        }
                    }

                    List<IFormFile> Img = new List<IFormFile>();
                    Img.Add(model.Img1);
                    Img.Add(model.Img2);
                    Img.Add(model.Img3);
                    Img.Add(model.Img4);
                    Img.Add(model.Img5);
                    var productIMg = ImgMapForm.ImgList(wwwroot, Img);
                    for (int i = 0; i < productIMg.Count ; i++)
                    {

                        if (ImgPathupData.Count -1>=i)
                        {
                            var OldImg = ImgPathupData[i].Substring(imgProdectPath.Length);
                            var productIMgup = product.Img.SingleOrDefault(o => o.img == OldImg );
                            if (productIMgup != null) productIMgup.img = productIMg[i];

                        }
                        else
                        {
                            var productIMgup = new productIMg() { productId = Id, img = productIMg[i].ToString() };
                            product.Img.Add(productIMgup);
                        }
                       // _contect.SaveChanges();
                    }

                    _contect.SaveChanges();

                    foreach (var item in ImgPathupData)
                    {
                        var fileNameold = wwwroot + item.Substring(imgProdectPath.Length);

                        if (System.IO.File.Exists(fileNameold)) System.IO.File.Delete(fileNameold);
                    } 
                   

                    return Ok(new
                    {
                        product.Id,
                        product.AName,
                        product.Name,
                        product.description,
                        product.Date,
                        product.price,
                        product.StockCount,
                        product.Stock,
                        product.Timespent,
                        product.SeallerId,
                       
                        Forms = product.Form.Select(i => new { i.FormId, i.value }).ToList(),
                        Colors = product.Colors.Select(i => new { i.Id, i.AColor, i.Color, i.Code }).ToList(),
                        imgs = product.Img.Select(i => new { i.Id, img = imgProdectPath + i.img }).ToList(),

                    });


                }
                catch (Exception e) { return BadRequest(e.InnerException.ToString()); }


            }
            else return Unauthorized();



        }


        [HttpPost,DisableRequestSizeLimit]
        public async Task<IActionResult> ProdectPost([FromForm]  productView model)
        {


            List<IFormFile> Img = new List<IFormFile>();
            Img.Add(model.Img1);
            Img.Add(model.Img2);
            Img.Add(model.Img3);
            Img.Add(model.Img4);
            Img.Add(model.Img5);
          //  Img.Add(model.Img1);

            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (user == null) return Unauthorized();
            if (await userManager.IsInRoleAsync(user, "Sealler") && user?.Confirmed == Confirmed.approved && !user.Block)
            {
                try
                {
                    var forms = new List<FormView>();
                    var Colors = new List<ColorView>();
;                    if (model.Forms != null) 
                         forms = JsonConvert.DeserializeObject<List<FormView>>(model.Forms);
                   
                    if (model.Colors != null)
                         Colors = JsonConvert.DeserializeObject<List<ColorView>>(model.Colors);

                    var product = new product()
                    {
                        Name = model.Name,
                        AName = model.AName,
                        Date = DateTime.Now,
                        description = model.description,
                        Stock = model.Stock,
                        price = model.price,
                      
                        StockCount = model.Stock == true ? model.StockCount : 0,
                        SeallerId = user.Id,
                        Timespent = model.Stock != true ? model.Timespent : 0   ,
                       Colors=Colors.Select(i=>new productColor() { AColor=i.AColor,Code=i.Code, Color=i.Color}).ToList(),
                        Form=forms.Select(i=>new productForm() { FormId= i.FormId ,value=i.Value }).ToList(),
                       //Img = ImgMapForm.ImgList("E://ITI//MVC//", Img).Select (i=>new productIMg() { img= i}).ToList()

                    };
                    //product.Colors = new List<productColor>();
                    //foreach (var i in model.Colors)
                    //{
                    //    product.Colors.Add(new productColor() { AColor = i.AColor, Code = i.Code, Color = i.Color });
                    //}
                    //product.Form = new List<productForm>();
                    //foreach (var i in model.Form)
                    //{
                    //    product.Form.Add(new productForm() { FormId = i.FormId, value = i.Value });
                    //}
                    _contect.products.Add(product);
                    _contect.SaveChanges();
                    // 

                    var productIMg = ImgMapForm.ImgList(wwwroot, Img).Select(i => new productIMg() { img = i, productId = product.Id }).ToList();
                    _contect.productIMg.AddRange(productIMg);
                    _contect.SaveChanges();
                    // 
                    int x = 0;
                    return Ok(new
                    {
                        product.Id,
                        product.AName,
                        product.Name,
                        product.description,
                        product.Date,
                        product.price,
                        product.StockCount,
                        product.Stock,
                        product.Timespent,
                        product.SeallerId,
                        
                        Forms = product.Form.Select(i => new { i.FormId, i.value }).ToList(),
                        Colors = product.Colors.Select(i => new { i.Id, i.AColor, i.Color, i.Code }).ToList(),
                        imgs = productIMg.Select(i => new { i.Id, img = imgProdectPath + i.img }).ToList(),

                    }) ; 


                }
                catch (Exception e) { return BadRequest(e.InnerException.ToString()); }

               
            }
            else return Unauthorized();



        }
    }
}
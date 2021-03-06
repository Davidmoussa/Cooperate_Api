﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using K_Api202001.Data;
using K_Api202001.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using K_Api202001.Tools;
using K_Api202001.Models.ModeView;
using Microsoft.AspNetCore.Authorization;

namespace K_Api202001.ApiControler
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class OrdersController : ControllerBase
    {
        private readonly UserManager<UserIdentity> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly ApplicationDbContext _contect;
        private IConfiguration _configuration;
        private readonly SmtpSettings _SmtpSettings;
        private readonly string imgProdectPath = "";
        private readonly string ServerKey = "";
        private readonly string senderId = "";

        public float pageCount { get; set; }
        public int itemCount = 20;

        public OrdersController(IConfiguration configuration, ApplicationDbContext db, UserManager<UserIdentity> _userManager, RoleManager<IdentityRole> _roleManager, SignInManager<UserIdentity> signInManager)
        {
            userManager = _userManager;
            roleManager = _roleManager;
            _contect = db;
            _configuration = configuration;

             var PathIMG = configuration["IMG:PathIMG"];
            imgProdectPath = configuration["IMG:PathIMG"];  // PathIMG + "product/";
            ServerKey = configuration["firebase:Serverkey"];  // PathIMG + "product/";
            senderId = configuration["firebase:SenderID"];  // PathIMG + "product/";

            _SmtpSettings = new SmtpSettings();
            _SmtpSettings.Password = configuration["Smtp:Password"];
            _SmtpSettings.Port = configuration["Smtp:Port"];
            _SmtpSettings.Server = configuration["Smtp:Server"];
            _SmtpSettings.FromAddress = configuration["Smtp:FromAddress"];

        }
           

        [HttpPost("orderStatusList")]
        public async Task<IActionResult> GetOrders(orderstateview model)
        {

            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (user == null) return Unauthorized();
            if (await userManager.IsInRoleAsync(user, "Sealler") && user?.Confirmed == Confirmed.approved && !user.Block)
            {
                var order = _contect.Orders.Where(i => i.SeallerId == user.Id && (model. orderStatus.Count == 0 ? true : model.orderStatus.Contains(i.orderStatus)))
                     .Include(i => i.User)
                    .Include(i => i.User.UserIdentity)
                    .Include(i => i.Form)
                    // .Include(i => i.Color)
                    .Include(i => i.product)
                    .Include(i => i.product.Img)
                    .Include(i => i.sealler)
                    .Include(i => i.sealler.UserIdentity)
                    .Select(i => new
                    {

                        i.Id,
                        i.ProductId,
                        i.Date,
                        i.description,
                        i.orderStatus,
                        i.otherPhoneNo,
                        i.Cancel,

                        i.Cuantity,
                        i.TimespentEnd,
                        i.Timespent,
                        i.ReceiptDate,
                        i.ProductpriceTotal,
                        product = new
                        {
                            i.ProductAName,
                            i.ProductName,
                            i.Productprice,
                            i.product.Id,
                            i.ProductStock,

                            Form = i.Form.Select(i => new { i.id, i.Key, i.value }).ToList(),
                            Color = new
                            {
                                i.CodeColor,
                                i.ANameColor,
                                i.NameColor
                            },
                            img = i.product.Img.Select(i => imgProdectPath + i.img).ToList(),
                            i.product.Delete
                        },
                        User = new
                        {
                            i.UserId,
                            i.User.Name,
                            i.UserAddress,
                            i.User.UserIdentity.PhoneNumber,
                            i.User.UserIdentity.Email,
                            i.otherPhoneNo,
                           
                            //i.User.UserIdentity.PhoneNumber,
                            //i.User.UserIdentity.PhoneNumber,
                        }

                    }).OrderByDescending(i => i.Date).ToList();

                // Pagenation

                pageCount = (int)Math.Ceiling(decimal.Divide(order.Count, itemCount));
             //   if (model.currentPage > pageCount - 1) model.currentPage = (int)pageCount - 1;
                // End 

                if (order.Count == 0) return NotFound();
                else return Ok(new { itemCount, pageCount, model. currentPage, Data = order.Skip((model.currentPage) * itemCount).Take(itemCount).ToList() });

            }
           
            else return Unauthorized();

        }

        // GET: api/Orders
        [HttpGet ("orderStatus")]
        public async Task<IActionResult> GetOrders( int currentPage, orderStatus? orderStatus)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (user == null) return Unauthorized();
            if (await userManager.IsInRoleAsync(user, "Sealler") && user?.Confirmed == Confirmed.approved && !user.Block)
            {
                var order = _contect.Orders.Where(i => i.SeallerId == user.Id && (orderStatus == null ? true : i.orderStatus == orderStatus))
                     .Include(i => i.User)
                    .Include(i => i.User.UserIdentity)
                    .Include(i => i.Form)
                   // .Include(i => i.Color)
                    .Include(i => i.product)
                    .Include(i => i.product.Img)
                    .Include(i => i.sealler)
                    .Include(i => i.sealler.UserIdentity)
                    .Select(i => new {
                    
                    i.Id,
                    i.ProductId,
                    i.Date,
                    i.description,
                    i.orderStatus,
                    i.otherPhoneNo,
                  
                   
                    i.Cuantity,
                    i.TimespentEnd,
                    i.Timespent,
                    i.ReceiptDate,
                    i.ProductpriceTotal,
                        i.Cancel,
                        product =new {
                       i.ProductAName,
                       i.ProductName,
                       i.Productprice,
                       i.product.Id,
                       i.ProductStock,
                       
                        Form= i.Form.Select(i => new { i.id,i.Key,i.value} ).ToList(),
                        Color=new{
                            i.CodeColor,
                            i.ANameColor,
                            i.NameColor
                        },
                        img = i.product.Img.Select(i => imgProdectPath + i.img).ToList(),
                        i.product.Delete
                    },
                   User= new
                   {
                       i.UserId,
                       i.User.Name,
                       i.UserAddress,
                       i.User.UserIdentity.PhoneNumber,
                       i.User.UserIdentity.Email,
                       i.otherPhoneNo,

                       //i.User.UserIdentity.PhoneNumber,
                       //i.User.UserIdentity.PhoneNumber,
                   }
                    
                    }).OrderByDescending(i=>i.Date).ToList();


                // Pagenation

                pageCount = (int)Math.Ceiling(decimal.Divide(order.Count, itemCount));
              //  if (currentPage > pageCount - 1) currentPage = (int)pageCount - 1;
                // End 

                if (order.Count == 0) return NotFound();
                else return Ok(new { itemCount, pageCount, currentPage, Data = order.Skip((currentPage) * itemCount).Take(itemCount).ToList() });
             
            }
            else if (await userManager.IsInRoleAsync(user, "User") && user?.Confirmed == Confirmed.approved && !user.Block)
            {

                var order = _contect.Orders.Where(i => i.UserId == user.Id && (orderStatus == null ? true : i.orderStatus == orderStatus))
                    .Include(i=>i.User)
                    .Include(i=>i.User.UserIdentity)
                    .Include(i=>i.Form)
//.Include(i=>i.Color)
                    .Include(i=>i.product)
                    .Include(i=>i.sealler)
                    .Include(i=>i.sealler.UserIdentity)

                    .Select(i => new {

                       i.Id,
                       i.ProductId,
                       i.Date,
                       i.description,
                       i.orderStatus,
                       i.otherPhoneNo,
                        i.UserAddress,

                        i.Cuantity,
                       i.TimespentEnd,
                       i.Timespent,
                       i.ReceiptDate,
                       i.ProductpriceTotal,
                        i.Cancel,
                        product = new
                       {
                           i.ProductAName,
                           i.ProductName,
                           i.Productprice,
                           i.product.Id,
                           i.ProductStock,
                           Form = i.Form.Select(i => new { i.id, i.Key, i.value }).ToList(),
                           Color = new
                           {
                               i.CodeColor,
                               i.ANameColor,
                               i.NameColor
                           },
                           img = i.product.Img.Select(i => imgProdectPath + i.img).ToList(),
                           i.product.Delete
                       },
                        sealler = new
                       {
                           i.SeallerId,
                           i.sealler.projectAName,
                           i.sealler.projectName,
                          
                           City= i.sealler.City==null?null:new {i.sealler.City.id, i.sealler.City.Name, i.sealler.City.AName },
                           zone = i.sealler.zone==null?null:new {i.sealler.zone.id, i.sealler.zone.Name, i.sealler.zone.AName },
                           
                            //i.User.UserIdentity.PhoneNumber,
                            //i.User.UserIdentity.PhoneNumber,
                        }

                   }).OrderByDescending(i => i.Date).ToList();


                pageCount = (int)Math.Ceiling(decimal.Divide(order.Count, itemCount));
               // if (currentPage > pageCount - 1) currentPage = (int)pageCount - 1;
                // End 

                if (order.Count == 0) return NotFound();
                else return Ok(new { itemCount, pageCount, currentPage, Data = order.Skip((currentPage) * itemCount).Take(itemCount).ToList() });

            }
            else if (await userManager.IsInRoleAsync(user, "Adman") && user?.Confirmed == Confirmed.approved && !user.Block)
            {

                var order = _contect.Orders.Where(i =>  (orderStatus == null ? true : i.orderStatus == orderStatus))
                    .Include(i => i.User)
                    .Include(i => i.User.UserIdentity)
                    .Include(i => i.Form)
.Include(i => i.product.Img)
                    .Include(i => i.product)
                    .Include(i => i.sealler)
                    .Include(i => i.sealler.UserIdentity)

                    .Select(i => new {

                        i.Id,
                        i.ProductId,
                        i.Date,
                        i.description,
                        i.orderStatus,
                        i.otherPhoneNo,


                        i.Cuantity,
                        i.TimespentEnd,
                        i.Timespent,
                        i.ReceiptDate,
                        i.ProductpriceTotal,
                        i.Cancel,
                        product = new
                        {
                            i.ProductAName,
                            i.ProductName,
                            i.Productprice,
                            i.product.Id,
                            i.ProductStock,
                            i.Cancel,
                            Form = i.Form.Select(i => new { i.id, i.Key, i.value }).ToList(),
                            Color = new
                            {
                                i.CodeColor,
                                i.ANameColor,
                                i.NameColor
                            },
                            img = i.product.Img.Select(i => imgProdectPath + i.img).ToList(),
                            i.product.Delete
                        },
                        sealler = new
                        {
                            i.SeallerId,
                            i.sealler.projectAName,
                            i.sealler.projectName,

                            City = i.sealler.City == null ? null : new { i.sealler.City.id, i.sealler.City.Name, i.sealler.City.AName },
                            zone = i.sealler.zone == null ? null : new { i.sealler.zone.id, i.sealler.zone.Name, i.sealler.zone.AName },

                            //i.User.UserIdentity.PhoneNumber,
                            //i.User.UserIdentity.PhoneNumber,
                        },
                        User = new
                        {
                            i.UserId,
                            i.User.Name,
                            i.UserAddress,
                            i.User.UserIdentity.PhoneNumber,
                            i.User.UserIdentity.Email,
                            i.otherPhoneNo,

                           
                        }

                    }).OrderByDescending(i => i.Date).ToList();

                pageCount = (int)Math.Ceiling(decimal.Divide(order.Count, itemCount));
               // if (currentPage > pageCount - 1) currentPage = (int)pageCount - 1;
                // End 

                if (order.Count == 0) return NotFound();
                else return Ok(new { itemCount, pageCount, currentPage, Data = order.Skip((currentPage) * itemCount).Take(itemCount).ToList() });

            }

            else  return Unauthorized();
        }


        [HttpGet("Id")]
        public async Task<IActionResult> GetOrdersId(int  Id)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (user == null) return Unauthorized();
            if (await userManager.IsInRoleAsync(user, "Sealler") && user?.Confirmed == Confirmed.approved && !user.Block)
            {
                var order = _contect.Orders.Where(i=>i.SeallerId==user.Id)
                     .Include(i => i.User)
                    .Include(i => i.User.UserIdentity)
                    .Include(i => i.Form)
                    .Include(i => i.product.Img)
                    .Include(i => i.product)
                    .Include(i => i.sealler)
                    .Include(i => i.sealler.UserIdentity)
                    .Select(i => new {

                        i.Id,
                        i.SeallerId,
                        i.ProductId,
                        i.Date,
                        i.description,
                        i.orderStatus,
                        i.otherPhoneNo,


                        i.Cuantity,
                        i.TimespentEnd,
                        i.Timespent,
                        i.ReceiptDate,
                        i.ProductpriceTotal,
                        i.Cancel,
                        product = new
                        {
                            i.ProductAName,
                            i.ProductName,
                            i.Productprice,
                            i.product.Id,
                            i.ProductStock,
                            Form = i.Form.Select(i => new { i.id, i.Key, i.value }).ToList(),
                            Color = new
                            {
                                i.CodeColor,
                                i.ANameColor,
                                i.NameColor
                            },
                            img=i.product.Img.Select(i=> imgProdectPath+i.img).ToList(),
                            i.product.Delete
                        },
                        User = new
                        {
                            i.UserId,
                            i.User.Name,
                            i.UserAddress,
                            i.User.UserIdentity.PhoneNumber,
                            i.User.UserIdentity.Email,
                            i.otherPhoneNo,

                            //i.User.UserIdentity.PhoneNumber,
                            //i.User.UserIdentity.PhoneNumber,
                        }

                    }).SingleOrDefault(i => i.SeallerId == user.Id && i.Id == Id);
                if (order == null) return NotFound();
                return Ok(order);
            }
            else if (await userManager.IsInRoleAsync(user, "User") && user?.Confirmed == Confirmed.approved && !user.Block)
            {

                var order = _contect.Orders.Where(i => i.UserId == user.Id)
                    .Include(i => i.User)
                    .Include(i => i.User.UserIdentity)
                    .Include(i => i.Form)
                    .Include(i => i.product.Img)
                    .Include(i => i.product)
                    .Include(i => i.sealler)
                    .Include(i => i.sealler.UserIdentity)

                    .Select(i => new {

                        i.Id,
                        i.UserId,
                        i.ProductId,
                        i.Date,
                        i.description,
                        i.orderStatus,
                        i.otherPhoneNo,

                        i.UserAddress,
                        i.Cuantity,
                        i.TimespentEnd,
                        i.Timespent,
                        i.ReceiptDate,
                        i.ProductpriceTotal,
                        product = new
                        {
                            i.ProductAName,
                            i.ProductName,
                            i.Productprice,
                            i.product.Id,
                            i.ProductStock,
                            i.Cancel,
                            Form = i.Form.Select(i => new { i.id, i.Key, i.value }).ToList(),
                            Color = new
                            {
                                i.CodeColor,
                                i.ANameColor,
                                i.NameColor
                               // i.Color.Code,
                            },
                            img = i.product.Img.Select(i => imgProdectPath + i.img).ToList(),
                            i.product.Delete
                        },
                        sealler = new
                        {
                            i.SeallerId,
                            i.sealler.projectAName,
                            i.sealler.projectName,

                            City = i.sealler.City == null ? null : new { i.sealler.City.id, i.sealler.City.Name, i.sealler.City.AName },
                            zone = i.sealler.zone == null ? null : new { i.sealler.zone.id, i.sealler.zone.Name, i.sealler.zone.AName },

                            //i.User.UserIdentity.PhoneNumber,
                            //i.User.UserIdentity.PhoneNumber,
                        }

                    }).SingleOrDefault(i => i.UserId == user.Id &&  i.Id == Id);
                if (order == null) return NotFound();
                return Ok(order);

            }
            else if (await userManager.IsInRoleAsync(user, "Adman") && user?.Confirmed == Confirmed.approved && !user.Block)
            {

               
              var order = _contect.Orders
                    .Include(i => i.User)
                    .Include(i => i.User.UserIdentity)
                    .Include(i => i.Form)
                    .Include(i => i.product.Img)
                    .Include(i => i.product)
                    .Include(i => i.sealler)
                    .Include(i => i.sealler.UserIdentity)

                    .Select(i => new {

                        i.Id,
                        i.ProductId,
                        i.Date,
                        i.description,
                        i.orderStatus,
                        i.otherPhoneNo,


                        i.Cuantity,
                        i.TimespentEnd,
                        i.Timespent,
                        i.ReceiptDate,
                        i.ProductpriceTotal,
                        product = new
                        {
                            i.ProductAName,
                            i.ProductName,
                            i.Productprice,
                            i.product.Id,
                            i.ProductStock,
                            i.Cancel,
                            Form = i.Form.Select(i => new { i.id, i.Key, i.value }).ToList(),
                            Color = new
                            {
                                i.CodeColor,
                                i.ANameColor,
                                i.NameColor
                            },
                            img = i.product.Img.Select(i => imgProdectPath + i.img).ToList(),
                            i.product.Delete
                        },
                        sealler = new
                        {
                            i.SeallerId,
                            i.sealler.projectAName,
                            i.sealler.projectName,

                            City = i.sealler.City == null ? null : new { i.sealler.City.id, i.sealler.City.Name, i.sealler.City.AName },
                            zone = i.sealler.zone == null ? null : new { i.sealler.zone.id, i.sealler.zone.Name, i.sealler.zone.AName },

                            //i.User.UserIdentity.PhoneNumber,
                            //i.User.UserIdentity.PhoneNumber,
                        },
                        User = new
                        {
                            i.UserId,
                            i.User.Name,
                            i.UserAddress,
                            i.User.UserIdentity.PhoneNumber,
                            i.User.UserIdentity.Email,
                            i.otherPhoneNo,


                        }

                    }).SingleOrDefault( i=> i.Id == Id);
                if (order == null) return NotFound();
                return Ok(order);

            }
            else return Unauthorized();
        }


        [HttpPost]
        public async Task<IActionResult> PostOrders(OrderModeView model)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (user == null) return Unauthorized();
            if (await userManager.IsInRoleAsync(user, "User") && user?.Confirmed == Confirmed.approved && !user.Block)
            {

                var Prodect = _contect.products
                    .Include(i => i.Colors)
                    .Include(i => i.Form)
                    //.Include(i=>i.Form)
                    .Include(i => i.sealler)
                    .Include(i => i.Img)
                    .Include(i => i.sealler.UserIdentity)

                    .SingleOrDefault(i => i.Id == model.ProductId && i.Delete == false && i.sealler.UserIdentity.Block==false);

                var prodectColore = Prodect.Colors.SingleOrDefault(i => i.Id == model.ColorId);
                
                if (Prodect == null) return NotFound();
                if (Prodect.sealler.UserIdentity.Block==true ) return NotFound("this seller is Block");
                if (Prodect.Stock && Prodect.StockCount-model.Cuantity < 0) return NotFound("Prodect out  Stock");
                var Order = new Order();

                Order.Date = DateTime.Now;
                Order.UserId = user.Id;
                Order.UserAddress = model.UserAddress;
                Order.otherPhoneNo = model.otherPhoneNo;
                Order.description = model.description;
                Order.ProductId = Prodect.Id;
                Order.ProductAName = Prodect.AName;
                Order.ProductName = Prodect.Name;
                Order.Productprice = Prodect.price;
                Order.Timespent = Prodect.Timespent;
                Order.Cuantity = model.Cuantity;
                Order.SeallerId = Prodect.SeallerId;
                var fromprodect = _contect.productFormsetup.Where(i => i.ProductId == Prodect.Id).Include(i => i.Form).ToList();
                Order.Form = new List<OrderForm>();
                foreach (var item in fromprodect)
                {
                    
                    Order.Form.Add(new OrderForm() { Key = item.Form.Name, AKey = item.Form.AName, value = item.value });
                }


                Order.ProductStock = Prodect.Stock;
                if (Prodect.Stock)
                {
                    Prodect.StockCount -= model.Cuantity;
                    Order.orderStatus = orderStatus.Approved;
                }
                else
                {
                    Order.orderStatus = orderStatus.Ordered;
                }

                if (prodectColore != null)
                {
                    Order.CodeColor = prodectColore.Code;
                    Order.NameColor = prodectColore.Color;
                    Order.ANameColor = prodectColore.AColor;
                }



                Order.SeallerId = Prodect.SeallerId;

                _contect.Orders.Add(Order);
                _contect.SaveChanges();
                var connectionFierbaseId = _contect.NotificationTokens.Where(i =>  i.UserId == Order.SeallerId)
                       .Select(i => i.connectionFierbaseId).ToList();
                       AlertNotifiction.Notifiction_push(ServerKey, senderId, connectionFierbaseId, "لديك طلب جديد ", $"{Order.ProductAName} تم  طلب للمنتج ");



                return Ok(
                    new
                    {
                        Order.Id,
                        Order.ProductName,
                        Order.ProductAName,
                        Order.Productprice,

                        Order.description,
                        ProdectImg = Prodect.Img.Select(i => imgProdectPath + i.img).ToList(),
                       ProductForm = Order.Form?.Select(i => new { i.id, i.AKey, i.Key, i.value }).ToList(),
                        Order.CodeColor,
                        Order.ANameColor,
                        Order.NameColor,
                        Order.orderStatus,
                        Order.Cuantity,
                        Order.ProductpriceTotal,
                        Order.Date,
                        Order.Timespent,
                        Order.TimespentEnd,
                        Order.UserAddress,
                        Order.otherPhoneNo,

                    }); 

            }
            else return Unauthorized("Token not User");
        }

        [HttpPost ("ChangStatus")]
        public async Task<IActionResult> Approved(orderstateModeview model)     
        {
            try
            {
                var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
                if (user == null) return Unauthorized();
                if (await userManager.IsInRoleAsync(user, "Sealler") && user?.Confirmed == Confirmed.approved && !user.Block)
                {
                    var order = _contect.Orders.Include(i=>i.User.UserIdentity).SingleOrDefault(i => i.Id == model.OrderId && i.SeallerId == user.Id);
                    if (order == null) return NotFound();
                    //get UserDevice Key 
                    var connectionFierbaseId = _contect.NotificationTokens.Where(i => i.UserId == order.UserId).Select(i => i.connectionFierbaseId).ToList();



                    if (order.Cancel) return BadRequest($"order Cancel from User"); 
                    if (model.orderStatus == orderStatus.Approved)
                    {
                        if (order.orderStatus == orderStatus.Reject || order.orderStatus == orderStatus.Ordered)
                        {
                            order.orderStatus = model.orderStatus;
              
                                AlertNotifiction.Notifiction_push(ServerKey, senderId, connectionFierbaseId, " قبول الطلب ", $"{order.ProductAName} تم قبول طلب للمنتج ");
                            
                        }
                        else throw new Exception($"order is {order.orderStatus} ");
                    }
                    else if (model.orderStatus == orderStatus.Reject)
                    {
                        if (order.orderStatus == orderStatus.Ordered || order.orderStatus == orderStatus.Approved)
                        {
                            order.orderStatus = model.orderStatus;
                            AlertNotifiction.Notifiction_push(ServerKey, senderId, connectionFierbaseId, " رفض الطلب ", $"{order.ProductAName} تم رفض طلب للمنتج ");
                            
                        }
                        else throw new Exception($"order is {order.orderStatus} ");
                    }
                    else if (model.orderStatus == orderStatus.Finshed)
                    {
                        if (order.orderStatus == orderStatus.Approved)
                        {
                            order.orderStatus = model.orderStatus;
                            AlertNotifiction.Notifiction_push(ServerKey, senderId, connectionFierbaseId, "  الطلب ", $"{order.ProductAName} تم قبول طلب للمنتج ");

                        }
                        else throw new Exception($"order is {order.orderStatus} ");
                    }
                    else if (model.orderStatus == orderStatus.delivery)
                    {
                        if (order.orderStatus == orderStatus.Finshed || order.orderStatus == orderStatus.Approved)
                        {
                           
                                order.orderStatus = model.orderStatus;
                                AlertNotifiction.Notifiction_push(ServerKey, senderId, connectionFierbaseId, " طلب  ", $"{order.ProductAName} خلال 24 ساعة  طلبك في الوصول اليك  ");



                           
                            var Body = AlertNotifiction.ReadeFile("wwwroot//Emailfile//OrderDelvery.html")
                                     .Replace("#name#", order.User.Name)
                                     .Replace("#oductName#", order.ProductAName)
                                     ;
                            AlertNotifiction.SendEmail(order.User.UserIdentity.Email, "orderStatus  delivery", _SmtpSettings, Body);
                            //    #oductName# string body = $"Hi  \n  the Receipt Code of   Order Number# :{order.Id.ToString()} \n  Receipt Code :  {ReceiptCode.Code.ToString()} \n ExperDate  : { ReceiptCode.ExperDate.ToString()}";
                            // AlertNotifiction.SendEmail(order.User.UserIdentity.Email, "orderStatus  delivery", _SmtpSettings, $"Hi {order.User.Name} <br>   order is   delivery <br> order Number #{order.Id}  thx :)  ");

                        }

                        else throw new Exception($"order is {order.orderStatus} ");
                    }
                    else
                    {
                        throw new Exception($"order is {order.orderStatus} ");
                    }

                    _contect.SaveChanges();


                    return Ok(
                        new
                        {
                            order.Id,
                            order.ProductName,
                            order.ProductAName,
                            order.Productprice,

                            order.description,

                            // ProductForm = order.Form.Select(i => new { i.id, i.AKey, i.Key, i.value }).ToList(),
                            order.CodeColor,
                            order.ANameColor,
                            order.NameColor,
                            order.orderStatus,
                            order.Cuantity,
                            order.ProductpriceTotal,
                            order.Date,
                            order.Timespent,
                            order.TimespentEnd,
                            order.UserAddress,
                            order.otherPhoneNo,

                        });

                }
                else if (await userManager.IsInRoleAsync(user, "Adman") && user?.Confirmed == Confirmed.approved && !user.Block)
                {
                    var order = _contect.Orders.Include(i=>i.User.UserIdentity).SingleOrDefault(i => i.Id == model.OrderId);
                    if (order == null) return NotFound();

                    if (model.orderStatus == orderStatus.Approved)
                    {
                        if (order.orderStatus == orderStatus.Reject || order.orderStatus == orderStatus.Ordered) order.orderStatus = model.orderStatus;
                        else throw new Exception($"order is {order.orderStatus} ");
                    }
                    else if (model.orderStatus == orderStatus.Reject)
                    {
                        if (order.orderStatus == orderStatus.Ordered || order.orderStatus == orderStatus.Approved) order.orderStatus = model.orderStatus;
                        else throw new Exception($"order is {order.orderStatus} ");
                    }
                    else if (model.orderStatus == orderStatus.Finshed)
                    {
                        if (order.orderStatus == orderStatus.Approved) order.orderStatus = model.orderStatus;
                        else throw new Exception($"order is {order.orderStatus} ");
                    }
                    else if (model.orderStatus == orderStatus.delivery)
                    {


                        if (order.orderStatus == orderStatus.Finshed || order.orderStatus == orderStatus.Approved) order.orderStatus = model.orderStatus;
                        else throw new Exception($"order is {order.orderStatus} ");
                    }
                    else if (model.orderStatus == orderStatus.Receipt)
                    {
                        if (order.orderStatus == orderStatus.Finshed || order.orderStatus == orderStatus.delivery)
                        {
                            order.orderStatus = model.orderStatus;
                            try
                            {
                                //  string body = $"Hi  \n  the Receipt Code of   Order Number# :{order.Id.ToString()} \n  Receipt Code :  {ReceiptCode.Code.ToString()} \n ExperDate  : { ReceiptCode.ExperDate.ToString()}";
                                AlertNotifiction.SendEmail(order.User.UserIdentity.Email, "orderStatus  Receipt", _SmtpSettings, "Hi    the Receipt Code of Receipt Code :  " );

                            }
                            catch (Exception e) { }
                        }
                            
                        else throw new Exception($"order is {order.orderStatus} ");
                    }
                    else
                    {
                        throw new Exception($"order is {order.orderStatus} ");
                    }

                    _contect.SaveChanges();

                    return Ok(
                        new
                        {
                            order.Id,
                            order.ProductName,
                            order.ProductAName,
                            order.Productprice,

                            order.description,

                            // ProductForm = order.Form.Select(i => new { i.id, i.AKey, i.Key, i.value }).ToList(),
                            order.CodeColor,
                            order.ANameColor,
                            order.NameColor,
                            order.orderStatus,
                            order.Cuantity,
                            order.ProductpriceTotal,
                            order.Date,
                            order.Timespent,
                            order.TimespentEnd,
                            order.UserAddress,
                            order.otherPhoneNo,

                        });

                }
                else

                    return Unauthorized();
            }
            catch (Exception e) { return BadRequest(e.Message); }

        }



        [HttpGet("ReceiptCode/{Id}")]
        public async Task<IActionResult> ReceiptCode(int Id)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (user == null) return Unauthorized();
            if (await userManager.IsInRoleAsync(user, "User") && user?.Confirmed == Confirmed.approved && !user.Block)
            {
                var order = _contect.Orders.Include(i=>i.User.UserIdentity).SingleOrDefault(i => i.Id ==Id &&i.UserId==user.Id);
                if (order == null) return NotFound();
                var ReceiptCode = _contect.ReceiptCode.SingleOrDefault(i => i.OrderId == order.Id);
                if (order.orderStatus==orderStatus.delivery)
                {
                    
                    if (ReceiptCode == null)
                    {
                        ReceiptCode = new ReceiptCode();
                        ReceiptCode.UserId = user.Id;
                        ReceiptCode.Code = new Random().Next(1234, 9999);
                        ReceiptCode.OrderId = Id;
                        ReceiptCode.ExperDate = DateTime.Now.AddMinutes(10);
                        _contect.ReceiptCode.Add(ReceiptCode);
                    }
                    else
                    {
                        ReceiptCode.UserId = user.Id;
                        ReceiptCode.Code = new Random().Next(1234, 9999);
                        ReceiptCode.OrderId = Id;
                        ReceiptCode.ExperDate = DateTime.Now.AddMinutes(10);
                    }

                      
                   //var conne= _contect.NotificationTokens.Where(i=)
                    
                    _contect.SaveChanges();
                    try
                    {
                      //  string body = $"Hi  \n  the Receipt Code of   Order Number# :{order.Id.ToString()} \n  Receipt Code :  {ReceiptCode.Code.ToString()} \n ExperDate  : { ReceiptCode.ExperDate.ToString()}";
                      //  AlertNotifiction.SendEmail(user.Email, "Receipt Code", _SmtpSettings, "Hi    the Receipt Code of Receipt Code :  " + ReceiptCode.Code.ToString()  );
                        //AlertNotifiction.SendEmail(order.User.UserIdentity.Email, "orderStatus  Receipt", _SmtpSettings, "Hi    the Receipt Code of Receipt Code :  ");

                    }
                    catch (Exception e) { }
                }

                return Ok(
                    new
                    {
                       // ReceiptCode.ID,
                         ReceiptCode.Code ,
                         ReceiptCode.OrderId ,
                         ReceiptCode.ExperDate,

                    });

            }
            return Unauthorized("token not User");

        }

        [HttpPost("Receipt")]
        public async Task<IActionResult> Receipt(ReceiptModelView model)
        {
            var order = new Order();
            var ReceiptCode = new ReceiptCode();
         var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (user == null) return Unauthorized();
            if (await userManager.IsInRoleAsync(user, "Sealler") && user?.Confirmed == Confirmed.approved && !user.Block)
            {
                 order = _contect.Orders.SingleOrDefault(i => i.Id == model.OrderId);
                if (order == null) return NotFound();
                ReceiptCode = _contect.ReceiptCode.SingleOrDefault(i => i.OrderId == order.Id && i.UserId == order.UserId &&i.Code.ToString()==model.Code&&i.ExperDate>=DateTime.Now);
                if (ReceiptCode == null) return NotFound();
                else
                {

                    ReceiptCode.SeallerId = user.Id;
                    ReceiptCode.ReceiptDate =DateTime.Now;
                    order.orderStatus = orderStatus.Receipt;
                    order.ReceiptDate = ReceiptCode.ReceiptDate;
                    _contect.SaveChanges();
                    var connectionFierbaseId = _contect.NotificationTokens.Where(i => i.UserId == order.UserId || i.UserId == order.SeallerId)
                        .Select(i=>i.connectionFierbaseId).ToList();
                         AlertNotifiction.Notifiction_push(ServerKey, senderId, connectionFierbaseId, "  الطلب استلام الطلب", $"{order.ProductAName} تم استلام الطلب طلب للمنتج ");


                }



                return Ok(
                 new
                 {
                     order.Id,
                     order.ProductName,
                     order.ProductAName,
                     order.Productprice,

                     order.description,

                    // ProductForm = order.Form?.Select(i => new { i.id, i.AKey, i.Key, i.value }).ToList(),
                     order.CodeColor,
                     order.ANameColor,
                     order.NameColor,
                     order.orderStatus,
                     order.Cuantity,
                     order.ProductpriceTotal,
                     order.Date,
                     order.Timespent,
                     order.TimespentEnd,
                     order.UserAddress,
                     order.otherPhoneNo,
                     order.ReceiptDate,
                    
                 });

        }
         else return Unauthorized();

        }


        // Cancel

        [HttpPost("Cancel/{OrderId}")]
        public async Task<IActionResult> Receipt(int OrderId)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (user == null) return Unauthorized();
            if (await userManager.IsInRoleAsync(user, "User") && user?.Confirmed == Confirmed.approved && !user.Block)
            {
                var order = _contect.Orders.SingleOrDefault(i => i.Id == OrderId && user.Id == i.UserId);
                if (order == null) return NotFound();
                else if (order.Cancel) return BadRequest($"this order Cancel ");

                else
                {
                    if (order.orderStatus == orderStatus.Receipt || order.orderStatus == orderStatus.delivery)
                    {
                        return BadRequest($"this Order Is {order.orderStatus} ");
                    }
                    else
                    {
                        order.Cancel = true;
                        var Product = _contect.products.SingleOrDefault(i => i.Id == order.ProductId);
                        if (Product != null)
                        {
                            if (Product.Stock)
                            {
                                Product.StockCount += order.Cuantity;
                            }
                        }


                        _contect.SaveChanges();

                        var connectionFierbaseId = _contect.NotificationTokens.Where(i => i.UserId == order.UserId || i.UserId == order.SeallerId)
                       .Select(i => i.connectionFierbaseId).ToList();
                        AlertNotifiction.Notifiction_push(ServerKey, senderId, connectionFierbaseId, "    الغاء الطلب", $"{order.ProductAName} تم الغاء الطلب  للمنتج ");


                        return Ok(
                            new
                            {
                                order.Id,
                                order.ProductName,
                                order.ProductAName,
                                order.Productprice,

                                order.description,
                                order.Cancel,

                                // ProductForm = order.Form?.Select(i => new { i.id, i.AKey, i.Key, i.value }).ToList(),
                                order.CodeColor,
                                order.ANameColor,
                                order.NameColor,
                                order.orderStatus,
                                order.Cuantity,
                                order.ProductpriceTotal,
                                order.Date,
                                order.Timespent,
                                order.TimespentEnd,
                                order.UserAddress,
                                order.otherPhoneNo,
                                order.ReceiptDate
                            });
                    }
                }
            }
            else return Unauthorized();
        }

        private bool OrderExists(int id)
        {
            return _contect.Orders.Any(e => e.Id == id);
        }
    }
}

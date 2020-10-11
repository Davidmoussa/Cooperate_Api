using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using K_Api202001.Data;
using K_Api202001.Models;
using K_Api202001.Models.ModeView;
using K_Api202001.Tools;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace K_Api202001.ApiControler
{
    [Route("api/[controller]")]
    [ApiController]
    public class AcountController : ControllerBase
    {
        private readonly UserManager<UserIdentity> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly ApplicationDbContext _contect;
        private IConfiguration _configuration;
        private readonly SmtpSettings _SmtpSettings;

        public float pageCount { get; set; }
        public int itemCount = 20;

        public AcountController(IConfiguration configuration, ApplicationDbContext db, UserManager<UserIdentity> _userManager, RoleManager<IdentityRole> _roleManager, SignInManager<UserIdentity> signInManager)
        {
            userManager = _userManager;
            roleManager = _roleManager;
            _contect = db;
            _configuration = configuration;


            _SmtpSettings = new SmtpSettings();
            _SmtpSettings.Password = configuration["Smtp:Password"];
            _SmtpSettings.Port = configuration["Smtp:Port"];
            _SmtpSettings.Server = configuration["Smtp:Server"];
            _SmtpSettings.FromAddress = configuration["Smtp:FromAddress"];

        }



        //User 
        [HttpPost("User/register"), DisableRequestSizeLimit]
        public async Task<IActionResult> RegisterUser(UserModelview model)
        {
            if (ModelState.IsValid)
            {

                var User = new UserIdentity()
                {
                    UserName = model.Email,
                    PhoneNumber = model.Phon,
                    Email = model.Email,
                    Confirmed = Confirmed.non,
                    Block =false
                };

                try
                {
                    var result = await userManager.CreateAsync(User, model.Password);
                    if (result.Succeeded)
                    {
                        var user = new User()
                        {
                            id = User.Id,
                            Name = model.Name,
                            AName = model.AName,
                            Hdate = DateTime.Now,
                        };

                        if (!await roleManager.RoleExistsAsync("User"))
                            await roleManager.CreateAsync(new IdentityRole("User"));
                        await userManager.AddToRoleAsync(User, "User");
                        _contect.Users.Add(user);
                        _contect.SaveChanges();

                        //get Token :)
                        var claim = new[]
                         {
                        new Claim("Id", User.Id),

                        new Claim("Rolas",userManager.GetRolesAsync(User).Result.FirstOrDefault()) };
                        var signinKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:SigningKey"]));

                        int expiryInMinutes = Convert.ToInt32(_configuration["Jwt:ExpiryInHouer"]);

                        var token = new JwtSecurityToken(
                               claims: claim,
                          issuer: _configuration["Jwt:Site"],
                          audience: _configuration["Jwt:Site"],
                          expires: DateTime.UtcNow.AddHours(expiryInMinutes),
                          signingCredentials: new SigningCredentials(signinKey, SecurityAlgorithms.HmacSha256)
                        );

                        /// code conform 
                        var Code = new Random().Next(1234, 9999);
                        var UserCodeConfierm = new UserCodeConfierm()
                        {
                            ExperdDate = DateTime.Now.AddMinutes(10),
                            UserId = user.id,
                            Code = Code.ToString(),
                            Type = Codetype.PasswordUser
                        };
                        _contect.UserCodeConfierm.Add(UserCodeConfierm);
                        _contect.SaveChanges();

                         var Body =   AlertNotifiction.ReadeFile("wwwroot//Emailfile//conformEmile.html")
                            .Replace("#name#", user.AName).Replace("#code#", Code.ToString());
                        AlertNotifiction.SendEmail(user.UserIdentity.Email, " Conform Account", _SmtpSettings, Body);

                        return Ok(new
                        {
                            token = new JwtSecurityTokenHandler().WriteToken(token),
                            expiration = token.ValidTo,
                            user.id,
                            user.Name,
                            user.AName,
                            user.UserIdentity.Email,
                            user.UserIdentity.PhoneNumber,
                            Roles = userManager.GetRolesAsync(User).Result.FirstOrDefault()


                        });



                    }
                    else { return BadRequest(); }
                }
                catch (Exception e)
                {

                    return BadRequest(new IdentityError() { Description = e.Message.ToString() });
                }

            }
            else return BadRequest();
        }
        [HttpGet("User/ConformEmail/{Email}")]
        // [Obsolete]
        public async Task<IActionResult> GetConformUser(string Email)
        {
            var user = await userManager.FindByNameAsync(Email);
            if (await userManager.IsInRoleAsync(user, "User") && user.Confirmed != Confirmed.block && !user.Block)
            {
                var Code = new Random().Next(1234, 9999);
                var UserCode = _contect.UserCodeConfierm.SingleOrDefault(i => i.UserId == user.Id && i.Type == Codetype.PasswordUser);
                if (UserCode != null)
                {
                    UserCode.Code = Code.ToString();
                    UserCode.ExperdDate = DateTime.Now.AddMinutes(10);
                    UserCode.Type = Codetype.PasswordUser;

                }
                else
                {
                    var UserCodeConfierm = new UserCodeConfierm()
                    {
                        ExperdDate = DateTime.Now.AddMinutes(10),
                        UserId = user.Id,
                        Code = Code.ToString(),
                        Type = Codetype.PasswordUser
                    };
                    _contect.UserCodeConfierm.Add(UserCodeConfierm);

                }


                _contect.SaveChanges();
                var Use = _contect.Users.SingleOrDefault(i => i.id == user.Id);
                var Body = AlertNotifiction.ReadeFile("wwwroot//Emailfile//conformEmile.html")
                           .Replace("#name#", Use.AName).Replace("#code#", Code.ToString());
                AlertNotifiction.SendEmail(user.Email, " Conform Account", _SmtpSettings, Body);

                return Ok();
            }
            else return NotFound();
        }
        [HttpPost("User/Confierm")]
        public async Task<IActionResult> Confierm(UserCodeConfiermModelView model)
        {
            if (ModelState.IsValid)
            {
                var User = await userManager.FindByNameAsync(model.Email);
                if (User != null)
                {

                    if (await userManager.IsInRoleAsync(User, "User") && User.Confirmed != Confirmed.block && !User.Block)
                    {
                        var Code = _contect.UserCodeConfierm.SingleOrDefault(i => i.UserId == User.Id && i.Code == model.Code && i.ExperdDate >= DateTime.Now);
                        if (Code != null)
                        {
                            User.Confirmed = Confirmed.approved;
                            await userManager.UpdateAsync(User);
                            _contect.UserCodeConfierm.Remove(Code);
                            _contect.SaveChanges();
                            // login

                            //get Token :)
                            var claim = new[]
                             {
                        new Claim("Id", User.Id),

                        new Claim("Rolas",userManager.GetRolesAsync(User).Result.FirstOrDefault())
                        };
                            var signinKey = new SymmetricSecurityKey(
                            Encoding.UTF8.GetBytes(_configuration["Jwt:SigningKey"]));

                            int expiryInMinutes = Convert.ToInt32(_configuration["Jwt:ExpiryInHouer"]);

                            var token = new JwtSecurityToken(
                                   claims: claim,
                              issuer: _configuration["Jwt:Site"],
                              audience: _configuration["Jwt:Site"],
                              expires: DateTime.UtcNow.AddHours(expiryInMinutes),
                              signingCredentials: new SigningCredentials(signinKey, SecurityAlgorithms.HmacSha256)
                            );
                            // get User 

                            var user = _contect.Users.Include(i => i.UserIdentity).SingleOrDefault(i => i.id == User.Id);
                            if (user != null)
                            {
                                return Ok(new
                                {
                                    token = new JwtSecurityTokenHandler().WriteToken(token),
                                    expiration = token.ValidTo,
                                    user.id,
                                    user.Name,
                                    user.AName,
                                    user.UserIdentity.Email,
                                    user.UserIdentity.PhoneNumber,
                                    Roles = userManager.GetRolesAsync(User).Result.FirstOrDefault()


                                });
                            }
                            else return Unauthorized();


                        }

                        else return BadRequest();
                    }
                    else return NotFound();

                }
                else return BadRequest();
            }
            else return BadRequest();
        }

        [HttpPost("User/Edit")]
        public async Task<IActionResult> UserEdit(UserCodeConfiermModelView model)
        {
            try
            {
                var Logger = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);

                if (Logger != null)
                {
                    if (await userManager.IsInRoleAsync(Logger, "User") && !Logger.Block)
                    {
                        return Ok();
                    }
                    else return Unauthorized();
                }
                else return Unauthorized();
            }
            catch (Exception e)
            {
                return BadRequest(new IdentityError() { Code = e.Message.ToString(), Description = e.InnerException.ToString() });

            }


        }

        // Sealler
        [HttpPost("Sealler/register")]
        public async Task<IActionResult> RegisterSell(SeallerModelView model)
        {
            if (ModelState.IsValid)
            {

                var User = new UserIdentity()
                {
                    UserName = model.Phon,
                    PhoneNumber = model.Phon,
                    Email = model.Email,

                    //Admin Edit Confirmed
                    Confirmed = Confirmed.non,
                };

                try
                {
                    var result = await userManager.CreateAsync(User, model.Password);
                    if (result.Succeeded)
                    {
                        var sealler = new sealler()
                        {
                            id = User.Id,
                            projectName = model.projectName,
                            projectAName = model.projectAName,
                            description = model.description,
                            Hdate = DateTime.Now,
                            CityId = model.CityId,
                            zoneId = model.zoneId,
                            ProJectTypeId = model.ProJectTypeId,
                        };


                        if (!await roleManager.RoleExistsAsync("Sealler"))
                            await roleManager.CreateAsync(new IdentityRole("Sealler"));

                        if (!await roleManager.RoleExistsAsync("Adman"))
                            await roleManager.CreateAsync(new IdentityRole("Adman"));

                        await userManager.AddToRoleAsync(User, "Sealler");

                        _contect.Seallers.Add(sealler);
                        _contect.SaveChanges();
                        return Ok(new
                        {
                            User.Id,
                            User.UserName,
                            User.PhoneNumber,
                            User.Confirmed,

                            sealler.description,
                            sealler.projectAName,
                            sealler.projectName,
                            sealler.ProJectTypeId,
                            sealler.CityId,
                            sealler.zoneId,
                            ProJectType = sealler.ProJectType == null ? null : new { sealler.ProJectType.id, sealler.ProJectType.Name, sealler.ProJectType.AName },
                            City = sealler.City == null ? null : new { sealler.City.id, sealler.City.Name, sealler.City.AName },
                            zone = sealler.zone == null ? null : new { sealler.zone.id, sealler.zone.Name, sealler.zone.AName },
                        });

                    }
                    else { return BadRequest(result.Errors.ToList()); }
                }
                catch (Exception e)
                {

                    return BadRequest(new IdentityError() { Description = e.InnerException.ToString() });
                }

            }
            else return BadRequest();
        }

        [Authorize]
        [HttpPost("Sealler/Confierm")]
        public async Task<IActionResult> ConfiermSealler(SeallerCodeConfiermModelView model)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (!await userManager.IsInRoleAsync(user, "Adman") && user.Block) return Unauthorized();
           

            var Sealler = await userManager.FindByIdAsync(model.SeallerId);
            if (Sealler == null) return NotFound();
            if (await userManager.IsInRoleAsync(Sealler, "Sealler"))
            {
                if (model.Confierm)
                    Sealler.Confirmed = Confirmed.approved;
                else
                    Sealler.Confirmed = Confirmed.Reject;
                await userManager.UpdateAsync(Sealler);


                var SellerName = _contect.Seallers.SingleOrDefault(i => i.id == Sealler.Id);
                var Body = AlertNotifiction.ReadeFile("wwwroot//Emailfile//conformseller.html")
                         .Replace("#name#", SellerName.projectAName);
                AlertNotifiction.SendEmail(user.Email, " Conform Account", _SmtpSettings, Body);

                
//AlertNotifiction.SendEmail(Sealler.Email, " Conform Account", _SmtpSettings, $"Dear  {Sealler.UserName }  <br> Acount is  " + Sealler.Confirmed.ToString());

                return Ok(new { Sealler.Id });
            }
            else return NotFound();
        }

        [HttpPost("Sealler/Edit")]
        public async Task<IActionResult> SeallerEdit(SeallerEditView model)
        {
            try
            {
                var Logger = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
                if (Logger == null) return Unauthorized();
                if (Logger != null)
                {
                    if (await userManager.IsInRoleAsync(Logger, "Sealler") && Logger.Confirmed == Confirmed.approved &&!Logger.Block)
                    {
                        var Sealler = _contect.Seallers
                            .Include(i=>i.zone)
                            .Include(i=>i.City)
                            .SingleOrDefault(i => i.id == Logger.Id);
                        if (Sealler != null)
                        {
                            Sealler.projectName = model.projectName;
                            Sealler.projectAName = model.projectAName;
                            Sealler.description = model.description;
                            Sealler.ProJectTypeId = model.ProJectTypeId;
                            Sealler.zoneId = model.zoneId;
                            Sealler.CityId = model.CityId;
                            _contect.SaveChanges();

                            var City = _contect.Cities.SingleOrDefault(i => i.id == Sealler.CityId);
                            var zone = _contect.Zones.SingleOrDefault(i => i.id == Sealler.zoneId);
                            var ProJectType = _contect.ProJectType.SingleOrDefault(i => i.id == Sealler.ProJectTypeId);

                            return Ok(new
                            {

                                Sealler.id,
                                Sealler.projectName,
                                Sealler.projectAName,
                                Sealler.description,
                                Sealler.UserIdentity.Email,
                                Sealler.UserIdentity.PhoneNumber,
                                Sealler.ProJectTypeId,
                                Sealler.CityId,
                                Sealler.zoneId,
                                ProJectType = ProJectType == null ? null : new { ProJectType.id, ProJectType.Name, ProJectType.AName },
                                City = City == null ? null : new { City.id,City.Name, City.AName },
                                zone = Sealler.zone == null ? null : new { zone.id, zone.Name, zone.AName },

                                Role = userManager.GetRolesAsync(Logger).Result.FirstOrDefault()


                            });
                        }
                        return Unauthorized();
                    }
                    else return Unauthorized();
                }
                else return Unauthorized();
            }
            catch (Exception e)
            {
                return BadRequest(new IdentityError() { Code = e.Message.ToString(), Description = e.InnerException.ToString() });

            }


        }

        //All 
        [HttpPost("Login")]
        public async Task<ActionResult> Login(LoginModeView model)
        {
            var user = await userManager.FindByNameAsync(model.UserName);
            if (user == null) return BadRequest(new { massage = "login Name Not Match ", Amassage = "" });
            if (user != null && await userManager.CheckPasswordAsync(user, model.Password) )
            {

                var claim = new[] {
                        new Claim("Id", user.Id),

                        new Claim("Rolas",userManager.GetRolesAsync(user).Result.FirstOrDefault())
                    };
                var signinKey = new SymmetricSecurityKey(
                  Encoding.UTF8.GetBytes(_configuration["Jwt:SigningKey"]));

                int expiryInMinutes = Convert.ToInt32(_configuration["Jwt:ExpiryInHouer"]);

                var token = new JwtSecurityToken(
                       claims: claim,
                  issuer: _configuration["Jwt:Site"],
                  audience: _configuration["Jwt:Site"],
                  expires: DateTime.UtcNow.AddHours(expiryInMinutes),
                  signingCredentials: new SigningCredentials(signinKey, SecurityAlgorithms.HmacSha256)
                );

                if (await userManager.IsInRoleAsync(user, "User") &&user.Confirmed!=Confirmed.block  && !user.Block)
                {
                    var User = _contect.Users.Include(i => i.UserIdentity).SingleOrDefault(i => i.id == user.Id);
                    if (User != null)
                    {
                        return Ok(new
                        {
                            token = new JwtSecurityTokenHandler().WriteToken(token),
                            expiration = token.ValidTo,
                            User.id,
                            User.Name,
                            User.AName,
                            User.UserIdentity.Email,
                            User.UserIdentity.PhoneNumber,
                            Role = userManager.GetRolesAsync(user).Result.FirstOrDefault()


                        });
                    }
                    else return Unauthorized();
                }
                else if (await userManager.IsInRoleAsync(user, "Sealler")&& user.Confirmed == Confirmed.approved && !user.Block)
                {
                    var Sealler = _contect.Seallers
                        .Include(i => i.City)
                        .Include(i => i.zone)
                        .Include(i => i.ProJectType)
                        .SingleOrDefault(i => i.id == user.Id);
                    if (Sealler != null)
                    {
                        return Ok(new
                        {
                            token = new JwtSecurityTokenHandler().WriteToken(token),
                            expiration = token.ValidTo,
                            Sealler.id,
                            Sealler.projectName,
                            Sealler.projectAName,
                            Sealler.description,
                            Sealler.UserIdentity.Email,
                            Sealler.UserIdentity.PhoneNumber,
                            Sealler.ProJectTypeId,
                            Sealler.CityId,
                            Sealler.zoneId,
                            ProJectType = Sealler.ProJectType == null ? null : new { Sealler.ProJectType.id, Sealler.ProJectType.Name, Sealler.ProJectType.AName },
                            City = Sealler.City == null ? null : new { Sealler.City.id, Sealler.City.Name, Sealler.City.AName },
                            zone = Sealler.zone == null ? null : new { Sealler.zone.id, Sealler.zone.Name, Sealler.zone.AName },

                            Role = userManager.GetRolesAsync(user).Result.FirstOrDefault()


                        });
                    }


                    else return Unauthorized();
                }
                else if (await userManager.IsInRoleAsync(user, "Adman") && !user.Block)
                {
                    return Ok(new
                    {
                        token = new JwtSecurityTokenHandler().WriteToken(token),
                        expiration = token.ValidTo,
                        user.Email,
                        user.PhoneNumber,
                        Role = userManager.GetRolesAsync(user).Result.FirstOrDefault()
                    });
                }
                else return Unauthorized();

            }
            else return Unauthorized(new { massage = "Password Not Match ", Amassage = "" });



        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetAcount()
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);

            if (user == null) return Unauthorized();
            if (await userManager.IsInRoleAsync(user, "User") &&  !user.Block)
            {
                return Ok(_contect.Users.Include(i => i.UserIdentity).Select(i => new
                {
                    i.id,
                    i.Name,
                    i.AName,
                    i.UserIdentity.Email,
                    i.UserIdentity.PhoneNumber,
                    Role = userManager.GetRolesAsync(user).Result.FirstOrDefault()
                }).SingleOrDefault(i => i.id == user.Id));
            }
            else if (await userManager.IsInRoleAsync(user, "Sealler") && user?.Confirmed == Confirmed.approved && !user.Block)
            {
                return Ok(_contect.Seallers.Include(i => i.UserIdentity).Include(i=>i.Rates).Select(i => new
                {
                    i.id,
                    i.projectAName,
                    i.projectName,
                    i.description,

                    i.UserIdentity.Email,
                    i.UserIdentity.PhoneNumber,
                    ProJectType = i.ProJectType == null ? null : new { i.ProJectType.id, i.ProJectType.Name, i.ProJectType.AName },
                    City = i.City == null ? null : new { i.City.id, i.City.Name, i.City.AName },
                    zone = i.zone == null ? null : new { i.zone.id, i.zone.Name, i.zone.AName },
                    rates = new
                    {
                        rate = i.Rates.Count == 0 ? 0 : i.Rates.Sum(s => s.reate) / i.Rates.Count,
                        ratecount = i.Rates.Count,
                        rates = i.Rates.Select(i => new { i.seallerId, i.userId, i.reate, i.comment })
                    },
                    Role = userManager.GetRolesAsync(user).Result.FirstOrDefault()

                }).SingleOrDefault(i => i.id == user.Id));
            }
            else if (await userManager.IsInRoleAsync(user, "Adman") && user?.Confirmed != Confirmed.block && !user.Block)
            {
                return Ok(_contect.Seallers.Include(i => i.UserIdentity).Include(i=>i.Rates).Select(i => new
                {
                    i.id,
                    i.projectAName,
                    i.projectName,
                    i.description,

                    i.UserIdentity.Email,
                    i.UserIdentity.PhoneNumber,
                    ProJectType = i.ProJectType == null ? null : new { i.ProJectType.id, i.ProJectType.Name, i.ProJectType.AName },
                    City = i.City == null ? null : new { i.City.id, i.City.Name, i.City.AName },
                    zone = i.zone == null ? null : new { i.zone.id, i.zone.Name, i.zone.AName },
                    rates = new
                    {
                        rate = i.Rates.Count == 0 ? 0 : i.Rates.Sum(s => s.reate) / i.Rates.Count,
                        ratecount = i.Rates.Count,
                        rates = i.Rates.Select(i => new { i.seallerId, i.userId, i.reate, i.comment })
                    },
                    Role = userManager.GetRolesAsync(user).Result.FirstOrDefault()

                }).SingleOrDefault(i => i.id == user.Id));
            }
            else return Unauthorized();

        }


        [Authorize]
        [HttpGet("Id")]
        public async Task<IActionResult> GetAcount(string Id)
        {
            var user = await userManager.FindByIdAsync(Id);

            if (await userManager.IsInRoleAsync(user, "User") && user?.Confirmed != Confirmed.block && !user.Block)
            {
                return Ok(_contect.Users.Include(i => i.UserIdentity).Select(i => new
                {
                    i.id,
                    i.Name,
                    i.AName,
                    i.UserIdentity.Email,
                    i.UserIdentity.PhoneNumber,
                    Role = userManager.GetRolesAsync(user).Result.FirstOrDefault()
                }).SingleOrDefault(i => i.id == user.Id));
            }
            else if (await userManager.IsInRoleAsync(user, "Sealler") && user?.Confirmed == Confirmed.approved && !user.Block)
            {
                return Ok(_contect.Seallers.Include(i=>i.Rates).Include(i => i.UserIdentity).Select(i => new
                {
                    i.id,
                    i.projectAName,
                    i.projectName,
                    i.description,

                    i.UserIdentity.Email,
                    i.UserIdentity.PhoneNumber,
                    ProJectType = i.ProJectType == null ? null : new { i.ProJectType.id, i.ProJectType.Name, i.ProJectType.AName },
                    City = i.City == null ? null : new { i.City.id, i.City.Name, i.City.AName },
                    zone = i.zone == null ? null : new { i.zone.id, i.zone.Name, i.zone.AName },
                    rates = new
                    {
                        rate = i.Rates.Count == 0 ? 0 : i.Rates.Sum(s => s.reate) / i.Rates.Count,
                        ratecount = i.Rates.Count,
                        rates = i.Rates.Select(i => new { i.seallerId, i.userId, i.reate, i.comment })
                    },
                    Role = userManager.GetRolesAsync(user).Result.FirstOrDefault()

                }).SingleOrDefault(i => i.id == user.Id));
            }
            else return NotFound();

        }

        [Authorize]
        [HttpGet("Seallers")]
        public async Task<IActionResult> GetAcountAllSealler( int currentPage)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);

            if (await userManager.IsInRoleAsync(user, "Adman") && user?.Confirmed != Confirmed.block &&! user.Block)
            {
                var Seallers = _contect.Seallers.Include(i => i.UserIdentity).Include(i=>i.Rates).OrderByDescending(i => i.Hdate).Select(i => new
                {
                    i.id,
                    i.projectAName,
                    i.projectName,
                    i.description,

                    i.UserIdentity.Email,
                    i.UserIdentity.PhoneNumber,
                    ProJectType = i.ProJectType == null ? null : new { i.ProJectType.id, i.ProJectType.Name, i.ProJectType.AName },
                    City = i.City == null ? null : new { i.City.id, i.City.Name, i.City.AName },
                    zone = i.zone == null ? null : new { i.zone.id, i.zone.Name, i.zone.AName },
                    rates = new
                    {
                        rate = i.Rates.Count == 0 ? 0 : i.Rates.Sum(s => s.reate) / i.Rates.Count,
                        ratecount = i.Rates.Count,
                        rates = i.Rates.Select(i => new { i.seallerId, i.userId, i.reate, i.comment })
                    },
                    i.UserIdentity.Confirmed,
                    loginName = i.UserIdentity.UserName,
                    Role = "Sealler"
                }).ToList();
                pageCount = (int)Math.Ceiling(decimal.Divide(Seallers.Count, itemCount));
               // if (currentPage > pageCount - 1) currentPage = (int)pageCount - 1;
                if (Seallers.Count == 0) return NotFound();
                else return Ok(new { itemCount=Seallers.Count, pageCount, currentPage, Data = Seallers.Skip((currentPage) * itemCount).Take(itemCount).ToList() });

            }

            else return Unauthorized();

        }
        [Authorize]
        [HttpGet("Users")]
        public async Task<IActionResult> GetAcountAllUser( int currentPage)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);

            if (await userManager.IsInRoleAsync(user, "Adman") && user?.Confirmed != Confirmed.block && !user.Block)
            {
                var User = _contect.Users.Include(i => i.UserIdentity).Select(i => new
                {
                    i.id,
                    i.Name,
                    i.AName,
                    i.UserIdentity.Email,
                    i.UserIdentity.PhoneNumber,
                    i.UserIdentity.Confirmed,
                    loginName = i.UserIdentity.UserName,
                    Role = "User"
                }).ToList();

                pageCount = (int)Math.Ceiling(decimal.Divide(User.Count, itemCount));
               // if (currentPage > pageCount - 1) currentPage = (int)pageCount - 1;
                if (User.Count == 0) return NotFound();
                else return Ok(new { itemCount, pageCount, currentPage, Data = User.Skip((currentPage) * itemCount).Take(itemCount).ToList() });
               
            }


            else return Unauthorized();

        }


        [Authorize]
        [HttpGet("UsersSearch/{Search}")]
        public async Task<IActionResult> GetAcountBlockSearch(string Search,int currentPage)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);

            if (await userManager.IsInRoleAsync(user, "Adman") && user?.Confirmed != Confirmed.block && !user.Block)
            {
                var User = _contect.Users
                    .Where(i=>i.id== Search || i.Name==Search || i.AName == Search || i.UserIdentity.Email == Search )
                    .Include(i => i.UserIdentity).Select(i => new
                {
                    i.id,
                    i.Name,
                    i.AName,
                    i.UserIdentity.Email,
                    i.UserIdentity.PhoneNumber,
                    i.UserIdentity.Confirmed,
                    loginName = i.UserIdentity.UserName,
                    Role = "User"
                }).ToList();

                pageCount = (int)Math.Ceiling(decimal.Divide(User.Count, itemCount));
              //  if (currentPage > pageCount - 1) currentPage = (int)pageCount - 1;
                if (User.Count == 0) return NotFound();
                else return Ok(new { itemCount, pageCount, currentPage, Data = User.Skip((currentPage) * itemCount).Take(itemCount).ToList() });

            }


            else return Unauthorized();

        }

        [Authorize]
        [HttpGet("SeallersSearch/{Search}")]
        public async Task<IActionResult> GetAcountAllSeallerSearch(string Search, int currentPage)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);

            if (await userManager.IsInRoleAsync(user, "Adman") && !user.Block)
            {
                var Seallers = _contect.Seallers.
                      Where(i => i.id == Search || i.projectAName == Search || i.projectName == Search || i.UserIdentity.Email == Search
                      || i.UserIdentity.PhoneNumber == Search || i.ProJectType.AName == Search || i.ProJectType.Name == Search
                      || i.City.Name == Search || i.City.AName == Search)
                    .Include(i => i.UserIdentity).Include(i=>i.Rates).OrderByDescending(i => i.Hdate).Select(i => new
                {
                    i.id,
                    i.projectAName,
                    i.projectName,
                    i.description,

                    i.UserIdentity.Email,
                    i.UserIdentity.PhoneNumber,
                    ProJectType = i.ProJectType == null ? null : new { i.ProJectType.id, i.ProJectType.Name, i.ProJectType.AName },
                    City = i.City == null ? null : new { i.City.id, i.City.Name, i.City.AName },
                    zone = i.zone == null ? null : new { i.zone.id, i.zone.Name, i.zone.AName },
                        rates = new
                        {
                            rate = i.Rates.Count == 0 ? 0 : i.Rates.Sum(s => s.reate) / i.Rates.Count,
                            ratecount = i.Rates.Count,
                            rates = i.Rates.Select(i => new { i.seallerId, i.userId, i.reate, i.comment })
                        },
                        i.UserIdentity.Confirmed,
                    loginName = i.UserIdentity.UserName,
                    Role = "Sealler"
                }).ToList();
                pageCount = (int)Math.Ceiling(decimal.Divide(Seallers.Count, itemCount));
              //  if (currentPage > pageCount - 1) currentPage = (int)pageCount - 1;
                if (Seallers.Count == 0) return NotFound();
                else return Ok(new { itemCount, pageCount, currentPage, Data = Seallers.Skip((currentPage) * itemCount).Take(itemCount).ToList() });

            }

            else return Unauthorized();

        }

        [Authorize]
        [HttpGet("Seallers/Requst")]
        public async Task<IActionResult> GetAcountAllSeallerRequst( int currentPage)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);

            if (await userManager.IsInRoleAsync(user, "Adman") && user?.Confirmed != Confirmed.block && !user.Block)
            {
                var Seallers = _contect.Seallers.
                      Where(i => i.UserIdentity.Confirmed == Confirmed.non).OrderByDescending(i => i.Hdate).Select(i => new
                    {
                        i.id,
                        i.projectAName,
                        i.projectName,
                        i.description,

                        i.UserIdentity.Email,
                        i.UserIdentity.PhoneNumber,
                        ProJectType = i.ProJectType == null ? null : new { i.ProJectType.id, i.ProJectType.Name, i.ProJectType.AName },
                        City = i.City == null ? null : new { i.City.id, i.City.Name, i.City.AName },
                        zone = i.zone == null ? null : new { i.zone.id, i.zone.Name, i.zone.AName },
                        i.UserIdentity.Confirmed,
                        loginName = i.UserIdentity.UserName,
                        Role = "Sealler"
                    }).ToList();
                pageCount = (int)Math.Ceiling(decimal.Divide(Seallers.Count, itemCount));
               // if (currentPage > pageCount - 1) currentPage = (int)pageCount - 1;
                if (Seallers.Count == 0) return NotFound();
                else return Ok(new { itemCount, pageCount, currentPage, Data = Seallers.Skip((currentPage) * itemCount).Take(itemCount).ToList() });

            }

            else return Unauthorized();

        }


       

        [Authorize]
        [HttpGet("block")]
        public async Task<IActionResult> GetAcountBlock( int currentPage)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);

            if (await userManager.IsInRoleAsync(user, "Adman") && user?.Confirmed != Confirmed.block && !user.Block) {


                var Seallers = _contect.Seallers
                             .Select(i => new
                             {
                                 Id = i.id,
                                 Logname=i.UserIdentity.UserName,
                                 AName = i.projectAName,
                                 Name = i.projectName,
                                 i.UserIdentity.Email,
                                 i.UserIdentity.PhoneNumber,
                                 i.UserIdentity.Block,
                                 i.UserIdentity.Confirmed,
                                 i.Hdate,
                                 Role = "Sealler"
                             }).ToList();



                var Users = _contect.Users
         .Select(i => new
         {
             Id = i.id,
             Logname = i.UserIdentity.UserName,
             AName = i.AName,
             Name = i.Name,
             i.UserIdentity.Email,
             i.UserIdentity.PhoneNumber,
             i.UserIdentity.Block,
             i.UserIdentity.Confirmed,
             i.Hdate,
             Role = "User"
         }).ToList();


                Seallers.AddRange(Users);
                 
                pageCount = (int)Math.Ceiling(decimal.Divide(Seallers.Count, itemCount));
            // if (currentPage > pageCount - 1) currentPage = (int)pageCount - 1;
            if (Seallers.Count == 0) return NotFound();
            else return Ok(new { itemCount, pageCount, currentPage, Data = Seallers.OrderByDescending(i=>i.Hdate).Skip((currentPage) * itemCount).Take(itemCount).ToList() });

        }

            else return Unauthorized();
    }



        [Authorize]
        [HttpPost("block")]
        public async Task<IActionResult> GetAcountBlock(AcountBlockModelView model)
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);

            if (await userManager.IsInRoleAsync(user, "Adman") && user?.Confirmed != Confirmed.block && !user.Block)
            {
                var Acount = await userManager.FindByIdAsync(model.AcountId);
                if (Acount != null)
                {
                   
                      
                            Acount.Block = model.block;
                        
                        await userManager.UpdateAsync(Acount);
                        return Ok(new
                        {
                            Acount.Id,
                            Acount.UserName,
                            Acount.Email,
                            Acount.PhoneNumber,
                            Acount.Block,
                            Acount.Confirmed,
                            role=  userManager.GetRolesAsync(Acount).Result.FirstOrDefault()




                        });
                    
                      
                }
                else return NotFound();
            }


            else return Unauthorized();

        }

        [Authorize]
        [HttpPost("ChangPassword")]
        public async Task<IActionResult> ChangPassword([FromBody]cahngPassweordViewModel model)
        {
            var userid = User.FindFirst("Id")?.Value;
            //  var Rolas = User.FindFirst("Rolas")?.Value;
            // var Name = User.FindFirst("Name")?.Value;

            var user = await userManager.FindByIdAsync(userid);
            if (user == null) return Unauthorized();
            if (user != null && await userManager.CheckPasswordAsync(user, model.Password) && user.Confirmed == Confirmed.approved)
            {
                var Token = await userManager.GeneratePasswordResetTokenAsync(user);
                var resetPassResult = await userManager.ResetPasswordAsync(user, Token, model.Newpassword);
                if (!resetPassResult.Succeeded)
                {
                    List<IdentityError> _Errors = new List<IdentityError>();
                    foreach (var item in resetPassResult.Errors)
                    {
                        _Errors.Add(item);
                    }
                    return BadRequest(_Errors.ToList());
                }
                else
                {
                    return Ok(new { userid });
                }
            }
            else
            {
                if (user == null)
                    return NotFound();
                else
                    return BadRequest(new IdentityError() { Description = "passWord Not Corect" });
            }
        }

    }

}
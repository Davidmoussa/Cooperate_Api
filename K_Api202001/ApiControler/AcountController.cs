﻿using System;
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
                        return Ok(new
                        {
                            User.Id,
                            User.UserName,
                            User.PhoneNumber,
                            User.Confirmed,
                            user.Name,
                            user.AName,

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
            if (await userManager.IsInRoleAsync(user, "User"))
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

                AlertNotifiction.SendEmail(user.Email, " Conform Account", _SmtpSettings, Code.ToString());

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

                    if (await userManager.IsInRoleAsync(User, "User") && User.Confirmed != Confirmed.Reject)
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
                    if (await userManager.IsInRoleAsync(Logger, "User") && Logger.Confirmed == Confirmed.approved)
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

        [HttpPost("Sealler/Confierm")]
        public async Task<IActionResult> ConfiermSealler(SeallerCodeConfiermModelView model)
        {
            var Sealler = await userManager.FindByIdAsync(model.SeallerId);
            if (Sealler == null) return NotFound();
            if (await userManager.IsInRoleAsync(Sealler, "Sealler"))
            {
                if (model.Confierm)
                    Sealler.Confirmed = Confirmed.approved;
                else
                    Sealler.Confirmed = Confirmed.Reject;
                await userManager.UpdateAsync(Sealler);
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
                if (Logger != null)
                {
                    if (await userManager.IsInRoleAsync(Logger, "Sealler") && Logger.Confirmed == Confirmed.approved)
                    {
                        var Sealler = _contect.Seallers.SingleOrDefault(i => i.id == Logger.Id);
                        if (Sealler != null)
                        {
                            Sealler.projectName = model.projectName;
                            Sealler.projectAName = model.projectAName;
                            Sealler.description = model.description;
                            Sealler.ProJectTypeId = model.ProJectTypeId;
                            Sealler.zoneId = model.zoneId;
                            Sealler.CityId = model.CityId;
                            _contect.SaveChanges();



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
                                ProJectType = Sealler.ProJectType == null ? null : new { Sealler.ProJectType.id, Sealler.ProJectType.Name, Sealler.ProJectType.AName },
                                City = Sealler.City == null ? null : new { Sealler.City.id, Sealler.City.Name, Sealler.City.AName },
                                zone = Sealler.zone == null ? null : new { Sealler.zone.id, Sealler.zone.Name, Sealler.zone.AName },

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
            if (user != null && await userManager.CheckPasswordAsync(user, model.Password) && user.Confirmed == Confirmed.approved)
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

                if (await userManager.IsInRoleAsync(user, "User"))
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
                else if (await userManager.IsInRoleAsync(user, "Sealler"))
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
                else if (await userManager.IsInRoleAsync(user, "Adman"))
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
            else return Unauthorized();



        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetAcount()
        {
            var user = await userManager.FindByIdAsync(User.FindFirst("Id")?.Value);
            if (await userManager.IsInRoleAsync(user, "User") && user?.Confirmed == Confirmed.approved)
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
            else if (await userManager.IsInRoleAsync(user, "Sealler") && user?.Confirmed == Confirmed.approved)
            {
                return Ok(_contect.Seallers.Include(i => i.UserIdentity).Select(i => new
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
                    Role = userManager.GetRolesAsync(user).Result.FirstOrDefault()

                }).SingleOrDefault(i => i.id == user.Id));
            }
            else if (await userManager.IsInRoleAsync(user, "Adman") && user?.Confirmed == Confirmed.approved)
            {
                return Ok(_contect.Seallers.Include(i => i.UserIdentity).Select(i => new
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
            if (await userManager.IsInRoleAsync(user, "User") && user?.Confirmed == Confirmed.approved)
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
            else if (await userManager.IsInRoleAsync(user, "Sealler") && user?.Confirmed == Confirmed.approved)
            {
                return Ok(_contect.Seallers.Include(i => i.UserIdentity).Select(i => new
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
                    Role = userManager.GetRolesAsync(user).Result.FirstOrDefault()

                }).SingleOrDefault(i => i.id == user.Id));
            }
            else return NotFound();

        }


        [Authorize]
        [HttpPost("ChangPassword")]
        public async Task<IActionResult> ChangPassword([FromBody]cahngPassweordViewModel model)
        {
            var userid = User.FindFirst("Id")?.Value;
            //  var Rolas = User.FindFirst("Rolas")?.Value;
            // var Name = User.FindFirst("Name")?.Value;

            var user = await userManager.FindByIdAsync(userid);
            if (user != null && await userManager.CheckPasswordAsync(user, model.Password) && user.Confirmed==Confirmed.approved)
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
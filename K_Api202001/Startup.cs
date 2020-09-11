using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.EntityFrameworkCore;
using K_Api202001.Data;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using K_Api202001.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.OpenApi.Models;

namespace K_Api202001
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //string Server_Name = Configuration["Server_HOST"] ?? ".";
            //string port = Configuration["Port_HOST"] ??"1433";
            //string DataBase = Configuration["DataBaseName"] ?? "DbKh02";
            //string UserName = Configuration["UserName"]??"root" ;
            //string Password = Configuration["PASSWORD"] ??"";
            string ConnectionString;
            //if (UserName == null )
            //{
            //    ConnectionString = Configuration.GetConnectionString("DefaultConnection");
            //}
            //else
            //{
            //    ConnectionString= $"Server={Server_Name},{port};Database={DataBase};User Id={UserName};Password={Password};";
            //}

            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseMySql(GetConnectionStringMySQL(Configuration)));
           
            services.AddIdentity<UserIdentity, IdentityRole>(
                 option =>
                 {
                     option.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
                     option.Lockout.MaxFailedAccessAttempts = 5;
                     option.Lockout.AllowedForNewUsers = true;

                     option.Password.RequireDigit = false;
                     option.Password.RequiredLength = 6;
                     option.Password.RequireNonAlphanumeric = false;
                     option.Password.RequireUppercase = false;
                     option.Password.RequireLowercase = false;
                 }
                ).AddEntityFrameworkStores<ApplicationDbContext>().AddDefaultTokenProviders();

            services.AddCors(options =>
           options.AddPolicy("AllowOrigin",
           builder =>
           {
               builder
                   // .AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader()
                   .AllowCredentials()

                  .WithOrigins(
                   "https://localhost:4200",
                  "http://localhost:4200",
                  "http://46.101.105.124:4200", 
                  "http://api.egypt-youth.com:4200",
                  "http://admin.egypt-youth.com:4200"
                  );
           }));


            //token Jwt
            services.AddAuthentication(options =>
            {
                 options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;


            })
        .AddJwtBearer(x =>
        {
            x.SaveToken = true;
            x.RequireHttpsMetadata = true;
            x.TokenValidationParameters = new TokenValidationParameters()
            {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidAudience = Configuration["Jwt:Site"],
                ValidIssuer = Configuration["Jwt:Site"],
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Jwt:SigningKey"]))
            };


            x.Events = new JwtBearerEvents

            {
                OnMessageReceived = context =>
                {
                    var accessToken = context.Request.Query["access_token"];
                    if (string.IsNullOrEmpty(accessToken) == false)
                    {
                        context.Token = accessToken;
                    }
                    return Task.CompletedTask;
                }
            };
        });


            //Swagger Auth 

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = " API ", Version = "v1" });
                var securitySchema = new OpenApiSecurityScheme
                {
                    Description = "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
                    Name = "Authorization",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.Http,
                    Scheme = "bearer",
                    Reference = new OpenApiReference
                    {
                        Type = ReferenceType.SecurityScheme,
                        Id = "Bearer"
                    }
                };
                c.AddSecurityDefinition("Bearer", securitySchema);

                var securityRequirement = new OpenApiSecurityRequirement();
                securityRequirement.Add(securitySchema, new[] { "Bearer" });
                c.AddSecurityRequirement(securityRequirement);
            });


            services.AddControllersWithViews();
            services.AddRazorPages();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IServiceProvider serviceProvider)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            //Swagger Ui Rout
            object p = app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "API V1");
                c.RoutePrefix = string.Empty;
            });
            app.UseStaticFiles();
            app.UseRouting();
            app.UseCors("AllowOrigin");
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
                endpoints.MapRazorPages();
            });
            EnsureAdminCreated(serviceProvider).GetAwaiter().GetResult();
        }
        private static string GetConnectionStringMySQL(IConfiguration config)
        {
            string hostServer = config["MYSQLSERVICE_HOST"] ?? "localhost";
            string serverPort = config["MYSQLSERVICE_PORT"] ?? "3306";
            string databaseName = config["MYSQLDATABASE"] ?? "DbKh02";
            string userName = config["MYSQLUSER"] ?? "root";
            string passward = config["MYSQLPASSWORD"] ?? "";

            string connectionString;

            if (string.IsNullOrEmpty(userName))
            {
                connectionString = config.GetConnectionString("Default");
            }
            else
            {
                connectionString = $"Server={hostServer};Port={serverPort};Database={databaseName};Uid={userName};Pwd={passward};";
            }

            return connectionString;
        }

        #region Helper Methods

        private async Task EnsureAdminCreated(IServiceProvider serviceProvider)
        {
            var context = serviceProvider.GetService<ApplicationDbContext>();
            var userManager = serviceProvider.GetService<UserManager<UserIdentity>>();
            var roleManager = serviceProvider.GetService<RoleManager<IdentityRole>>();

            // ENsure database created and is up to date
           // await context.Database.EnsureDeletedAsync();
            await context.Database.MigrateAsync();

            // Ensure that we have an admin role
            var adminRoleExist = await roleManager.RoleExistsAsync("Adman");
            if (!adminRoleExist)
            {
                await roleManager.CreateAsync(new IdentityRole()
                {
                    Name = "Adman"
                });
            }

            // Ensure that we have an admin user
            var adminUser = await userManager.FindByNameAsync("appAdmin@yourchores.com");
            if (adminUser == null)
            {
                var newAdminUser = new UserIdentity()
                {
                    UserName = "appAdmin@yourchores.com",
                    Email = "appAdmin@yourchores.com",
                    Confirmed=Confirmed.approved

                };

                await userManager.CreateAsync(newAdminUser, "appAdmin@yourchores.com");

                await userManager.AddToRoleAsync(newAdminUser, "Adman");
            }
            else
            {
                if (!(await userManager.IsInRoleAsync(adminUser, "Adman")))
                {
                    await userManager.AddToRoleAsync(adminUser, "Adman");
                }
            }


        }

        #endregion
    }
}

using System;
using System.Collections.Generic;
using System.Text;
using K_Api202001.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace K_Api202001.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<productForm>()
                        .HasKey(o => new { o.FormId, o.ProductId });
            builder.Entity<productForm>()
             .HasOne(pt => pt.product)
             .WithMany(p => p.Form)
             .HasForeignKey(pt => pt.ProductId);

            builder.Entity<productForm>()
            .HasOne(pt => pt.Form)
            .WithMany(p => p.Form)
            .HasForeignKey(pt => pt.FormId);
            //order 
            builder.Entity<Order>()
           .HasOne(pt => pt.sealler)
           .WithMany(p => p.Orders)
           .HasForeignKey(pt => pt.SeallerId);
            builder.Entity<Order>()
          .HasOne(pt => pt.User)
          .WithMany(p => p.Orders)
          .HasForeignKey(pt => pt.UserId);

            builder.Entity<Order>()
          .HasOne(pt => pt.product)
          .WithMany(p => p.Order)
          .HasForeignKey(pt => pt.ProductId);
        }

        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<sealler> Seallers { get; set; }
        public virtual DbSet<City> Cities{ get; set; }
        public virtual DbSet<zone> Zones{ get; set; }
        public virtual DbSet<ProJectType> ProJectType { get; set; }
        public virtual DbSet<UserCodeConfierm> UserCodeConfierm { get; set; }
        //product
        public virtual DbSet<product> products { get; set; }
        public virtual DbSet<ProForm> ProForm { get; set; }
        public virtual DbSet<ProductType> ProductType { get; set; }
        public virtual DbSet<productForm> productFormsetup { get; set; }
        public virtual DbSet<productIMg> productIMg { get; set; }
        public virtual DbSet<productColor> productColor { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<ReceiptCode> ReceiptCode { get; set; }





    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace K_Api202001.Models
{
    public class Order
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public DateTime Date { get; set; }

        public string ProductName { get; set; }
        public string ProductAName { get; set; }
        public string description { get; set; }
        [Required]
        public double Productprice { get; set; }
        [NotMapped]
        public double ProductpriceTotal { get { return Productprice * Cuantity; } }
        [Required]
        public bool ProductStock { get; set; }

        public int Timespent { get; set; }
        [NotMapped]
        public DateTime TimespentEnd { get { return Date.AddDays(Timespent); } }
        [Required]
        public int Cuantity { get; set; }

       
        public string ANameColor { get; set; }
        public string NameColor { get; set; }
        public string CodeColor { get; set; }

        [ForeignKey("product")]
        public int? ProductId { get; set; }
        public virtual product product { get; set; }

        [ForeignKey("sealler")]
        public string SeallerId { get; set; }
        public virtual sealler sealler { get; set; }

        [ForeignKey("User")]
        public string UserId { get; set; }
        public virtual User User { get; set; }

        public string UserAddress { get; set; }
        public orderStatus orderStatus { get; set; }
        public DateTime? ReceiptDate { get; set; }
        public ReceiptCode? ReceiptCode { get; set; }
        public bool Cancel { get; set; }
        public string  otherPhoneNo { get; set; }
        public virtual ICollection< OrderForm>  Form { get; set; }


    }


    public enum orderStatus
    {
        Ordered,
        Reject,
        Approved,
        Finshed,
        delivery,
        Receipt,



    }

   public class OrderForm
    {
        [Key]
        public int id { get; set; }
        public string Key { get; set; }
        public string AKey { get; set; }
        public string  value { get; set; }
        [ForeignKey("product")]
        public int ProductId { get; set; }
        public virtual product product { get; set; }
    }

    public class ReceiptCode
    {
        [Key]
        [ForeignKey("Order")]
        public int OrderId { get; set; }
        public Order Order { get; set; }
        [ForeignKey("User")]
        public string UserId { get; set; }
        public virtual User User { get; set; }
        [ForeignKey("sealler")]
        public string SeallerId { get; set; }
        public virtual sealler sealler { get; set; }
        [Required]
        public  int Code { get; set; }
        public  DateTime ExperDate { get; set; }
        public  DateTime? ReceiptDate { get; set; }
    }
}

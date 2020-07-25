using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace K_Api202001.Models.ModeView
{
    public class OrderModeView 
    {


        public int? Id { get; set; }
        public string description { get; set; }
        public int Cuantity { get; set; }
        public int ProductId { get; set; }
        public string UserAddress { get; set; }
       // public orderStatus orderStatus { get; set; }
      //  public DateTime? ReceiptDate { get; set; }
    //    public ReceiptCode? ReceiptCode { get; set; }   
        public string otherPhoneNo { get; set; }
        public int ColerId { get; set; }
       



    }


    public class orderstateModeview
    {
        [Required]
        public int OrderId { get; set; }
        [Required]
        public orderStatus orderStatus { get; set; }
    }

    public class ReceiptModelView
    {
        public int OrderId { get; set; }
        public string  Code { get; set; }
    }
}

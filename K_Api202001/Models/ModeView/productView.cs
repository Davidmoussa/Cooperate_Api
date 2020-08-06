using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace K_Api202001.Models.ModeView
{
    public class productView
    {
        [Required]

        public string Name { get; set; }
        public string AName { get; set; }
        public string description { get; set; }
       
        public double price { get; set; }
       
        [Required]
        public bool Stock { get; set; }
        public int? StockCount { get; set; }
        public int Timespent { get; set; }
   //     [Required]
       public IFormFile Img1 { get; set; }
       public IFormFile Img2 { get; set; }
       public IFormFile Img3 { get; set; }
       public IFormFile Img4 { get; set; }
       public IFormFile Img5 { get; set; }
      
        public IList<ColorView> Colors { get; set; }
        public IList<FormView> Form { get; set; }

    }
    public  class ColorView
    {
        public int? Id { get; set; }
        public string Color { get; set; }
        public string AColor { get; set; }
        public string Code { get; set; }
    }
    public class FormView
    {
        [Required]
        public int FormId { get; set; }
        [Required]
        public string Value { get; set; }
    }

    public class IForm
    {
        [Required]
        public IFormFile File { get; set; }
       
    }

    public class productViewUpdata
    {
        [Required]

        public string Name { get; set; }
        public string AName { get; set; }
        public string description { get; set; }

        public double price { get; set; }
        
        [Required]
        public bool Stock { get; set; }
        public int? StockCount { get; set; }
        public int Timespent { get; set; }
        //     [Required]
        public IFormFile Img1 { get; set; }
        public IFormFile Img2 { get; set; }
        public IFormFile Img3 { get; set; }
        public IFormFile Img4 { get; set; }
        public IFormFile Img5 { get; set; }
       
        public IList<string> ImgPathupData { get; set; }
        public IList<ColorView> Colors { get; set; }
        public IList<FormView> Form { get; set; }

    }
}

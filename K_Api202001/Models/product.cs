using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace K_Api202001.Models
{
    public class product
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string AName { get; set; }
        [Required]
        public string description { get; set; }
        [Required]
        public double price { get; set; }
        [Required]
        public bool Stock { get; set; }
        public int? StockCount { get; set; }

        public DateTime Date { get; set; }
        [ForeignKey("sealler")]
        public string SeallerId { get; set; }
        public sealler sealler { get; set; }
        public bool Delete { get; set; }
        public int Timespent { get; set; }

      //  public int ProductTypeId { get; set; }
       // public virtual ProductType ProductType { get; set; }

        public virtual ICollection<productForm> Form { get; set; }
        public virtual ICollection<productIMg> Img { get; set; }
        public virtual ICollection<productColor> Colors { get; set; }
        public virtual ICollection<Order> Order { get; set; }
        
    }
    public class productIMg
    {
        public int Id { get; set; }
      
        public string  img  { get; set; }
        [ForeignKey("product")]
        public int productId { get; set; }
        public virtual  product product { get; set; }
       
    }

    public class productColor
    {
        public int Id { get; set; }
        public string Color { get; set; }
        public string AColor { get; set; }
        public string Code { get; set; }
        [ForeignKey("product")]
        public int productId { get; set; }
        public virtual product product { get; set; }

    }

    public class productForm
    {
        [ForeignKey("product")]
        public int ProductId { get; set; }
        [ForeignKey("Form")]

        public int FormId { get; set; }
        
        public string value { get; set; }
        public  virtual product product { get; set; }
        public virtual ProForm Form { get; set; }



    }

    public  class ImgMapForm
    {
        public static List<string> ImgList(string newPath, IList<IFormFile> formFiles )
        {
            List<string> imgs = new List<string>();

            foreach (var item in formFiles)
            {
                
                if(item!=null)
                if (item.Length > 0)
                {
                     
                    //string folderName = "wwwroot//Upload//imgUser";
                    string fileName = null;
                        //string webRootPath = _environment.ContentRootPath;
                        //string newPath = Path.Combine(_environment.ContentRootPath, "wwwroot//Upload//imgUser");
                        if (!Directory.Exists(newPath))
                    {
                        Directory.CreateDirectory(newPath);
                    }
                    if (item.Length > 0)
                    {
                        fileName = Guid.NewGuid().ToString() + "_" + ContentDispositionHeaderValue.Parse(item.ContentDisposition).FileName.Trim('"');
                        string fullPath = Path.Combine(newPath, fileName);
                        using (var memoryStream = new System.IO.MemoryStream())
                        {
                            item.CopyTo(memoryStream);
                            funStatac.Image_resize(memoryStream, fullPath, 300);
                        }
                    }
                    imgs.Add( fileName);
                }





            }
            
            return imgs;

        }
    }


}

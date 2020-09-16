using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace K_Api202001.Models
{
    public class News
    {
        [Key]
        public int id { get; set; }
       
        public  string Titel { get; set; }
        public string ATitel { get; set; }
        public string Description { get; set; }
        public string ADescription { get; set; }
    }
}

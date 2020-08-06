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
       
        public int Titel { get; set; }
        public int ATitel { get; set; }
        public int Description { get; set; }
        public int ADescription { get; set; }
    }
}

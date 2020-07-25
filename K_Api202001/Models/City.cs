using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace K_Api202001.Models
{
    public class City
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string Name { get; set; }
        public string AName { get; set; }
        
        public virtual ICollection<zone> zone { get; set; }
    }
    public class zone
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string Name { get; set; }
        public string AName { get; set; }
        public int Cityid { get; set; }
        public virtual City City { get; set; }

    }
}

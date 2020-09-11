using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace K_Api202001.Models
{
    public class Rateproduct
    {
        [ForeignKey("User")]
        public string userId { get; set; }
        [ForeignKey("product")]
        public int productId { get; set; }
        public string comment { get; set; }
        public product product { get; set; }
        public User User { get; set; }
        [Range(0, 5)]
        public Int16 reate { get; set; }
    }
}

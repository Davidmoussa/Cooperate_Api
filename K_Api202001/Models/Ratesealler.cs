using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace K_Api202001.Models
{
    public class Ratesealler
    {
       [ForeignKey("User")]
        public string userId { get; set; }
        [ForeignKey("sealler")]
        public string seallerId { get; set; }
        public string comment  { get; set; }
        public sealler sealler { get; set; }
        public User User { get; set; }
        [Range(0,5)]
        public Int16 reate { get; set; }

    }
}

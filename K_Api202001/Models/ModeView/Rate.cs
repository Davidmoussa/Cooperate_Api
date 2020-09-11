using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace K_Api202001.Models.ModeView
{
    public class RateseallermodelView
    {
        [Required]
        public string seallerId { get; set; }
        public string comment { get; set; }
      
        [Range(0, 5)]
        public Int16 reate { get; set; }

    }
    public class RateproductmodelView
    {
        [Required]
        public int productId { get; set; }
        public string comment { get; set; }

        [Range(0, 5)]
        public Int16 reate { get; set; }
    }
}

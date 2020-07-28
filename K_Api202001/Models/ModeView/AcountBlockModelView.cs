using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace K_Api202001.Models.ModeView
{
    public class AcountBlockModelView
    {
        [Required]
        public string  AcountId { get; set; }
        [Required]
        public bool  block { get; set; }
    }
}

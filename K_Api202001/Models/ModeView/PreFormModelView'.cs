using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace K_Api202001.Models.ModeView
{
    public class PreFormModelView
    {

        [Required]
        public int ProductTypeId { get; set; }
        public int? Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string AName { get; set; }
        public bool? Required { get; set; }

    }
}

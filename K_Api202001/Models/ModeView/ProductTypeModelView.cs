using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace K_Api202001.Models.ModeView
{
    public class ProductTypeModelView
    {

        [Required]
      //  public int Id { get; set; }
        //[ForeignKey("ProJectType")]
        public int ProJectTypeId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string AName { get; set; }
    }
}

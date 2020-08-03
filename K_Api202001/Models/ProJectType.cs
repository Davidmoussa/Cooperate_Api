using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace K_Api202001.Models
{
    public class ProJectType
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string AName { get; set; }

        public virtual ICollection<ProForm> ProForm { get; set; }


    }

    public class ProJectTypeModelView
    {
       
        [Required]
        public string Name { get; set; }
        [Required]
        public string AName { get; set; }

        public virtual ICollection<FormModelView> ProForm { get; set; }


    }

    public class FormModelView
    {
       

        public string Name { get; set; }
        public string AName { get; set; }
        public bool? Required { get; set; }
        public Type Type { get; set; }

    }


}

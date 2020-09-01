using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
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

    public class ProJectTypeUpDateModelView
    {

        [Required]
        public string Name { get; set; }
        [Required]
        public string AName { get; set; }

        public virtual ICollection<FormUpDateModelView> ProForm { get; set; }


    }


    public class ProJectTypeModelView
    {
        
        [Required]
        public string Name { get; set; }
        [Required]
        public string AName { get; set; }

        public virtual ICollection<FormModelView> ProForm { get; set; }


    }
    public class FormUpDateModelView
    {


        public int Id { get; set; }
        public string Name { get; set; }
        public string AName { get; set; }
        public bool? Required { get; set; }
        public Type Type { get; set; }

    }

    public class FormModelView
    {
       

        public string Name { get; set; }
        public string AName { get; set; }
        public bool? Required { get; set; }
        public Type Type { get; set; }

    }


}

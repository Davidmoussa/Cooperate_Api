using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace K_Api202001.Models
{
    public class ProductType
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("ProJectType")]
        public int ProJectTypeId { get; set; }
        public string Name { get; set; }
        public string AName { get; set; }

        public virtual ProJectType ProJectType { get; set; }
        public virtual ICollection<product> product { get; set; }
        public virtual ICollection<ProForm> ProForm { get; set; }

    }
    public class ProForm {
        [Key]
        public int Id { get; set; }
        [ForeignKey("ProductType")]
        public int ProductTypeId { get; set; }
        
        public string Name { get; set; }
        public string AName { get; set; }
        public bool? Required { get; set; }
        
        public virtual ProductType ProductType { get; set; }

        public virtual ICollection<productForm> Form { get; set; }
    }
   
}

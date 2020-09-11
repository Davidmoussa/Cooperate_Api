using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace K_Api202001.Models
{
    public class sealler
    {
        [Key]
        [ForeignKey("UserIdentity")]
        public string id { get; set; }
        public string projectName { get; set; }
        public string projectAName { get; set; }
        public string description { get; set; }
        public UserIdentity UserIdentity { get; set; }
        public DateTime Hdate { get; set; }
       
        [ForeignKey("ProJectType")]
        public  int ProJectTypeId { get; set; }
        public ProJectType ProJectType { get; set; }

        public int? CityId { get; set; }
        public int? zoneId { get; set; }
        public virtual City City { get; set; }
        public virtual zone zone { get; set; }

        public virtual ICollection<Order> Orders { get; set; }
        public virtual ICollection<product> products { get; set; }
        public virtual ICollection<Ratesealler> Rates { get; set; }

        
    }
    public class SeallerModelView
    {


        [Required]
        [Phone]
        [Display(Name = "PhonNumber")]
        public string Phon { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }
        [Required]
        
        

       
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }

        public string projectName { get; set; }
        public string projectAName { get; set; }
        public string description { get; set; }
        
        public int ProJectTypeId { get; set; }
        

        public int? CityId { get; set; }
        public int? zoneId { get; set; }
        

    }

}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace K_Api202001.Models
{
    public class User
    {
        [Key]
        [ForeignKey("UserIdentity")]
        public string  id { get; set; }
        public string  Name { get; set; }
        public string  AName { get; set; }
        public UserIdentity UserIdentity { get; set; }
        public DateTime Hdate { get; set; }
        public virtual ICollection<Order> Orders { get; set; }

    }

    public class UserModelview
    {

        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }
        [Required]
        public string Name { get; set; }
        public string AName { get; set; }
        [Phone]
        [Display(Name = "PhonNumber")]
        public string Phon { get; set; }





    }

}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace K_Api202001.Models.ModeView
{
    public class LoginModeView
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }

    public class cahngPassweordViewModel
    {

        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }
        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Newpassword")]

        public string Newpassword { get; set; }
    }


    public class SeallerEditView
    {

        public string projectName { get; set; }
        public string projectAName { get; set; }
        public string description { get; set; }

        public int ProJectTypeId { get; set; }

        public int? CityId { get; set; }
        public int? zoneId { get; set; }
    }
}
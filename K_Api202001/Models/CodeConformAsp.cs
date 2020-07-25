using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace K_Api202001.Models
{
    public class UserCodeConfierm
    {
        [Key]
        [ForeignKey("UserIdentity")]
        public string UserId { get; set; }
        public string Code { get; set; }
        public DateTime ExperdDate { get; set; }
       
        public Codetype Type { get; set; }
        public virtual UserIdentity UserIdentity { get; set; }
    }
     
    public enum Codetype
    {
        PasswordUser,
        chengPass

    }

    
        public class SeallerCodeConfiermModelView
    {
        [Required]
      
        public string SeallerId { get; set; }
        [Required]
        public bool Confierm { get; set; }
    }
    
public class UserCodeConfiermModelView
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Code { get; set; }
    }
}

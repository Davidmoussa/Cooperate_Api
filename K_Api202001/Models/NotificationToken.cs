using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace K_Api202001.Models
{
    public class NotificationToken
    {
       [Key]
        public string  connectionFierbaseId { get; set; }
        [ForeignKey("User")]
        public string  UserId { get; set; }
        public UserIdentity User { get; set; }
        public string Type { get; set; }
       
    }
}

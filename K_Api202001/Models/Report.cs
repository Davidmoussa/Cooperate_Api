using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace K_Api202001.Models
{
    public class Report
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("UserIdentity")]
        public string  AcountId { get; set; }
        public string Text { get; set; }
        public DateTime Date { get; set; }
        public string Type  { get; set; }
        public UserIdentity UserIdentity { get; set; }


       
    }
}

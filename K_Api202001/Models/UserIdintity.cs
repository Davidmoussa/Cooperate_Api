
using Microsoft.AspNetCore.Identity;
using System;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

using System.Collections.Generic;

namespace K_Api202001.Models
{
    public class UserIdentity : IdentityUser
    {

        public Confirmed Confirmed { get; set; }
        public bool Block { get; set; }
        public ICollection<Report> Reports { get; set; }

    }
    public enum Confirmed
    {
        Reject,
        approved,
        block,
        non,

    }
}

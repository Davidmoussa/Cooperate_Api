using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace K_Api202001.Tools
{
    public class SmtpSettings
    {
        public string Server { get; set; }
        public string Port { get; set; }
        public string FromAddress { get; set; }
        public string Password { get; set; }
    }
}

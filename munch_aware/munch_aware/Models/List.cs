using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace munch_aware.Models
{
    public class List
    {
        [Key]
        public int ListItemId { get; set; }
        public User User { get; set; }
        public Food Food { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace munch_aware.Models
{
    public class Friends
    {
        [Key]
        public int FriendsId { get; set; }
        public User User_0 { get; set; }
        public User User_1 { get; set; }
        public Boolean Status { get; set; }
    }
}
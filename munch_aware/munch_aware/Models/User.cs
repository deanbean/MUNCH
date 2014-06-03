using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace munch_aware.Models
{
    public class User
    {   
        public User()
        {
            this.Restrictions = new HashSet<Restrictions>();
            this.List = new HashSet<List>();
            this.Friends= new HashSet<Friends>();
        }

        [Key]
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string City { get; set; }
        public string Region { get; set; }
        public string Country { get; set; }
        public string Note { get; set; }
        public virtual ICollection<Restrictions> Restrictions { get; set; }
        public virtual ICollection<List> List { get; set; }
        public virtual ICollection<Friends> Friends { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace munch_aware.Models
{
    public class Food
    {
        [Key]
        public int FoodId { get; set; }
        public string Restriction { get; set; }
        public string RestrictionDetails { get; set; }
        public string Substitutions { get; set; }
    }
}
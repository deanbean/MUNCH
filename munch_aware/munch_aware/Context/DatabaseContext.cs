using munch_aware.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace munch_aware.Context
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext() : base("DefaultConnection")
        {
        }

        public DbSet<Food> Food { get; set; }
        public DbSet<Friends> Friends { get; set; }
        public DbSet<List> Lists { get; set; }
        public DbSet<Restrictions> Restrictions { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
namespace munch_aware.Migrations
{
    using munch_aware.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<munch_aware.Context.DatabaseContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }


        protected override void Seed(munch_aware.Context.DatabaseContext context)
        {
            context.Food.AddOrUpdate(
              new Food { Restriction = "Veggies", RestrictionDetails = "Don't like them", Substitutions = "" },
              new Food { Restriction = "Carrots", RestrictionDetails = "I'm not a rabbit", Substitutions = "" },
              new Food { Restriction = "Lettus", RestrictionDetails = "I'm not a rabbit", Substitutions = "" },
              new Food { Restriction = "Raddish", RestrictionDetails = "Only for the Shrewts", Substitutions = "" },
              new Food { Restriction = "Potatoe", RestrictionDetails = "", Substitutions = "" },
              new Food { Restriction = "Candy", RestrictionDetails = "Yummy", Substitutions = "" },
              new Food { Restriction = "Lolli-Pops", RestrictionDetails = "", Substitutions = "" },
              new Food { Restriction = "Twizzlers", RestrictionDetails = "", Substitutions = "" },
              new Food { Restriction = "Soup", RestrictionDetails = "", Substitutions = "" },
              new Food { Restriction = "Yam", RestrictionDetails = "", Substitutions = "" }
            );

            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
        }
    }
}

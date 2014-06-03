namespace munch_aware.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitalCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Foods",
                c => new
                    {
                        FoodId = c.Int(nullable: false, identity: true),
                        Restriction = c.String(),
                        RestrictionDetails = c.String(),
                        Substitutions = c.String(),
                    })
                .PrimaryKey(t => t.FoodId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Foods");
        }
    }
}

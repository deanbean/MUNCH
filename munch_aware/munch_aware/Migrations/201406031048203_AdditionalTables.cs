namespace munch_aware.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AdditionalTables : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Friends",
                c => new
                    {
                        FriendsId = c.Int(nullable: false, identity: true),
                        Status = c.Boolean(nullable: false),
                        User_UserId = c.Int(),
                        User_0_UserId = c.Int(),
                        User_1_UserId = c.Int(),
                    })
                .PrimaryKey(t => t.FriendsId)
                .ForeignKey("dbo.Users", t => t.User_UserId)
                .ForeignKey("dbo.Users", t => t.User_0_UserId)
                .ForeignKey("dbo.Users", t => t.User_1_UserId)
                .Index(t => t.User_UserId)
                .Index(t => t.User_0_UserId)
                .Index(t => t.User_1_UserId);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        UserId = c.Int(nullable: false, identity: true),
                        Username = c.String(),
                        Password = c.String(),
                        FirstName = c.String(),
                        LastName = c.String(),
                        City = c.String(),
                        Region = c.String(),
                        Country = c.String(),
                        Note = c.String(),
                    })
                .PrimaryKey(t => t.UserId);
            
            CreateTable(
                "dbo.Lists",
                c => new
                    {
                        ListItemId = c.Int(nullable: false, identity: true),
                        Food_FoodId = c.Int(),
                        User_UserId = c.Int(),
                    })
                .PrimaryKey(t => t.ListItemId)
                .ForeignKey("dbo.Foods", t => t.Food_FoodId)
                .ForeignKey("dbo.Users", t => t.User_UserId)
                .Index(t => t.Food_FoodId)
                .Index(t => t.User_UserId);
            
            CreateTable(
                "dbo.Restrictions",
                c => new
                    {
                        RestrictioId = c.Int(nullable: false, identity: true),
                        Severity = c.Int(nullable: false),
                        Food_FoodId = c.Int(),
                        User_UserId = c.Int(),
                    })
                .PrimaryKey(t => t.RestrictioId)
                .ForeignKey("dbo.Foods", t => t.Food_FoodId)
                .ForeignKey("dbo.Users", t => t.User_UserId)
                .Index(t => t.Food_FoodId)
                .Index(t => t.User_UserId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Friends", "User_1_UserId", "dbo.Users");
            DropForeignKey("dbo.Friends", "User_0_UserId", "dbo.Users");
            DropForeignKey("dbo.Restrictions", "User_UserId", "dbo.Users");
            DropForeignKey("dbo.Restrictions", "Food_FoodId", "dbo.Foods");
            DropForeignKey("dbo.Lists", "User_UserId", "dbo.Users");
            DropForeignKey("dbo.Lists", "Food_FoodId", "dbo.Foods");
            DropForeignKey("dbo.Friends", "User_UserId", "dbo.Users");
            DropIndex("dbo.Restrictions", new[] { "User_UserId" });
            DropIndex("dbo.Restrictions", new[] { "Food_FoodId" });
            DropIndex("dbo.Lists", new[] { "User_UserId" });
            DropIndex("dbo.Lists", new[] { "Food_FoodId" });
            DropIndex("dbo.Friends", new[] { "User_1_UserId" });
            DropIndex("dbo.Friends", new[] { "User_0_UserId" });
            DropIndex("dbo.Friends", new[] { "User_UserId" });
            DropTable("dbo.Restrictions");
            DropTable("dbo.Lists");
            DropTable("dbo.Users");
            DropTable("dbo.Friends");
        }
    }
}

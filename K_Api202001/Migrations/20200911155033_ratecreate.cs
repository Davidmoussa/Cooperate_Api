using Microsoft.EntityFrameworkCore.Migrations;

namespace K_Api202001.Migrations
{
    public partial class ratecreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Rateproducts",
                columns: table => new
                {
                    userId = table.Column<string>(nullable: false),
                    productId = table.Column<int>(nullable: false),
                    comment = table.Column<string>(nullable: true),
                    reate = table.Column<short>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rateproducts", x => new { x.userId, x.productId });
                    table.ForeignKey(
                        name: "FK_Rateproducts_products_productId",
                        column: x => x.productId,
                        principalTable: "products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Rateproducts_Users_userId",
                        column: x => x.userId,
                        principalTable: "Users",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Rateseallers",
                columns: table => new
                {
                    userId = table.Column<string>(nullable: false),
                    seallerId = table.Column<string>(nullable: false),
                    comment = table.Column<string>(nullable: true),
                    reate = table.Column<short>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rateseallers", x => new { x.userId, x.seallerId });
                    table.ForeignKey(
                        name: "FK_Rateseallers_Seallers_seallerId",
                        column: x => x.seallerId,
                        principalTable: "Seallers",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Rateseallers_Users_userId",
                        column: x => x.userId,
                        principalTable: "Users",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Rateproducts_productId",
                table: "Rateproducts",
                column: "productId");

            migrationBuilder.CreateIndex(
                name: "IX_Rateseallers_seallerId",
                table: "Rateseallers",
                column: "seallerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Rateproducts");

            migrationBuilder.DropTable(
                name: "Rateseallers");
        }
    }
}

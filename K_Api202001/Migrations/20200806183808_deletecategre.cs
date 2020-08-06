using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace K_Api202001.Migrations
{
    public partial class deletecategre : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderForm_Orders_OrderId",
                table: "OrderForm");

            migrationBuilder.DropForeignKey(
                name: "FK_OrderForm_products_ProductId",
                table: "OrderForm");

            migrationBuilder.DropForeignKey(
                name: "FK_products_ProductType_ProductTypeId",
                table: "products");

            migrationBuilder.DropTable(
                name: "ProductType");

            migrationBuilder.DropIndex(
                name: "IX_products_ProductTypeId",
                table: "products");

            migrationBuilder.DropIndex(
                name: "IX_OrderForm_ProductId",
                table: "OrderForm");

            migrationBuilder.DropColumn(
                name: "ProductTypeId",
                table: "products");

            migrationBuilder.DropColumn(
                name: "ProductId",
                table: "OrderForm");

            migrationBuilder.RenameColumn(
                name: "OrderId",
                table: "OrderForm",
                newName: "orderId");

            migrationBuilder.RenameIndex(
                name: "IX_OrderForm_OrderId",
                table: "OrderForm",
                newName: "IX_OrderForm_orderId");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "ProJectType",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext CHARACTER SET utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "AName",
                table: "ProJectType",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext CHARACTER SET utf8mb4");

            migrationBuilder.AddColumn<int>(
                name: "category",
                table: "Orders",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "orderId",
                table: "OrderForm",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ProJectType_AName_Name",
                table: "ProJectType",
                columns: new[] { "AName", "Name" },
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_OrderForm_Orders_orderId",
                table: "OrderForm",
                column: "orderId",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderForm_Orders_orderId",
                table: "OrderForm");

            migrationBuilder.DropIndex(
                name: "IX_ProJectType_AName_Name",
                table: "ProJectType");

            migrationBuilder.DropColumn(
                name: "category",
                table: "Orders");

            migrationBuilder.RenameColumn(
                name: "orderId",
                table: "OrderForm",
                newName: "OrderId");

            migrationBuilder.RenameIndex(
                name: "IX_OrderForm_orderId",
                table: "OrderForm",
                newName: "IX_OrderForm_OrderId");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "ProJectType",
                type: "longtext CHARACTER SET utf8mb4",
                nullable: false,
                oldClrType: typeof(string));

            migrationBuilder.AlterColumn<string>(
                name: "AName",
                table: "ProJectType",
                type: "longtext CHARACTER SET utf8mb4",
                nullable: false,
                oldClrType: typeof(string));

            migrationBuilder.AddColumn<int>(
                name: "ProductTypeId",
                table: "products",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "OrderId",
                table: "OrderForm",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<int>(
                name: "ProductId",
                table: "OrderForm",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "ProductType",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    AName = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: true),
                    Name = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: true),
                    ProJectTypeId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductType", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProductType_ProJectType_ProJectTypeId",
                        column: x => x.ProJectTypeId,
                        principalTable: "ProJectType",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_products_ProductTypeId",
                table: "products",
                column: "ProductTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderForm_ProductId",
                table: "OrderForm",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_ProductType_ProJectTypeId",
                table: "ProductType",
                column: "ProJectTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderForm_Orders_OrderId",
                table: "OrderForm",
                column: "OrderId",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_OrderForm_products_ProductId",
                table: "OrderForm",
                column: "ProductId",
                principalTable: "products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_products_ProductType_ProductTypeId",
                table: "products",
                column: "ProductTypeId",
                principalTable: "ProductType",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

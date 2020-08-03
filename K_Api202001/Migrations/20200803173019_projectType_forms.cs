using Microsoft.EntityFrameworkCore.Migrations;

namespace K_Api202001.Migrations
{
    public partial class projectType_forms : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProForm_ProductType_ProductTypeId",
                table: "ProForm");

            migrationBuilder.DropIndex(
                name: "IX_ProForm_ProductTypeId",
                table: "ProForm");

            migrationBuilder.DropColumn(
                name: "ProductTypeId",
                table: "ProForm");

            migrationBuilder.AddColumn<int>(
                name: "ProJectTypeId",
                table: "ProForm",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_ProForm_ProJectTypeId",
                table: "ProForm",
                column: "ProJectTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_ProForm_ProJectType_ProJectTypeId",
                table: "ProForm",
                column: "ProJectTypeId",
                principalTable: "ProJectType",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProForm_ProJectType_ProJectTypeId",
                table: "ProForm");

            migrationBuilder.DropIndex(
                name: "IX_ProForm_ProJectTypeId",
                table: "ProForm");

            migrationBuilder.DropColumn(
                name: "ProJectTypeId",
                table: "ProForm");

            migrationBuilder.AddColumn<int>(
                name: "ProductTypeId",
                table: "ProForm",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_ProForm_ProductTypeId",
                table: "ProForm",
                column: "ProductTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_ProForm_ProductType_ProductTypeId",
                table: "ProForm",
                column: "ProductTypeId",
                principalTable: "ProductType",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

namespace K_Api202001.Migrations
{
    public partial class notifictiontoken_keyconnectiontokenfierbase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_NotificationTokens_AspNetUsers_UserId",
                table: "NotificationTokens");

            migrationBuilder.DropPrimaryKey(
                name: "PK_NotificationTokens",
                table: "NotificationTokens");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "NotificationTokens",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "varchar(255) CHARACTER SET utf8mb4");

            migrationBuilder.AddPrimaryKey(
                name: "PK_NotificationTokens",
                table: "NotificationTokens",
                column: "connectionFierbaseId");

            migrationBuilder.CreateIndex(
                name: "IX_NotificationTokens_UserId",
                table: "NotificationTokens",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_NotificationTokens_AspNetUsers_UserId",
                table: "NotificationTokens",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_NotificationTokens_AspNetUsers_UserId",
                table: "NotificationTokens");

            migrationBuilder.DropPrimaryKey(
                name: "PK_NotificationTokens",
                table: "NotificationTokens");

            migrationBuilder.DropIndex(
                name: "IX_NotificationTokens_UserId",
                table: "NotificationTokens");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "NotificationTokens",
                type: "varchar(255) CHARACTER SET utf8mb4",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_NotificationTokens",
                table: "NotificationTokens",
                columns: new[] { "UserId", "connectionFierbaseId" });

            migrationBuilder.AddForeignKey(
                name: "FK_NotificationTokens_AspNetUsers_UserId",
                table: "NotificationTokens",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

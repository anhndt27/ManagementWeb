using Microsoft.EntityFrameworkCore;
using Managerment.Infrastructure.EntityFramework;

var builder = WebApplication.CreateBuilder(args);

ConfigurationManager configuration = builder.Configuration;
builder.Services.AddDbContext<ApplicationDbContext>(optionsAction =>
{
	optionsAction.UseSqlServer(configuration.GetConnectionString("DefaultConnection"), b => b.MigrationsAssembly("Managerment.Database"));
});

var app = builder.Build();


app.Run();


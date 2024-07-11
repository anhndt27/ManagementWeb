using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Managerment.Core.Implement.Authentication;
using Microsoft.AspNetCore.Identity;
using Managerment.Domain.Entities;
using System;
using Managerment.Infrastructure.EntityFramework;
using Managerment.Core.Interfaces.Services.Authentication;
using Managerment.Core.Interfaces.Repositories.Groups;
using Managerment.Infrastructure.Repositories.Groups;
using Managerment.Core.Interfaces.Services.Groups;
using Managerment.Core.Implement.Group;
using Managerment.Core.Interfaces.Services.Users;
using Managerment.Core.Implement.Users;
using Managerment.Core.Interfaces.Repositories.Users;
using Managerment.Infrastructure.Repositories.Users;

namespace Managerment.Server.ServiceRegistrations
{
    public static class ServiceRegistrations
	{
		public static void ConfigureServices(this IServiceCollection services, ConfigurationManager configuration, bool isProduction)
		{

			if (Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == "Stage")
			{
				services.AddDbContext<ApplicationDbContext>(options =>
						options.UseSqlServer(Environment.GetEnvironmentVariable("CONNECTION_STRING"), x => x.MigrationsAssembly("Managerment.Database")));
			}
			else
			{
				services.AddDbContext<ApplicationDbContext>(options =>
					options.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));
			}

			services.Configure<JwtSettings>(configuration.GetSection(JwtSettings.SectionsName));

			string issuer = configuration.GetValue<string>("JwtSettings:Issuer") ?? string.Empty;
			string audience = configuration.GetValue<string>("JwtSettings:Audience") ?? string.Empty;
			string signingKey = configuration.GetValue<string>("JwtSettings:Secret") ?? string.Empty;
			byte[] signingKeyBytes = System.Text.Encoding.UTF8.GetBytes(signingKey);

			services.AddAuthentication(opt =>
			{
				opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
				opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
			})
		   .AddJwtBearer(options =>
		   {
			   options.RequireHttpsMetadata = false;
			   options.SaveToken = true;
			   options.TokenValidationParameters = new TokenValidationParameters()
			   {
				   ValidateIssuer = true,
				   ValidIssuer = issuer,
				   ValidateAudience = true,
				   ValidAudience = audience,
				   ValidateLifetime = true,
				   ValidateIssuerSigningKey = true,
				   ClockSkew = System.TimeSpan.Zero,
				   IssuerSigningKey = new SymmetricSecurityKey(signingKeyBytes)
			   };
		   });

			string[] domains = configuration.GetSection("Domains").Get<string[]>() ?? [];
			services.AddCors(options =>
			{
				options.AddPolicy("_myAllowSpecificOrigins",
					policy =>
					{
						policy.WithOrigins(domains)
							.AllowAnyMethod()
							.AllowAnyHeader();
					});
			});

			services.AddIdentity<AppUser, AppRole>()
				.AddEntityFrameworkStores<ApplicationDbContext>()
				.AddDefaultTokenProviders();
			services.AddScoped<IJwtTokenGenerator, JwtTokenGenerator>();
			services.AddScoped<IAccountService, AccountService>();
			services.AddScoped<IGroupRepository, GroupRepository>();
			services.AddScoped<IGroupService, GroupService>();
			services.AddScoped<IUserService, UserService>();
			services.AddScoped<IUserRepository, UserRepository>();
		}
	}
}

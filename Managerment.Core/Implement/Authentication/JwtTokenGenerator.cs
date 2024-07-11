using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Managerment.Core.Interfaces.Services.Authentication;
using Managerment.Domain.Entities;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Managerment.Core.Implement.Authentication
{
    public class JwtTokenGenerator : IJwtTokenGenerator
	{
		private readonly JwtSettings _jwtSettings;

		public JwtTokenGenerator(IOptions<JwtSettings> jwtOptions)
		{
			_jwtSettings = jwtOptions.Value;
		}

		public async Task<string> GenerateToken(AppUser user)
		{
			var signingCredentials = new SigningCredentials
			(
				new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtSettings.Secret)),
				SecurityAlgorithms.HmacSha256
			);

			var claims = new List<Claim>()
			{
				new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
				new Claim(JwtRegisteredClaimNames.Email, user.Email),
				new Claim(JwtRegisteredClaimNames.Name, user.UserName),
				new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
				new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString(), ClaimValueTypes.Integer64),
				new Claim(JwtRegisteredClaimNames.Sid, Guid.NewGuid().ToString()),
			};

			var securityToken = new JwtSecurityToken(
				issuer: _jwtSettings.Issuer,
				expires: DateTime.UtcNow.AddMinutes(_jwtSettings.ExpiryMinutes),
				audience: _jwtSettings.Audience,
				claims: claims,
				signingCredentials: signingCredentials
			);

			return new JwtSecurityTokenHandler().WriteToken(securityToken);
		}
	}
}

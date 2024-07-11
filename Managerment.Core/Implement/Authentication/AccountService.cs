using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Managerment.Core.ViewModels.Response.Authentication;
using Managerment.Core.ViewModels.Request.Authentication;
using Managerment.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using System.Reflection;
using Managerment.Core.Interfaces.Services.Authentication;

namespace Managerment.Core.Implement.Authentication
{
    public class AccountService : IAccountService
	{
		private readonly UserManager<AppUser> _userManager;
		private readonly SignInManager<AppUser> _signInManager;
		private readonly IJwtTokenGenerator _jwtTokenGenerator;
		public AccountService(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, IJwtTokenGenerator jwtTokenGenerator)
		{
			_userManager = userManager;
			_signInManager = signInManager;
			_jwtTokenGenerator = jwtTokenGenerator;
		}

		public async Task<LoginResponse> Login(LoginRequest request)
		{
			var user = await _userManager.FindByEmailAsync(request.Email);

			if (user == null)
			{
				throw new Exception("Can not find User");
			}

			var roles = await _userManager.GetRolesAsync(user);

			if (roles == null)
			{
				throw new Exception("User has no role ");
			}

			var result = await _signInManager.CheckPasswordSignInAsync(user, request.Password, false);

			if (result.Succeeded)
			{
				var jwtToken = await _jwtTokenGenerator.GenerateToken(user!);
				return new LoginResponse(user, jwtToken, roles);
			}

			return new LoginResponse()
			{
				User = null,
				Token = null
			};
		}
	}
}

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using Managerment.Core.Interfaces.Services.Users;
using Managerment.Core.ViewModels.Request;
using Managerment.Core.ViewModels.Request.User;
using Managerment.Core.ViewModels.Response;
using Managerment.Core.ViewModels.Response.User;
using Managerment.Domain.Entities;
using System.IdentityModel.Tokens.Jwt;

namespace Managerment.Server.Controllers
{
    [Route("api/[controller]")]
	[ApiController]
	public class UserController : ControllerBase
	{
		private readonly IUserService _userService;
		private readonly UserManager<AppUser> _userManager;
		public UserController(IUserService userService, UserManager<AppUser> userManager)
		{
			_userService = userService;
			_userManager = userManager;
		}

		[HttpGet("{id}")]
		[Authorize(Roles = "Admin,Staff,Teacher")]
		public async Task<IActionResult> Get(int id)
		{
			try
			{
				var res = await _userService.Get(id);
				return Ok(res);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[HttpGet("GetUsersByGroup")]
		[Authorize(Roles = "Admin,Staff,Teacher")]
		public async Task<IActionResult> GetUsersByGroup([FromQuery] int groupId) => Ok(await _userService.GetUsersByGroup(groupId));

		[HttpGet]
		[Authorize(Roles = "Admin,Staff")]
		public async Task<IActionResult> GetAllUsers([FromQuery] PagedRequest request)
		{
			try
			{
				var res = await _userManager.GetUsersInRoleAsync("");
				return Ok(res);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[HttpGet]
		[Route("/api/user/adminnstaff")]
		[Authorize(Roles = "Admin")]
		public async Task<IActionResult> GetAdminNStaff([FromQuery] PagedRequest request)
		{
			try
			{
				var res = await _userService.GetAllUsers(request);
				return Ok(res);
			}
			catch (Exception ex)
			{
				return BadRequest(ex);
			}
		}

		[HttpPost]
		[Authorize(Roles = "Admin")]
		[Route("Create")]
		public async Task<IActionResult> CreateUser(UserRequest request)
		{
			try
			{
				var res = await _userService.CreateUser(request);
				return Ok(res);
			}
			catch (Exception ex)
			{
				return BadRequest(ex);
			}
		}
	}
}

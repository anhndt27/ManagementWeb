using Microsoft.AspNetCore.Identity;
using Managerment.Core.Interfaces.Services.Authentication;
using Managerment.Core.ViewModels.Request.User;
using Managerment.Core.ViewModels.Response;
using Managerment.Core.ViewModels.Response.User;
using Managerment.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Managerment.Core.ViewModels.Request;
using Managerment.Core.ViewModels.Response.Group;
using Managerment.Core.Interfaces.Services.Users;

namespace Managerment.Core.Implement.Users
{
    public class UserService : IUserService
	{
		private readonly UserManager<AppUser> _userManager;

		public Task<bool> AssignmentUserInGroup(int userId, List<int> model)
		{
			throw new NotImplementedException();
		}

		public Task<object> CompleteImportStudent(int id, int existedUserId)
		{
			throw new NotImplementedException();
		}

		public Task<int> CopyStudentAddressToParent(int year, int semesterNumber)
		{
			throw new NotImplementedException();
		}

		public Task<bool> CreateCodeAuth(string codeAuth, AppUser appUser)
		{
			throw new NotImplementedException();
		}

		public async Task<AppUser> CreateUser(UserRequest model)
		{
			var user = new AppUser() 
			{ 
				UserName = model.UserName,
				Email = model.Email,
				PhoneNumber = model.PhoneNumber,
			};

			await _userManager.CreateAsync(user);
			return user;
		}

		public bool DeleteImportedUser(int id)
		{
			throw new NotImplementedException();
		}

		public Task<object> DeleteOldImportedUser(int id)
		{
			throw new NotImplementedException();
		}

		public Task<bool> DeleteUserNoActive()
		{
			throw new NotImplementedException();
		}

		public Task<UserResponse> Get(int id)
		{
			throw new NotImplementedException();
		}

		public Task<PagedResponse<UserResponse>> GetAllOldUsers(int currentPage, int pageSize, string searchString, string sortBy, string sortOrder, string[] roleFilters)
		{
			throw new NotImplementedException();
		}

		public Task<List<UserResponse>> GetAllUser()
		{
			throw new NotImplementedException();
		}

		public Task<PagedResponse<UserResponse>> GetAllUsers(PagedRequest request)
		{
			throw new NotImplementedException();
		}

		public Task<List<GroupResponse>> GetGroupsByUser(int userId)
		{
			throw new NotImplementedException();
		}

		public string GetUrlLog()
		{
			throw new NotImplementedException();
		}

		public Task<UserResponse> GetUser(int id)
		{
			throw new NotImplementedException();
		}

		public Task<List<UserResponse>> GetUsersByGroup(int groupId)
		{
			throw new NotImplementedException();
		}

		public bool LockUser(int id)
		{
			throw new NotImplementedException();
		}

		public string RandomCreateEmail(string name)
		{
			throw new NotImplementedException();
		}

		public Task<object> RemoveUsers(int[] ids)
		{
			throw new NotImplementedException();
		}

		public Task<bool> ResendToken(int id)
		{
			throw new NotImplementedException();
		}

		public Task<int> SetDefaultPasswordForFamilyAndStudents(int year, int semesterNumber)
		{
			throw new NotImplementedException();
		}

		public Task<int> UpdateFamilyIdForStudents()
		{
			throw new NotImplementedException();
		}

		public Task<bool> UpdateOwnPassword(AppUser user, string newPassword)
		{
			throw new NotImplementedException();
		}

		public Task<bool> UpdateProfile(UpdateUserRequest model)
		{
			throw new NotImplementedException();
		}

		public Task<AppUser> UpdateUser(int editerId, AppUser user, UserRequest model, bool IsUpdateOwnProfileUser)
		{
			throw new NotImplementedException();
		}

		
	}
}

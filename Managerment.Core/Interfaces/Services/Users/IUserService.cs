using Managerment.Core.ViewModels.Request;
using Managerment.Core.ViewModels.Request.User;
using Managerment.Core.ViewModels.Response;
using Managerment.Core.ViewModels.Response.User;
using Managerment.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Managerment.Core.Interfaces.Services.Users
{
    public interface IUserService
    {
        Task<UserResponse> Get(int id);
        Task<List<UserResponse>> GetUsersByGroup(int groupId);
        Task<UserResponse> GetUser(int id);
        Task<List<UserResponse>> GetAllUser();
        Task<bool> DeleteUserNoActive();
        string RandomCreateEmail(string name);
        bool LockUser(int id);
        Task<AppUser> CreateUser(UserRequest model);
        Task<AppUser> UpdateUser(int editerId, AppUser user, UserRequest model, bool IsUpdateOwnProfileUser);
        Task<PagedResponse<UserResponse>> GetAllUsers(PagedRequest request);
        Task<PagedResponse<UserResponse>> GetAllOldUsers(int currentPage, int pageSize, string searchString, string sortBy, string sortOrder, string[] roleFilters);
        Task<object> RemoveUsers(int[] ids);
        bool DeleteImportedUser(int id);
        Task<int> UpdateFamilyIdForStudents();
        Task<int> CopyStudentAddressToParent(int year, int semesterNumber);
        Task<object> CompleteImportStudent(int id, int existedUserId);
        Task<object> DeleteOldImportedUser(int id);
        Task<int> SetDefaultPasswordForFamilyAndStudents(int year, int semesterNumber);
        Task<bool> UpdateOwnPassword(AppUser user, string newPassword);
        Task<bool> CreateCodeAuth(string codeAuth, AppUser appUser);
        Task<bool> ResendToken(int id);
        string GetUrlLog();
        Task<bool> UpdateProfile(UpdateUserRequest model);
        Task<bool> AssignmentUserInGroup(int userId, List<int> model);
    }
}

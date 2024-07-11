using Managerment.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Managerment.Core.ViewModels.Response.User
{
	public class UserResponse
	{
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Avatar { get; set; }
        public IList<string> Roles { get; set; } = new List<string>();

        public UserResponse() { }
        public UserResponse(AppUser user, IList<string> roles)
        {
            Id = user.Id;
            Email = user.Email;
            PhoneNumber = user.PhoneNumber;
            Avatar = user.Avatar;
            Roles = roles;
        }
    }
}

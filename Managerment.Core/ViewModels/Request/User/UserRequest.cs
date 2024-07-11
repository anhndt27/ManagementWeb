using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Managerment.Core.ViewModels.Request.User
{
	public class UserRequest
	{
        public string UserName { get; set; }
        public string Email { get; set; }
		public string? PhoneNumber { get; set; }
		public string? Avatar { get; set; }
	}
}

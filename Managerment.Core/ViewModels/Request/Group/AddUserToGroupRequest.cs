using Managerment.Core.ViewModels.Request.User;
using Managerment.Core.ViewModels.Response.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Managerment.Core.ViewModels.Request.Group
{
	public class AddUserToGroupRequest
	{
		public AddUserToGroupRequest() { }
		public IList<UserRequest> Users { get; set; }
	}
}

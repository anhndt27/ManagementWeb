using Managerment.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Managerment.Core.ViewModels.Request.Group
{
	public class GroupRequest
	{
		public int Id { get; set; }

		public string Name { get; set; }

		public string Description { get; set; } 

		public IList<UserGroup> UserInGroups { get; set; }
	}
}

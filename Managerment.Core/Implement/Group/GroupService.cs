using Managerment.Core.Interfaces.Services.Groups;
using Managerment.Core.ViewModels.Request;
using Managerment.Core.ViewModels.Request.Group;
using Managerment.Core.ViewModels.Response;
using Managerment.Core.ViewModels.Response.Group;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Managerment.Core.Implement.Group
{
    public class GroupService : IGroupService
	{
		public Task<bool> Create(GroupRequest request)
		{
			throw new NotImplementedException();
		}

		public Task<bool> Delete(int id)
		{
			throw new NotImplementedException();
		}

		public Task<GroupResponse> GetById(int id)
		{
			throw new NotImplementedException();
		}

		public Task<PagedResponse<GroupResponse>> GetList(PagedRequest request)
		{
			throw new NotImplementedException();
		}

		public Task<bool> Update(GroupRequest request)
		{
			throw new NotImplementedException();
		}
	}
}

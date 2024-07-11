using Managerment.Core.ViewModels.Request;
using Managerment.Core.ViewModels.Request.Group;
using Managerment.Core.ViewModels.Response;
using Managerment.Core.ViewModels.Response.Group;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Managerment.Core.Interfaces.Services.Groups
{
    public interface IGroupService
    {
        Task<PagedResponse<GroupResponse>> GetList(PagedRequest request);

        Task<bool> Create(GroupRequest request);

        Task<bool> Update(GroupRequest request);

        Task<GroupResponse> GetById(int id);

        Task<bool> Delete(int id);
    }
}

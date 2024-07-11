using Managerment.Core.Interfaces.Repositories.Groups;
using Managerment.Domain.Entities;
using Managerment.Infrastructure.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Managerment.Infrastructure.Repositories.Groups
{
	public class GroupRepository : RepositoryBase<Group>, IGroupRepository
	{
		public GroupRepository(ApplicationDbContext context) : base(context)
		{
		}
	}
}

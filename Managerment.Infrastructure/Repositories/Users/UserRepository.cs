using Managerment.Core.Interfaces.Repositories.Users;
using Managerment.Domain.Entities;
using Managerment.Infrastructure.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Managerment.Infrastructure.Repositories.Users
{
	public class UserRepository : RepositoryBase<AppUser>, IUserRepository
	{
		public UserRepository(ApplicationDbContext context) : base(context)
		{
		}
	}
}

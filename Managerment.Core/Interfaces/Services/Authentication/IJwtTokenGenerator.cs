using Managerment.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Managerment.Core.Interfaces.Services.Authentication
{
    public interface IJwtTokenGenerator
    {
        Task<string> GenerateToken(AppUser user);
    }
}

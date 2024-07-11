using Managerment.Core.ViewModels.Request.Authentication;
using Managerment.Core.ViewModels.Response.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Managerment.Core.Interfaces.Services.Authentication
{
    public interface IAccountService
    {
        Task<LoginResponse> Login(LoginRequest request);
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Managerment.Core.ViewModels.Response.Group
{
	public class GroupResponse
	{
		public GroupResponse() { }
        public int GroupId { get; set; }
        public string GroupName { get; set; }
		public string Description { get; set; }
        public int TotalUser { get; set; }
    }
}

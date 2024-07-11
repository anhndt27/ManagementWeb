using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Managerment.Core.ViewModels.Request
{
	public class PagedRequest
	{
		public string sortColumnName { get; set; } = "CreatedAt";
		public string? textSearch { get; set; } = default!;
		public int currentPage { get; set; }
		public int pageSize { get; set; }
		public string sortColumnDirection { get; set; } = "ASC";
	}
}

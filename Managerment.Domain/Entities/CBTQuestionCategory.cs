using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Managerment.Domain.Entities
{
	public class CBTQuestionCategory
	{
		public int Id { get; set; }
		public string Title { get; set; }

#nullable enable

		public string? Instruction { get; set; }
		public int? Code { get; set; }
		public int? ParentId { get; set; }
		public string? Path { get; set; }
		public string? TitlePath { get; set; }
		public int Level { get; set; }

#nullable disable
	}
}

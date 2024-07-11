using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Managerment.Domain.Entities
{
	public class HighlightedTextComment
	{
		public int Id { get; set; }
		public string HightlightTextId { get; set; }
		public string Comment { get; set; }
		public int QuestionId { get; set; }
		public Question Question { get; set; }
		public int UserId { get; set; }
		public AppUser User { get; set; }
		public DateTimeOffset CreatedAt { get; set; }
	}
}

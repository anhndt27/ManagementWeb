using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Managerment.Domain.Entities
{
	public class Answer : BaseModel
	{
		public int Id { get; set; }
		public string Text { get; set; }
		public string Token { get; set; }
		public string MatchingText { get; set; }
		public int CorrectOrder { get; set; }
		public decimal CorrectNumber { get; set; }
		public bool IsCorrectAnswer { get; set; }
		public int Mark { get; set; }
		public Question Question { get; set; }
		public int QuestionId { get; set; }
	}
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Managerment.Domain.Entities
{
	public class CreateQuestionTask : BaseModel
	{
		public int Id { get; set; }
		public string Email { get; set; }
		public int SubjectId { get; set; }
		public int QuestionDifficultyLevel { get; set; }
		public int MaxQuestion { get; set; }
		public int QuestionCount { get; set; }
		public string CategoryIds { get; set; }
		public string Categories { get; set; }
		public string Score { get; set; }
		public string TestSessionId { get; set; }
		public string Name { get; set; }
		public bool IsTestRequired { get; set; }
		public IEnumerable<CBTQuestion> Questions { get; set; }
	}
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Managerment.Domain.Entities
{
	public class ProofreaderCBTQuestion : BaseModel
	{
		public int Id { get; set; }
		public DifficultyLevel DifficultyLevel { get; set; }
		public string Instruction { get; set; }
		public string QuestionText { get; set; }
		public AnswerLayout AnswerLayout { get; set; }
		public string Solution { get; set; }
		public string Answer { get; set; }
		public int QuestionId { get; set; }
		public virtual CBTQuestion Question { get; set; }
		public int ProofreaderId { get; set; }
		public virtual AppUser Proofreader { get; set; }
		public int Version { get; set; }
	}
}

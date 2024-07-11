using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Managerment.Domain.Entities
{
	public class CBTQuestion
	{
		public int Id { get; set; }
		public int? ArticleId { get; set; }
		public virtual Article Article { get; set; }
		public DifficultyLevel DifficultyLevel { get; set; }
		public string Instruction { get; set; }
		public int CategoryId { get; set; }
		public virtual CBTQuestionCategory Category { get; set; }
		public string QuestionText { get; set; }
		public CBTQuestionType Type { get; set; }
		public AnswerLayout AnswerLayout { get; set; }
		public string Solution { get; set; }
		public int TaskId { get; set; }
		public virtual CreateQuestionTask Task { get; set; }
		public string Answer { get; set; }

		public int CreatedBy { get; set; }
		public int? FirstProofreaderId { get; set; }
		public virtual AppUser FirstProofreader { get; set; }
		public bool FirstProofreaderApproved { get; set; }
		public int? SecondProofreaderId { get; set; }
		public virtual AppUser SecondProofreader { get; set; }
		public bool SecondProofreaderApproved { get; set; }

		public bool IsPublishedToCBT { get; set; } = false;
		public bool IsPublishedByAuthor { get; set; } = false;
		public virtual IEnumerable<ProofreaderCBTQuestion> ProofreaderQuestions { get; set; }
		public int PublishedCBTQuestionId { get; set; }
		public int CreateQuestionTimeInSeconds { get; set; }
		public int Point { get; set; }
		public int QuestionOrder { get; set; }
	}

	public enum DifficultyLevel
	{
		Level1 = 1,
		Level2 = 2,
		Level3 = 3,
		Level4 = 4
	}

	public enum CBTQuestionType
	{
		SingleChoice,
		MultipleChoice
	}

	public enum AnswerLayout
	{
		Horizontal,
		Vertical
	}
}

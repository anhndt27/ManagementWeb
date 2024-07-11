using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Managerment.Domain.Entities
{
	public class Question : BaseModel
	{
		public int Id { get; set; }
		public string Text { get; set; }
		public string Title { get; set; }
		public QuestionTypeEnum Type { get; set; }
		public int? ParentQuestionId { get; set; }
		public Question ParentQuestion { get; set; }
		public ICollection<Question> SubQuestions { get; set; }
		public DifficultyLevelEnum DifficultyLevel { get; set; }
		public Article Article { get; set; }
		public int? ArticleId { get; set; }

		public Category Category { get; set; }
		public int? CategoryId { get; set; }
		public ICollection<Answer> Answers { get; set; }
		public string ExplainAnswer { get; set; }
		public string Hint { get; set; }
		public string ImageUrl { get; set; }
		public int NegativeMark { get; set; }

		// For the Drag-drop positioning questions
		public bool ReusableOptions { get; set; }
		// only used for Matrix question types
		public IList<QuestionDetail> XCoordinateOptions { get; set; }
		public IList<QuestionDetail> YCoordinateOptions { get; set; }
		//Only used for hotspot image options
		public IList<QuestionDetail> HotSpotOptions { get; set; }
		public DropZoneLayoutEnum DropZoneLayout { get; set; }
		public IList<QuestionDetail> DropZones { get; set; }
		public string QuestionHighlightHtml { get; set; }
		public IEnumerable<HighlightedTextComment> HighlightedTextComments { get; set; }
	}

	public enum DropZoneLayoutEnum
	{
		//default is line-by-line dropzones
		Horizontal,
		Vertical
	}

	public class QuestionDetail
	{
		public int Id { get; set; }
		// String to identify the option e.g. X1, Y1
		public string Identifier { get; set; }
		public int DisplayOrder { get; set; }
		public string Text { get; set; }
		public int? Width { get; set; }
		public int? Height { get; set; }
		public int? XCoordinate { get; set; }
		public int? YCoordinate { get; set; }
	}

	public enum DifficultyLevelEnum
	{
		Easy = 0,
		Intermediate = 1,
		Difficult = 2
	}

	public enum QuestionTypeEnum
	{
		Default,
		ExtendedResponse,
		ShortAnswer,
		NumericAnswer,
		FillInTheBlankDropdown,
		FillInTheBlankText,
		FillInTheBlankDragDrop,
		MatchThePairs,
		SingleChoice,
		MultipleChoice,
		Ordering,
		HotSpot,
		HotText,
		HotSpotDragDrop,
		InlineOrderDragDrop,
		DropZoneDragDrop,
		MatrixCheckbox,
		MatrixRadio,
		Composite
	}
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Managerment.Domain.Entities
{
	public class Article : BaseModel
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string Content { get; set; }
		public ICollection<Question> Questions { get; set; }
	}
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Managerment.Domain.Entities
{
	public class Category : BaseModel
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string Path { get; set; }
		public ICollection<Category> ChildrenCategories { get; set; }
		public Category ParentCategory { get; set; }
		public int? ParentCategoryId { get; set; }
	}
}

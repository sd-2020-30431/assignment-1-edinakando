using WastelessAPI.DataAccess.Models;

namespace WastelessAPI.DataAccess.Repositories
{
    public class GroceriesRepository
    {
        private readonly WastelessDbContext _context;

        public GroceriesRepository(WastelessDbContext context)
        {
            _context = context;
        }

        public void Save(Groceries groceries)
        {
            _context.GroceryLists.Add(groceries);
            _context.SaveChanges();
        }
    }
}

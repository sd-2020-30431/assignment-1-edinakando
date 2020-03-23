using Microsoft.EntityFrameworkCore;
using WastelessAPI.DataAccess.Models;

namespace WastelessAPI.DataAccess
{
    public class WastelessDbContext : DbContext
    {
        public WastelessDbContext(DbContextOptions<WastelessDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
    }
}

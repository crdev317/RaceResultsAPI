using Microsoft.EntityFrameworkCore;

namespace RaceResultsAPI.Models
{
    public class RaceContext : DbContext
    {
        public RaceContext(DbContextOptions<RaceContext> options) : base(options) { }

        public DbSet<RaceResult> RaceResults { get; set; }
    }
}

using Microsoft.EntityFrameworkCore;
using RaceResultsAPI.Models;

namespace RaceResultsAPI.Data
{
    public class RaceContext : DbContext
    {
        public RaceContext(DbContextOptions<RaceContext> options) : base(options) { }

        public DbSet<RaceResult> RaceResults { get; set; }
    }
}

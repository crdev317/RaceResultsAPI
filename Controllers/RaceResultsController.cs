using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RaceResultsAPI.Data;
using RaceResultsAPI.Models;

namespace RaceResultsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RaceResultsController : ControllerBase
    {
        private readonly RaceContext _context;

        public RaceResultsController(RaceContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<RaceResult>>> GetRaceResults() =>
            await _context.RaceResults.ToListAsync();

        [HttpPost]
        public async Task<ActionResult<RaceResult>> PostRaceResult(RaceResult result)
        {
            _context.RaceResults.Add(result);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetRaceResults), new { id = result.Id }, result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutRaceResult(int id, RaceResult result)
        {
            if (id != result.Id) return BadRequest();
            _context.Entry(result).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}

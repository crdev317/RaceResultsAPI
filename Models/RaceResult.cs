using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RaceResultsAPI.Models
{
    public class RaceResult
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string HorseName { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string JockeyName { get; set; }
        [Column(TypeName = "datetime2")]
        public DateTime RaceDate { get; set; }
        [Column(TypeName = "int")]
        public int Position { get; set; }
        [Column(TypeName = "nvarchar(max)")]
        public string Notes { get; set; }
    }
}
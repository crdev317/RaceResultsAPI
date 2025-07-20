namespace RaceResultsAPI.Models
{
    public class RaceResult
    {
        public int Id { get; set; }
        public string HorseName { get; set; }
        public string JockeyName { get; set; }
        public DateTime RaceDate { get; set; }
        public int Position { get; set; }
        public string Notes { get; set; }
    }
}

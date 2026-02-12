export interface League {
    idLeague: string;
    strLeague: string;
    strSport: string;
    strLeagueAlternate: string;
  }
  
  export interface Season {
    strSeason: string;
    strBadge: string;
  }
  
  // API Response Wrappers
  export interface LeagueResponse {
    leagues: League[] | null; // API sometimes returns null
  }
  
  export interface SeasonResponse {
    seasons: Season[] | null;
  }
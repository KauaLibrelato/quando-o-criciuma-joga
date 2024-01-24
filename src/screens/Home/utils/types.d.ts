interface Fixture {
  id: number;
  referee: null | string;
  timezone: string;
  date: string;
  timestamp: number;
  periods: {
    first: null | string;
    second: null | string;
  };
  venue: {
    id: number;
    name: string;
    city: string;
  };
  status: {
    long: string;
    short: string;
    elapsed: null | number;
  };
}

interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

interface Team {
  id: number;
  name: string;
  logo: string;
  winner: null | string;
}

interface Goals {
  home: null | number;
  away: null | number;
}

interface Score {
  halftime: {
    home: null | number;
    away: null | number;
  };
  fulltime: {
    home: null | number;
    away: null | number;
  };
  extratime: {
    home: null | number;
    away: null | number;
  };
  penalty: {
    home: null | number;
    away: null | number;
  };
}

interface MatchData {
  fixture: Fixture;
  league: League;
  teams: {
    home: Team;
    away: Team;
  };
  goals: Goals;
  score: Score;
}

interface MatchesResponse {
  nextMatchesData: [MatchData];
  lastMatchesData: [MatchData];
}

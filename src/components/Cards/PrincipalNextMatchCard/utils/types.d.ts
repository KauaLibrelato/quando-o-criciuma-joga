interface CardProps {
  data: {
    fixture: Fixture;
    league: League;
    teams: {
      home: Team;
      away: Team;
    };
    goals: Goals;
    score: Score;
  };
}

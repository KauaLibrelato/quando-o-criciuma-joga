interface Team {
  id: number;
  name: string;
  logo: string;
}

interface Goals {
  for: number;
  against: number;
}

interface Stats {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}

interface TableData {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  all: Stats;
  home: Stats;
  away: Stats;
  update: string;
}

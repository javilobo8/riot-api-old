export type SummonerDTO = {
  profileIconId: number; // ID of the summoner icon associated with the summoner.
  name: string; // Summoner name.
  puuid: string; // Encrypted PUUID. Exact length of 78 characters.
  summonerLevel: number; // Summoner level associated with the summoner.
  revisionDate: number; // Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: profile icon change, playing the tutorial or advanced tutorial, finishing a game, summoner name change
  id: string; // Encrypted summoner ID. Max length 63 characters.
  accountId: string; // Encrypted account ID. Max length 56 characters.
}

export type MiniSeriesDTO = {
  progress: string;
  losses: number;
  target: number;
  wins: number;
}

export type LeagueEntryDTO = {
  queueType: string;
  summonerName: string;
  hotStreak: boolean;
  miniSeries: MiniSeriesDTO;
  wins: number;
  veteran: boolean;
  losses: number;
  rank: string;
  leagueId: string;
  inactive: boolean;
  freshBlood: boolean;
  tier: string;
  summonerId: string; // Player's summonerId (Encrypted)
  leaguePoints: number;
}

export type ChampionMasteryDTO = {
  chestGranted: boolean; // Is chest granted for this champion or not in current season.
  championLevel: number; //Champion level for specified player and champion combination.
  championPoints: number; //Total number of champion points for this player and champion combination - they are used to determine championLevel.
  championId: number; // Champion ID for this entry.
  championPointsUntilNextLevel: number; // Number of points needed to achieve next level. Zero if player reached maximum champion level for this champion.
  lastPlayTime: number; // Last time this champion was played by this player - in Unix milliseconds time format.
  tokensEarned: number; //The token earned for this champion to levelup.
  championPointsSinceLastLevel: number; // Number of points earned since current level has been achieved.
  summonerId: string; // Summoner ID for this entry. (Encrypted)
}

export enum RegionKey {
  BR = 'BR',
  EUNE = 'EUNE',
  EUW = 'EUW',
  JP = 'JP',
  KR = 'KR',
  LAN = 'LAN',
  LAS = 'LAS',
  NA = 'NA',
  OCE = 'OCE',
  TR = 'TR',
  RU = 'RU',
  PBE = 'PBE',
}
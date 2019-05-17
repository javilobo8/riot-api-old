import axios, { AxiosResponse } from 'axios';
import { Regions, SummonerDTO, LeagueEntryDTO, ChampionMasteryDTO } from './types';

export * from './types';

export default class RiotAPI {
  static SUMMONER_URL: string = '/lol/summoner/v4/summoners/by-name'; // /{summonerName}
  static ENTRIES_URL: string = '/lol/league/v4/entries/by-summoner'; // /{encryptedSummonerId}
  static CHAMPION_MASTERY_URL: string = '/lol/champion-mastery/v4/champion-masteries/by-summoner'; // /{encryptedSummonerId}
  private apiKey: string;
  private limited: boolean;

  constructor(apiKey = process.env.RIOT_API_KEY as string, limited = false) {
    this.apiKey = apiKey;
    this.limited = limited;
  }

  private request(url: string, method: string = 'get'): Promise<AxiosResponse> {
    return axios({ url, method, params: { api_key: this.apiKey } });
  }

  public async getSummonerByName(region: Regions, summonerName: string): Promise<SummonerDTO> {
    const response = await this.request(`${region}/${RiotAPI.SUMMONER_URL}/${encodeURIComponent(summonerName)}`);
    console.log(response.headers);
    return response.data as SummonerDTO;
  }

  public async getEntries(region: Regions, encryptedSummonerId: string): Promise<LeagueEntryDTO[]> {
    const response = await this.request(`${region}/${RiotAPI.ENTRIES_URL}/${encodeURIComponent(encryptedSummonerId)}`);
    console.log(response.headers);
    return response.data as LeagueEntryDTO[];
  }

  public async getChampionMastery(region: Regions, encryptedSummonerId: string): Promise<ChampionMasteryDTO[]> {
    const response = await this.request(`${region}/${RiotAPI.CHAMPION_MASTERY_URL}/${encodeURIComponent(encryptedSummonerId)}`);
    return response.data as ChampionMasteryDTO[];
  }
}

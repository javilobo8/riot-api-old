import axios, { AxiosResponse } from 'axios';
import * as url from 'url';
import { RegionKey, SummonerDTO, LeagueEntryDTO, ChampionMasteryDTO } from './types';
import { getRegion } from './utils';

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

  public async getSummonerByName(region: RegionKey, summonerName: string): Promise<SummonerDTO> {
    const baseUrl = url.resolve(getRegion(region), RiotAPI.SUMMONER_URL);
    const response = await this.request(`${baseUrl}/${encodeURIComponent(summonerName)}`);
    return response.data as SummonerDTO;
  }

  public async getEntries(region: RegionKey, encryptedSummonerId: string): Promise<LeagueEntryDTO[]> {
    const baseUrl = url.resolve(getRegion(region), RiotAPI.ENTRIES_URL);
    const response = await this.request(`${baseUrl}/${encodeURIComponent(encryptedSummonerId)}`);
    return response.data as LeagueEntryDTO[];
  }

  public async getChampionMastery(region: RegionKey, encryptedSummonerId: string): Promise<ChampionMasteryDTO[]> {
    const baseUrl = url.resolve(getRegion(region), RiotAPI.CHAMPION_MASTERY_URL);
    const response = await this.request(`${baseUrl}/${encodeURIComponent(encryptedSummonerId)}`);
    return response.data as ChampionMasteryDTO[];
  }
}

import axios, { AxiosResponse } from 'axios';
import { RegionKey, SummonerDTO, LeagueEntryDTO, ChampionMasteryDTO } from './types';
import { getRegion } from './utils';

export * from './types';

export default class RiotAPI {
  private apiKey: string;

  constructor(apiKey = process.env.RIOT_API_KEY as string) {
    this.apiKey = apiKey;
  }

  private request(url: string, method: string = 'get'): Promise<AxiosResponse> {
    return axios({ url, method, params: { api_key: this.apiKey } });
  }

  public async getSummonerByName(region: RegionKey, summonerName: string): Promise<SummonerDTO> {
    const url = `${getRegion(region)}/lol/summoner/v4/summoners/by-name/${encodeURIComponent(summonerName)}`;
    const response = await this.request(url);

    return response.data as SummonerDTO;
  }

  public async getSummonerByAccount(region: RegionKey, encryptedAccountId: string): Promise<SummonerDTO> {
    const url = `${getRegion(region)}/lol/summoner/v4/summoners/by-account/${encodeURIComponent(encryptedAccountId)}`;
    const response = await this.request(url);

    return response.data as SummonerDTO;
  }

  public async getEntries(region: RegionKey, encryptedSummonerId: string): Promise<LeagueEntryDTO[]> {
    const url = `${getRegion(region)}/lol/league/v4/entries/by-summoner/${encodeURIComponent(encryptedSummonerId)}`;
    const response = await this.request(url);

    return response.data as LeagueEntryDTO[];
  }

  public async getChampionMastery(region: RegionKey, encryptedSummonerId: string): Promise<ChampionMasteryDTO[]> {
    const url = `${getRegion(region)}/lol/champion-mastery/v4/champion-masteries/by-summoner/${encodeURIComponent(encryptedSummonerId)}`
    const response = await this.request(url);

    return response.data as ChampionMasteryDTO[];
  }

  public async getThirdPartyCode(region: RegionKey, encryptedSummonerId: string): Promise<string> {
    const url = `${getRegion(region)}/lol/platform/v4/third-party-code/by-summoner/${encodeURIComponent(encryptedSummonerId)}`;

    const response = await this.request(url);

    return response.data as string;
  }
}

import { RegionKey } from "./types";

const REGIONS = {
  [RegionKey.BR]: 'https://br1.api.riotgames.com',
  [RegionKey.EUNE]: 'https://eun1.api.riotgames.com',
  [RegionKey.EUW]: 'https://euw1.api.riotgames.com',
  [RegionKey.JP]: 'https://jp1.api.riotgames.com',
  [RegionKey.KR]: 'https://kr.api.riotgames.com',
  [RegionKey.LAN]: 'https://la1.api.riotgames.com',
  [RegionKey.LAS]: 'https://la2.api.riotgames.com',
  [RegionKey.NA]: 'https://na1.api.riotgames.com',
  [RegionKey.OCE]: 'https://oc1.api.riotgames.com',
  [RegionKey.TR]: 'https://tr1.api.riotgames.com',
  [RegionKey.RU]: 'https://ru.api.riotgames.com',
  [RegionKey.PBE]: 'https://pbe1.api.riotgames.com',
};

export function delay(miliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, miliseconds));
}

export function getRegion(regionKey: RegionKey) {
  return REGIONS[regionKey];
}
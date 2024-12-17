import { client } from "./client";
import { Reserve, Team } from "./model";

export async function getTeams() {
  return await client.get<Team[]>('/api/teams')
}

export enum ReserveResponse {
  OUTLIER,
  DUPLICATED,
  CREATED,
  ERROR
}

export async function postReserves(data: Reserve) {
  const res = await client.post<Reserve>('/api/reserve', data)
  if (res.status === 202) return ReserveResponse.OUTLIER;
  if (res.status === 200) return ReserveResponse.DUPLICATED;
  if (res.status === 201) return ReserveResponse.CREATED;
  return ReserveResponse.ERROR;
}
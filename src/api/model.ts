export interface User<IdType extends number | string = number> {
  id: IdType;
  name: string;
}

export interface Team {
  members: User[];
  score: null | number;
}

export type Reserve = Omit<Team, "score">

export function getDefaultUser(): User<string> {
  return { name: "", id: "" }
}
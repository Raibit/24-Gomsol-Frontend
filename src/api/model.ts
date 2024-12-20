export interface User<IdType extends number | string = number> {
  id: IdType;
  name: string;
}

export interface Team {
  members: User[];
  score: null | number;
  note: string;
}

export type Reserve = Omit<Team, "score">

export interface ManagingData { 
  password: string, 
  leader: string, 
  score: string 
}

export function getDefaultUser(): User<string> {
  return { name: "", id: "" }
}
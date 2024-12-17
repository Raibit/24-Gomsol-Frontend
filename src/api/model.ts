export interface User {
  id: number;
  name: string;
}

export interface Team {
  members: User[];
  score: null | number;
}

export type Reserve = Omit<Team, "score">

export function getDefaultUser(): User {
  return { name: "", id: 0 }
}
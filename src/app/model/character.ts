export interface Force {
  power: string;
  midichlorian: number;
}

export interface Character {
  id: string;
  name: string;
  side: string;
  force: Force;
  createdTimestamp: number;
  description: string;
}

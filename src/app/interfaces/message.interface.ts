export interface Message {
  text: string;
  isGpt: boolean;
  info?: Info;
}

export interface Info {
  userScore: number;
  errors: string[];
  message: string;
}

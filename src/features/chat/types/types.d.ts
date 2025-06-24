export enum USER_TYPE {
   ai = 'AI',
   user = 'USER'
}

export type TObjectChat = {
  id: number;
  name: string;
  message: string;
  userType: 'AI' | 'USER';
}
export enum USER_TYPE {
   ai = 'AI',
   user = 'USER'
}

export type TObjectChat = {
  id: number | string;
  name: string;
  message: string;
  userType: 'AI' | 'USER';
}

export type TObjectChatAgent = {
  chatId: number | string;
  prompt: string;
  action: 'subcribe'
}
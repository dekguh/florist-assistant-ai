import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import type { TObjectChat } from '../types/types'
import { generateId } from '../utils/utils'

type TState = {
  chatHistory: Array<TObjectChat>;
}

type TActions = {
  addMessageHistory: (value: Partial<Pick<TObjectChat, 'id'>> & Omit<TObjectChat, 'id'>) => void;
}

export const useChatStore = create<TState & TActions>()(
  immer((set) => ({
    chatHistory: [],
    addMessageHistory: (value) => set((state) => {
      state.chatHistory = [
        ...state.chatHistory,
        {
          id: generateId(state.chatHistory),
          ...value
        }
      ]
    })
  }))
)
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import type { TObjectChat } from '../types/types'

type TState = {
  chatHistory: Array<TObjectChat>;
}

type TActions = {
  addMessageHistory: (value: TObjectChat) => void;
}

export const useChatStore = create<TState & TActions>()(
  immer((set) => ({
    chatHistory: [],
    addMessageHistory: (value) => set((state) => {
      state.chatHistory = [
        ...state.chatHistory,
        value
      ]
    })
  }))
)
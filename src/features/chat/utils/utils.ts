import type { TObjectChat } from '../types/types'

export const isAiUser = (value: string) => value === 'AI'

export const generateId = (list: Array<TObjectChat>) : number => {
  let tempId: number = 1

  if (list.length) {
    tempId = list.length + 1
  }

  return tempId
}
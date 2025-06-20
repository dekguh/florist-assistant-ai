import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import type { TSnackbarObject } from './types'

type TState = {
  snackbarObject: TSnackbarObject;
}

type TActions = {
  callSnackbar: (value: TSnackbarObject) => void;
  closeSnackbar: () => void;
}

const initSnackbarObject : TSnackbarObject = {
  message: '',
  variant: 'success',
  timeout: 0,
  open: false
}

export const useSnackbarStore = create<TState & TActions>()(
  immer((set) => ({
    snackbarObject: initSnackbarObject,
    callSnackbar: (value) => set((state) => {
      state.snackbarObject = value
    }),
    closeSnackbar: () => set((state) => {
      state.snackbarObject = initSnackbarObject
    })
  })),
)
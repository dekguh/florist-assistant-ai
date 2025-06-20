import type { HTMLAttributes } from 'react'

export type TVariantOptions = 'success' | 'danger' | 'warning' | 'info'

export interface ISnackbar extends HTMLAttributes<HTMLDivElement> {
  variant: TVariantOptions;
  title?: string;
  message: string;
  onCloseClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export type TSnackbarObject = {
  title?: string;
  message: string;
  variant: TVariantOptions;
  timeout: number;
  open: boolean;
}
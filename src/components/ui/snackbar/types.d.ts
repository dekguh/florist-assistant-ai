import type { HTMLAttributes } from 'react'

export interface ISnackbar extends HTMLAttributes<HTMLDivElement> {
  variant: 'success' | 'danger' | 'warning' | 'info';
  title?: string;
  message: string;
  onCloseClick?: React.MouseEventHandler<HTMLButtonElement>;
}
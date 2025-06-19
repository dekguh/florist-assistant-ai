import type { HTMLAttributes, HTMLProps } from 'react'

export interface ITextfield extends HTMLAttributes<HTMLInputElement> {
  rootClassName?: HTMLProps<HTMLDivElement>['className'];
}
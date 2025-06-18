import type { LucideIcon } from 'lucide-react'
import type { HTMLAttributes } from 'react'

export interface IIconButton extends HTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
}
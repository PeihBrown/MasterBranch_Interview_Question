import { createElement, forwardRef } from 'react'
import { typography, TypographyVariant } from '@/config/design-system'
import { cn } from '@/utils'

type ElementType = keyof JSX.IntrinsicElements

const defaultElements: Record<TypographyVariant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  overline: 'span'
}

interface TypographyProps {
  variant?: TypographyVariant
  component?: ElementType
  className?: string
  children: React.ReactNode
  color?: string
}

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ variant = 'body1', component, className, children, color, ...props }, ref) => {
    const element = component || defaultElements[variant]
    const styles = typography[variant]

    return createElement(
      element,
      {
        ref,
        className: cn(
          styles.family,
          styles.size,
          styles.weight,
          color || styles.color,
          className
        ),
        ...props
      },
      children
    )
  }
)

Typography.displayName = 'Typography'

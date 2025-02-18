import { createElement } from 'react'
import { cn } from '@/utils'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text'
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg'

type ButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
  onClick?: () => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ 
  variant = 'primary',
  size = 'md',
  className,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary: 'bg-primary-blue-dark text-white hover:bg-opacity-90',
    secondary: 'bg-primary-orange-light text-primary-blue-dark hover:bg-opacity-90',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    text: 'text-primary-blue-light hover:underline'
  }

  const sizeStyles = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  return createElement(
    'button',
    {
      className: cn(
        'font-medium transition-all duration-200',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variant !== 'text' && 'rounded-lg',
        variantStyles[variant],
        sizeStyles[size],
        className
      ),
      onClick,
      ...props
    },
    children
  )
} 
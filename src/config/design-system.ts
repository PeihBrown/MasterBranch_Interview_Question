export const typography = {
  h1: {
    size: 'text-2xl md:text-3xl',
    weight: 'font-bold',
    family: 'font-sans',
    color: 'text-primary-blue-dark'
  },
  h2: {
    size: 'text-xl md:text-2xl',
    weight: 'font-bold',
    family: 'font-sans',
    color: 'text-primary-blue-dark'
  },
  h3: {
    size: 'text-lg md:text-xl',
    weight: 'font-semibold',
    family: 'font-sans',
    color: 'text-primary-blue-dark'
  },
  subtitle1: {
    size: 'text-base',
    weight: 'font-medium',
    family: 'font-sans',
    color: 'text-gray-700'
  },
  subtitle2: {
    size: 'text-sm',
    weight: 'font-medium',
    family: 'font-sans',
    color: 'text-gray-600'
  },
  body1: {
    size: 'text-base',
    weight: 'font-normal',
    family: 'font-sans',
    color: 'text-gray-700'
  },
  body2: {
    size: 'text-sm',
    weight: 'font-normal',
    family: 'font-sans',
    color: 'text-gray-600'
  },
  caption: {
    size: 'text-xs',
    weight: 'font-normal',
    family: 'font-sans',
    color: 'text-gray-500'
  },
  overline: {
    size: 'text-xs',
    weight: 'font-medium',
    family: 'font-sans',
    color: 'text-gray-500',
    transform: 'uppercase tracking-wider'
  }
} as const

export type TypographyVariant = keyof typeof typography

export const colors = {
  primary: {
    blue: {
      light: '#5684AE',
      dark: '#0F4C81',
    },
    orange: {
      light: '#FFE4C8', 
      dark: '#F9BE81',
    }
  },
  background: {
    calendar: '#E4F6ED',
    white: '#FFFFFF',
  },
  text: {
    primary: '#404040',
    secondary: '#1F2937',
    light: '#F3F4F6',
  },
  border: {
    light: '#E5E7EB',
    default: '#D1D5DB',
  },
  status: {
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6',
  }
} as const

export const spacing = {
  '0': '0',
  '1': '0.25rem',    // 4px
  '2': '0.5rem',     // 8px
  '3': '0.75rem',    // 12px
  '4': '1rem',       // 16px
  '5': '1.25rem',    // 20px
  '6': '1.5rem',     // 24px
  '8': '2rem',       // 32px
  '10': '2.5rem',    // 40px
  '12': '3rem',      // 48px
  '16': '4rem',      // 64px
} as const

export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

export const borderRadius = {
  none: '0',
  sm: '0.125rem',    // 2px
  default: '0.25rem', // 4px
  md: '0.375rem',     // 6px
  lg: '0.5rem',       // 8px
  xl: '0.75rem',      // 12px
  '2xl': '1rem',      // 16px
  full: '9999px',
} as const

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  default: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
} as const

export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  toast: 1600,
  tooltip: 1700,
} as const
  
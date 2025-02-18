export const BREAKPOINTS = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
} as const

export const isMobile = () => window.innerWidth < BREAKPOINTS.tablet 
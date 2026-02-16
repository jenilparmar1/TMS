import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

const containerSizes = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-full',
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'xl', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'w-full mx-auto px-4 sm:px-6 lg:px-8',
          containerSizes[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Container.displayName = 'Container'

// Section component for page sections
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'section' | 'div' | 'article'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  background?: 'white' | 'light' | 'primary' | 'accent' | 'dark'
}

const paddingVariants = {
  none: '',
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-16',
  lg: 'py-16 md:py-24',
  xl: 'py-24 md:py-32',
}

const backgroundVariants = {
  white: 'bg-white',
  light: 'bg-neutral-50',
  primary: 'bg-primary-500 text-white',
  accent: 'bg-accent-500 text-white',
  dark: 'bg-neutral-900 text-white',
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ 
    className, 
    as: Component = 'section', 
    padding = 'lg', 
    background = 'white',
    children, 
    ...props 
  }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          paddingVariants[padding],
          backgroundVariants[background],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Section.displayName = 'Section'

// Grid component for layouts
interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6
  gap?: 'sm' | 'md' | 'lg'
}

const colsVariants = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  5: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
  6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
}

const gapVariants = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 3, gap = 'md', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'grid',
          colsVariants[cols],
          gapVariants[gap],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Grid.displayName = 'Grid'

export default Container

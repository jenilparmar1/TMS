import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Flame } from 'lucide-react'
import type { SpiceLevel } from '@/types'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'accent' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md'
}

const badgeVariants = {
  default: 'bg-neutral-100 text-neutral-700',
  primary: 'bg-primary-100 text-primary-700',
  accent: 'bg-accent-100 text-accent-700',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-yellow-100 text-yellow-700',
  error: 'bg-red-100 text-red-700',
}

const badgeSizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'sm', children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center font-medium rounded-full',
          badgeVariants[variant],
          badgeSizes[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

// Spice Level Indicator
interface SpiceIndicatorProps {
  level: SpiceLevel
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const spiceLabels: Record<SpiceLevel, string> = {
  1: 'Mild',
  2: 'Medium',
  3: 'Spicy',
  4: 'Hot',
  5: 'Extreme',
}

const spiceColors: Record<SpiceLevel, string> = {
  1: 'text-yellow-500',
  2: 'text-orange-400',
  3: 'text-orange-500',
  4: 'text-red-500',
  5: 'text-red-600',
}

const spiceSizes = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
}

export function SpiceIndicator({ level, showLabel = false, size = 'md' }: SpiceIndicatorProps) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, index) => (
          <Flame
            key={index}
            className={cn(
              spiceSizes[size],
              index < level ? spiceColors[level] : 'text-neutral-200'
            )}
            fill={index < level ? 'currentColor' : 'none'}
          />
        ))}
      </div>
      {showLabel && (
        <span className={cn('text-sm font-medium', spiceColors[level])}>
          {spiceLabels[level]}
        </span>
      )}
    </div>
  )
}

// Popular & New Tags
export function PopularTag({ className }: { className?: string }) {
  return (
    <Badge variant="warning" className={cn('gap-1', className)}>
      <span>🔥</span>
      Popular
    </Badge>
  )
}

export function NewTag({ className }: { className?: string }) {
  return (
    <Badge variant="success" className={cn('gap-1', className)}>
      <span>✨</span>
      New
    </Badge>
  )
}

export function VegTag({ className }: { className?: string }) {
  return (
    <span 
      className={cn(
        'inline-flex items-center justify-center w-5 h-5 border-2 border-green-600 rounded-sm',
        className
      )}
    >
      <span className="w-2 h-2 bg-green-600 rounded-full" />
    </span>
  )
}

export default Badge

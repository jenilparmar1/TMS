'use client'

import { motion, Variants } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { MascotExpression, MascotProps } from '@/types'

const sizeClasses = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-32 h-32',
  xl: 'w-48 h-48',
}

const floatAnimation: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

const waveAnimation: Variants = {
  animate: {
    rotate: [0, 14, -8, 14, -4, 10, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

/**
 * TMS Brand Mascot - A stylized Misal bowl character with Maharashtrian cultural elements
 * Based on the brand logo featuring a turban, glasses, and mustache
 */
export function Mascot({ 
  expression = 'happy', 
  size = 'md', 
  animate = true,
  className 
}: MascotProps) {
  return (
    <motion.div
      className={cn('relative', sizeClasses[size], className)}
      variants={animate ? floatAnimation : undefined}
      animate={animate ? 'animate' : undefined}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Turban (Pheta) - Blue with stars */}
        <g className="turban">
          {/* Main turban shape */}
          <path
            d="M40 80 Q60 30 100 35 Q140 30 160 80 Q165 60 155 45 Q130 20 100 25 Q70 20 45 45 Q35 60 40 80Z"
            fill="#0072CE"
          />
          {/* Turban layers */}
          <path
            d="M45 75 Q65 40 100 45 Q135 40 155 75"
            stroke="#FFFFFF"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M50 68 Q68 42 100 47 Q132 42 150 68"
            stroke="#FFFFFF"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M55 62 Q72 44 100 48 Q128 44 145 62"
            stroke="#FFFFFF"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />
          {/* Stars on turban */}
          {[
            { x: 60, y: 55 },
            { x: 80, y: 45 },
            { x: 100, y: 40 },
            { x: 120, y: 45 },
            { x: 140, y: 55 },
            { x: 70, y: 65 },
            { x: 90, y: 55 },
            { x: 110, y: 55 },
            { x: 130, y: 65 },
          ].map((star, i) => (
            <circle
              key={i}
              cx={star.x}
              cy={star.y}
              r="2"
              fill="#FFFFFF"
              opacity="0.8"
            />
          ))}
          {/* Turban jewel (bindi position) */}
          <circle cx="100" cy="75" r="6" fill="#E4002B" />
        </g>

        {/* Face/Bowl base */}
        <ellipse
          cx="100"
          cy="120"
          rx="55"
          ry="45"
          fill="#FFF5E6"
          stroke="#E8D5C4"
          strokeWidth="2"
        />

        {/* Glasses */}
        <g className="glasses">
          {/* Left lens */}
          <circle
            cx="75"
            cy="110"
            r="18"
            fill="none"
            stroke="#E4002B"
            strokeWidth="4"
          />
          {/* Right lens */}
          <circle
            cx="125"
            cy="110"
            r="18"
            fill="none"
            stroke="#E4002B"
            strokeWidth="4"
          />
          {/* Bridge */}
          <path
            d="M93 110 Q100 105 107 110"
            stroke="#E4002B"
            strokeWidth="4"
            fill="none"
          />
          {/* Left temple */}
          <line
            x1="57"
            y1="110"
            x2="45"
            y2="105"
            stroke="#E4002B"
            strokeWidth="3"
          />
          {/* Right temple */}
          <line
            x1="143"
            y1="110"
            x2="155"
            y2="105"
            stroke="#E4002B"
            strokeWidth="3"
          />
          
          {/* Eyes based on expression */}
          <MascotEyes expression={expression} />
        </g>

        {/* Mustache */}
        <g className="mustache">
          <path
            d="M70 140 Q85 145 100 140 Q115 145 130 140 Q125 150 100 148 Q75 150 70 140Z"
            fill="#E4002B"
          />
          {/* Curly ends */}
          <path
            d="M70 140 Q60 138 55 145 Q58 152 65 148"
            fill="#E4002B"
          />
          <path
            d="M130 140 Q140 138 145 145 Q142 152 135 148"
            fill="#E4002B"
          />
        </g>

        {/* Expression-based mouth */}
        <MascotMouth expression={expression} />

        {/* Waving hand for 'waving' expression */}
        {expression === 'waving' && (
          <motion.g
            variants={waveAnimation}
            animate="animate"
            style={{ transformOrigin: '160px 130px' }}
          >
            <ellipse
              cx="175"
              cy="115"
              rx="12"
              ry="15"
              fill="#FFF5E6"
              stroke="#E8D5C4"
              strokeWidth="2"
            />
            {/* Fingers */}
            <ellipse cx="170" cy="100" rx="4" ry="8" fill="#FFF5E6" stroke="#E8D5C4" />
            <ellipse cx="178" cy="98" rx="4" ry="9" fill="#FFF5E6" stroke="#E8D5C4" />
            <ellipse cx="186" cy="100" rx="4" ry="8" fill="#FFF5E6" stroke="#E8D5C4" />
          </motion.g>
        )}

        {/* Thought bubble for 'thinking' expression */}
        {expression === 'thinking' && (
          <g className="thought-bubble">
            <circle cx="165" cy="70" r="5" fill="#E5E5E5" />
            <circle cx="175" cy="55" r="8" fill="#E5E5E5" />
            <ellipse cx="190" cy="35" rx="15" ry="12" fill="#E5E5E5" />
            <text x="182" y="40" fontSize="12" fill="#666">🌶️</text>
          </g>
        )}

        {/* Z's for sleeping expression */}
        {expression === 'sleeping' && (
          <g className="zzz">
            <motion.text
              x="150"
              y="80"
              fontSize="16"
              fill="#666"
              animate={{ opacity: [0, 1, 0], y: [80, 70, 60] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Z
            </motion.text>
            <motion.text
              x="165"
              y="65"
              fontSize="20"
              fill="#666"
              animate={{ opacity: [0, 1, 0], y: [65, 55, 45] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            >
              Z
            </motion.text>
          </g>
        )}
      </svg>
    </motion.div>
  )
}

// Eye component based on expression
function MascotEyes({ expression }: { expression: MascotExpression }) {
  switch (expression) {
    case 'happy':
    case 'waving':
      return (
        <>
          {/* Happy curved eyes */}
          <path d="M67 108 Q75 102 83 108" stroke="#333" strokeWidth="3" fill="none" />
          <path d="M117 108 Q125 102 133 108" stroke="#333" strokeWidth="3" fill="none" />
        </>
      )
    case 'excited':
      return (
        <>
          {/* Wide open eyes with sparkle */}
          <circle cx="75" cy="108" r="6" fill="#333" />
          <circle cx="125" cy="108" r="6" fill="#333" />
          <circle cx="77" cy="106" r="2" fill="#FFF" />
          <circle cx="127" cy="106" r="2" fill="#FFF" />
        </>
      )
    case 'thinking':
      return (
        <>
          {/* Looking up eyes */}
          <circle cx="75" cy="106" r="5" fill="#333" />
          <circle cx="125" cy="106" r="5" fill="#333" />
        </>
      )
    case 'sleeping':
      return (
        <>
          {/* Closed eyes */}
          <line x1="67" y1="110" x2="83" y2="110" stroke="#333" strokeWidth="3" />
          <line x1="117" y1="110" x2="133" y2="110" stroke="#333" strokeWidth="3" />
        </>
      )
    case 'eating':
      return (
        <>
          {/* Squinting happy eyes */}
          <path d="M65 110 Q75 104 85 110" stroke="#333" strokeWidth="3" fill="none" />
          <path d="M115 110 Q125 104 135 110" stroke="#333" strokeWidth="3" fill="none" />
        </>
      )
    default:
      return (
        <>
          <circle cx="75" cy="108" r="5" fill="#333" />
          <circle cx="125" cy="108" r="5" fill="#333" />
        </>
      )
  }
}

// Mouth component based on expression
function MascotMouth({ expression }: { expression: MascotExpression }) {
  switch (expression) {
    case 'happy':
    case 'waving':
      return null // Mustache covers mouth area
    case 'excited':
      return (
        <ellipse cx="100" cy="158" rx="8" ry="5" fill="#E4002B" opacity="0.6" />
      )
    case 'eating':
      return (
        <circle cx="100" cy="158" r="6" fill="#E4002B" opacity="0.8" />
      )
    default:
      return null
  }
}

// Export a simple mascot icon for small uses
export function MascotIcon({ className }: { className?: string }) {
  return (
    <div className={cn('w-8 h-8', className)}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Simplified turban */}
        <path
          d="M20 45 Q30 20 50 22 Q70 20 80 45 Q82 35 75 28 Q60 15 50 17 Q40 15 25 28 Q18 35 20 45Z"
          fill="#0072CE"
        />
        {/* Jewel */}
        <circle cx="50" cy="42" r="3" fill="#E4002B" />
        {/* Face */}
        <ellipse cx="50" cy="62" rx="28" ry="23" fill="#FFF5E6" />
        {/* Glasses */}
        <circle cx="40" cy="58" r="9" fill="none" stroke="#E4002B" strokeWidth="2" />
        <circle cx="60" cy="58" r="9" fill="none" stroke="#E4002B" strokeWidth="2" />
        <line x1="49" y1="58" x2="51" y2="58" stroke="#E4002B" strokeWidth="2" />
        {/* Eyes */}
        <path d="M35 57 Q40 54 45 57" stroke="#333" strokeWidth="1.5" fill="none" />
        <path d="M55 57 Q60 54 65 57" stroke="#333" strokeWidth="1.5" fill="none" />
        {/* Mustache */}
        <path
          d="M35 72 Q42 75 50 72 Q58 75 65 72 Q62 78 50 77 Q38 78 35 72Z"
          fill="#E4002B"
        />
      </svg>
    </div>
  )
}

export default Mascot

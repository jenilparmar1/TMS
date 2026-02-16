'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { ingredients } from '@/data/ingredients'
import { cn } from '@/lib/utils'

export function IngredientsSection() {
  const [activeIngredient, setActiveIngredient] = useState(ingredients[0])

  return (
    <Section background="white" id="ingredients">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent-100 text-accent-600 rounded-full text-sm font-medium mb-4">
            What Makes It Special
          </span>
          <h2 className="section-title text-neutral-900 mb-4">
            The <span className="text-primary-500">Perfect</span> Bowl
          </h2>
          <p className="section-subtitle mx-auto">
            Every ingredient plays a crucial role in creating the symphony of flavors
            that makes Misal truly extraordinary.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Ingredient Grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {ingredients.map((ingredient, index) => (
              <motion.button
                key={ingredient.id}
                onClick={() => setActiveIngredient(ingredient)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  'relative p-4 md:p-6 rounded-2xl text-center transition-all duration-300',
                  activeIngredient.id === ingredient.id
                    ? 'bg-white shadow-card-hover ring-2 ring-primary-500'
                    : 'bg-neutral-50 hover:bg-white hover:shadow-card'
                )}
              >
                {/* Color indicator */}
                <div
                  className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full mb-3 flex items-center justify-center text-2xl md:text-3xl"
                  style={{ backgroundColor: `${ingredient.color}20` }}
                >
                  {getIngredientEmoji(ingredient.id)}
                </div>
                <h4 className="font-semibold text-neutral-900 text-sm md:text-base">
                  {ingredient.name}
                </h4>
                <p className="text-xs text-neutral-500 mt-1">
                  {ingredient.nameMarathi}
                </p>
              </motion.button>
            ))}
          </motion.div>

          {/* Active Ingredient Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIngredient.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-neutral-50 to-white rounded-3xl p-6 md:p-10 shadow-card"
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-3xl md:text-4xl flex-shrink-0"
                  style={{ backgroundColor: `${activeIngredient.color}20` }}
                >
                  {getIngredientEmoji(activeIngredient.id)}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
                    {activeIngredient.name}
                  </h3>
                  <p
                    className="text-lg font-medium"
                    style={{ color: activeIngredient.color }}
                  >
                    {activeIngredient.nameMarathi}
                  </p>
                </div>
              </div>

              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                {activeIngredient.description}
              </p>

              {activeIngredient.funFact && (
                <div className="bg-primary-50 rounded-xl p-4 md:p-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💡</span>
                    <div>
                      <h4 className="font-semibold text-primary-700 mb-1">
                        Fun Fact
                      </h4>
                      <p className="text-primary-600 text-sm md:text-base">
                        {activeIngredient.funFact}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  )
}

function getIngredientEmoji(id: string): string {
  const emojiMap: Record<string, string> = {
    sprouts: '🌱',
    tarri: '🍛',
    farsan: '🥜',
    pav: '🍞',
    onion: '🧅',
    lemon: '🍋',
  }
  return emojiMap[id] || '🥣'
}

export default IngredientsSection

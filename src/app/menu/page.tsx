'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Container, Section, Card, SpiceIndicator, PopularTag, NewTag, VegTag, Button } from '@/components/ui'
import { menuItems, menuCategories, getMenuByCategory } from '@/data/menu'
import { formatPrice, cn } from '@/lib/utils'
import type { MenuItem, MenuCategory } from '@/types'

export default function MenuPage() {
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'all'>('all')
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  // Check URL params for category filter
  useEffect(() => {
    const category = searchParams.get('category') as MenuCategory
    if (category && menuCategories.find(c => c.id === category)) {
      setActiveCategory(category)
    }
  }, [searchParams])

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : getMenuByCategory(activeCategory)

  return (
    <>
      {/* Hero Section */}
      <Section background="light" padding="lg">
        <Container>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-6"
            >
              <div className="w-32 h-32" aria-hidden />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="section-title text-neutral-900 mb-4"
            >
              Our <span className="text-primary-500">Menu</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="section-subtitle mx-auto"
            >
              From traditional classics to innovative fusions, discover the perfect Misal for your palate.
            </motion.p>
          </div>
        </Container>
      </Section>

      {/* Category Navigation */}
      <Section background="white" padding="sm">
        <Container>
          <div className="flex flex-wrap justify-center gap-3">
            <CategoryPill
              active={activeCategory === 'all'}
              onClick={() => setActiveCategory('all')}
            >
              All Items
            </CategoryPill>
            {menuCategories.map((category) => (
              <CategoryPill
                key={category.id}
                active={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </CategoryPill>
            ))}
          </div>
        </Container>
      </Section>

      {/* Menu Grid */}
      <Section background="white" padding="lg">
        <Container>
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <MenuItemCard item={item} onClick={() => setSelectedItem(item)} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto" aria-hidden />
              <p className="mt-4 text-neutral-500">No items found in this category.</p>
            </div>
          )}
        </Container>
      </Section>

      {/* Item Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <ItemDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </>
  )
}

// Category Pill Component
function CategoryPill({ 
  children, 
  active, 
  onClick 
}: { 
  children: React.ReactNode
  active: boolean
  onClick: () => void 
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-5 py-2.5 rounded-full font-medium transition-all duration-300',
        active
          ? 'bg-primary-500 text-white shadow-brand'
          : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
      )}
    >
      {children}
    </button>
  )
}

// Menu Item Card Component
function MenuItemCard({ item, onClick }: { item: MenuItem; onClick: () => void }) {
  return (
    <Card 
      hoverable 
      clickable 
      className="h-full flex flex-col cursor-pointer"
      onClick={onClick}
    >
      {/* Image Placeholder */}
      <div className="relative aspect-food bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl mb-4 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-5xl">
          🥣
        </div>
        
        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {item.isVegetarian && <VegTag />}
        </div>
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {item.isPopular && <PopularTag />}
          {item.isNew && <NewTag />}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-bold text-lg text-neutral-900">
              {item.name}
            </h3>
            {item.nameHindi && (
              <p className="text-sm text-neutral-500">{item.nameHindi}</p>
            )}
          </div>
          <SpiceIndicator level={item.spiceLevel} size="sm" />
        </div>

        <p className="text-neutral-600 text-sm mb-4 flex-1 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-100">
          <span className="text-xl font-bold text-primary-500">
            {formatPrice(item.price)}
          </span>
          <Button size="sm" variant="ghost">
            View Details
          </Button>
        </div>
      </div>
    </Card>
  )
}

// Item Detail Modal
function ItemDetailModal({ item, onClose }: { item: MenuItem; onClose: () => void }) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-50"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl z-50 p-6 md:p-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-600 transition-colors"
        >
          ✕
        </button>

        {/* Image */}
        <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl mb-6 flex items-center justify-center text-8xl">
          🥣
        </div>

        {/* Tags */}
        <div className="flex items-center gap-2 mb-4">
          {item.isVegetarian && <VegTag />}
          {item.isPopular && <PopularTag />}
          {item.isNew && <NewTag />}
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-1">
          {item.name}
        </h2>
        {item.nameHindi && (
          <p className="text-lg text-primary-500 mb-4">{item.nameHindi}</p>
        )}

        {/* Spice Level */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm text-neutral-500">Spice Level:</span>
          <SpiceIndicator level={item.spiceLevel} showLabel />
        </div>

        {/* Description */}
        <p className="text-neutral-600 mb-6">{item.description}</p>

        {/* Ingredients */}
        {item.ingredients && item.ingredients.length > 0 && (
          <div className="mb-6">
            <h4 className="font-semibold text-neutral-900 mb-2">Ingredients</h4>
            <div className="flex flex-wrap gap-2">
              {item.ingredients.map((ingredient) => (
                <span
                  key={ingredient}
                  className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between pt-6 border-t">
          <span className="text-3xl font-bold text-primary-500">
            {formatPrice(item.price)}
          </span>
          <Button size="lg">
            Coming Soon
          </Button>
        </div>
      </motion.div>
    </>
  )
}

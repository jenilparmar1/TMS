'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container, Section, Card, Button, SpiceIndicator, PopularTag, NewTag, VegTag } from '@/components/ui'
import { getPopularItems } from '@/data/menu'
import { formatPrice } from '@/lib/utils'

export function FeaturedMenu() {
  const popularItems = getPopularItems().slice(0, 4)

  return (
    <Section background="white" id="menu-preview">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
              Our Menu
            </span>
            <h2 className="section-title text-neutral-900 mb-4">
              Fan <span className="text-primary-500">Favorites</span>
            </h2>
            <p className="section-subtitle">
              These crowd-pleasers have won hearts across Maharashtra.
              Start your Misal journey here!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="w-16 h-16" aria-hidden />
            <Link href="/menu">
              <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
                View Full Menu
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hoverable className="h-full flex flex-col">
                {/* Image Placeholder */}
                <div className="relative aspect-food bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl mb-4 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
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
                    <Link href={`/menu?item=${item.id}`}>
                      <Button size="sm" variant="ghost">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/menu">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Explore Complete Menu
            </Button>
          </Link>
        </motion.div>
      </Container>
    </Section>
  )
}

export default FeaturedMenu

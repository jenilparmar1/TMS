'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Navigation, Car, Wifi, Utensils, Package, Truck, Snowflake } from 'lucide-react'
import { Container, Section, Card, Button } from '@/components/ui'
import { stores, getCities } from '@/data/locations'
import type { Store, StoreFeature } from '@/types'
import { cn } from '@/lib/utils'

const featureIcons: Record<StoreFeature, React.ComponentType<{ className?: string }>> = {
  'dine-in': Utensils,
  'takeaway': Package,
  'delivery': Truck,
  'parking': Car,
  'wifi': Wifi,
  'ac': Snowflake,
}

const featureLabels: Record<StoreFeature, string> = {
  'dine-in': 'Dine In',
  'takeaway': 'Takeaway',
  'delivery': 'Delivery',
  'parking': 'Parking',
  'wifi': 'Free WiFi',
  'ac': 'AC',
}

export default function LocationsPage() {
  const cities = getCities()
  const [selectedCity, setSelectedCity] = useState<string | 'all'>('all')

  const filteredStores = selectedCity === 'all'
    ? stores
    : stores.filter(store => store.city === selectedCity)

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
              Find a <span className="text-primary-500">Store</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="section-subtitle mx-auto"
            >
              Visit us at any of our {stores.length} locations across Maharashtra. 
              Your perfect bowl of Misal is just around the corner!
            </motion.p>
          </div>
        </Container>
      </Section>

      {/* City Filter */}
      <Section background="white" padding="sm">
        <Container>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCity('all')}
              className={cn(
                'px-5 py-2.5 rounded-full font-medium transition-all duration-300',
                selectedCity === 'all'
                  ? 'bg-primary-500 text-white shadow-brand'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              )}
            >
              All Cities ({stores.length})
            </button>
            {cities.map((city) => {
              const count = stores.filter(s => s.city === city).length
              return (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={cn(
                    'px-5 py-2.5 rounded-full font-medium transition-all duration-300',
                    selectedCity === city
                      ? 'bg-primary-500 text-white shadow-brand'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  )}
                >
                  {city} ({count})
                </button>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Map Placeholder */}
      <Section background="white" padding="sm">
        <Container>
          <div className="bg-gradient-to-br from-accent-100 to-primary-100 rounded-2xl h-64 md:h-80 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary-500 mx-auto mb-3" />
              <p className="text-neutral-600 font-medium">Interactive Map Coming Soon</p>
              <p className="text-sm text-neutral-500">Google Maps integration in progress</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Store Cards */}
      <Section background="light" padding="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStores.map((store, index) => (
              <motion.div
                key={store.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <StoreCard store={store} />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="white" padding="lg">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Can&apos;t Find a Store Near You?
            </h2>
            <p className="text-neutral-600 mb-6">
              We&apos;re expanding rapidly! Let us know where you&apos;d like to see TMS next.
            </p>
            <Button size="lg" onClick={() => window.location.href = '/contact'}>
              Request a Location
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}

function StoreCard({ store }: { store: Store }) {
  return (
    <Card className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-bold text-xl text-neutral-900">{store.name}</h3>
          <p className="text-primary-500 font-medium">{store.city}, {store.state}</p>
        </div>
        {store.isOpen && (
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            Open
          </span>
        )}
      </div>

      {/* Address */}
      <div className="flex items-start gap-3 mb-3">
        <MapPin className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-neutral-600">{store.address}</p>
          {store.landmark && (
            <p className="text-sm text-neutral-500">{store.landmark}</p>
          )}
        </div>
      </div>

      {/* Timings */}
      <div className="flex items-start gap-3 mb-3">
        <Clock className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" />
        <div className="text-sm">
          <p className="text-neutral-600">
            <span className="text-neutral-500">Weekdays:</span> {store.timings.weekdays}
          </p>
          <p className="text-neutral-600">
            <span className="text-neutral-500">Weekends:</span> {store.timings.weekends}
          </p>
        </div>
      </div>

      {/* Features */}
      {store.features && store.features.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {store.features.map((feature) => {
            const Icon = featureIcons[feature]
            return (
              <span
                key={feature}
                className="inline-flex items-center gap-1 px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full"
              >
                <Icon className="w-3 h-3" />
                {featureLabels[feature]}
              </span>
            )
          })}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3 mt-auto pt-4 border-t border-neutral-100">
        <a
          href={`tel:${store.phone}`}
          className="flex-1"
        >
          <Button variant="outline" fullWidth leftIcon={<Phone className="w-4 h-4" />}>
            Call
          </Button>
        </a>
        <a
          href={`https://maps.google.com/?q=${store.address}, ${store.city}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button fullWidth leftIcon={<Navigation className="w-4 h-4" />}>
            Directions
          </Button>
        </a>
      </div>
    </Card>
  )
}

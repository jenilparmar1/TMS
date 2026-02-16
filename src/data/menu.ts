import { MenuItem, MenuCategoryInfo } from '@/types'

export const menuCategories: MenuCategoryInfo[] = [
  {
    id: 'classic-misal',
    name: 'Classic Misal',
    description: 'Traditional Maharashtrian Misal varieties',
  },
  {
    id: 'fusion-specials',
    name: 'Fusion Specials',
    description: 'Modern twists on the classic Misal',
  },
  {
    id: 'beverages',
    name: 'Beverages',
    description: 'Refreshing drinks to complement your meal',
  },
  {
    id: 'sides',
    name: 'Sides & Add-ons',
    description: 'Perfect accompaniments',
  },
  {
    id: 'combos',
    name: 'Value Combos',
    description: 'Complete meal deals',
  },
]

export const menuItems: MenuItem[] = [
  // Classic Misal
  {
    id: 'kolhapuri-misal',
    name: 'Kolhapuri Misal',
    nameHindi: 'कोल्हापुरी मिसळ',
    description: 'The OG spicy Misal from Kolhapur with fiery red tarri, crispy farsan, and fresh sprouts. Not for the faint-hearted!',
    price: 120,
    category: 'classic-misal',
    spiceLevel: 5,
    isVegetarian: true,
    isPopular: true,
    ingredients: ['Matki Sprouts', 'Spicy Tarri', 'Farsan', 'Onion', 'Lemon', 'Coriander'],
  },
  {
    id: 'puneri-misal',
    name: 'Puneri Misal',
    nameHindi: 'पुणेरी मिसळ',
    description: 'The sophisticated Pune-style Misal with a balanced tarri, poha topping, and the perfect blend of spices.',
    price: 110,
    category: 'classic-misal',
    spiceLevel: 3,
    isVegetarian: true,
    isPopular: true,
    ingredients: ['Matki Sprouts', 'Medium Tarri', 'Poha', 'Farsan', 'Onion', 'Sev'],
  },
  {
    id: 'nashik-misal',
    name: 'Nashik Misal',
    nameHindi: 'नाशिक मिसळ',
    description: 'A unique blend from Nashik with a tangy twist, perfect balance of heat and flavor.',
    price: 115,
    category: 'classic-misal',
    spiceLevel: 4,
    isVegetarian: true,
    ingredients: ['Matki Sprouts', 'Tangy Tarri', 'Farsan', 'Onion', 'Kokum'],
  },
  {
    id: 'mumbai-misal',
    name: 'Mumbai Street Misal',
    nameHindi: 'मुंबई स्ट्रीट मिसळ',
    description: 'The bustling streets of Mumbai in a bowl. Quick, flavorful, and absolutely addictive.',
    price: 100,
    category: 'classic-misal',
    spiceLevel: 3,
    isVegetarian: true,
    isNew: true,
    ingredients: ['Matki Sprouts', 'Classic Tarri', 'Farsan', 'Onion', 'Green Chutney'],
  },
  
  // Fusion Specials
  {
    id: 'cheese-misal',
    name: 'Cheese Burst Misal',
    nameHindi: 'चीज़ बर्स्ट मिसळ',
    description: 'Classic Misal meets gooey cheese! A fusion that will blow your mind.',
    price: 150,
    category: 'fusion-specials',
    spiceLevel: 3,
    isVegetarian: true,
    isPopular: true,
    isNew: true,
    ingredients: ['Matki Sprouts', 'Tarri', 'Mozzarella', 'Cheddar', 'Farsan'],
  },
  {
    id: 'schezwan-misal',
    name: 'Schezwan Misal',
    nameHindi: 'शेजवान मिसळ',
    description: 'Indo-Chinese fusion with spicy Schezwan sauce adding an extra kick to the classic.',
    price: 140,
    category: 'fusion-specials',
    spiceLevel: 5,
    isVegetarian: true,
    ingredients: ['Matki Sprouts', 'Schezwan Tarri', 'Crispy Noodles', 'Farsan'],
  },
  {
    id: 'butter-misal',
    name: 'Butter Misal',
    nameHindi: 'बटर मिसळ',
    description: 'Rich, creamy, and indulgent. The butter chicken of Misals!',
    price: 145,
    category: 'fusion-specials',
    spiceLevel: 2,
    isVegetarian: true,
    ingredients: ['Matki Sprouts', 'Buttery Tarri', 'Cream', 'Farsan', 'Kasuri Methi'],
  },
  {
    id: 'pav-bhaji-misal',
    name: 'Pav Bhaji Misal',
    nameHindi: 'पाव भाजी मिसळ',
    description: 'Two Mumbai favorites unite! Pav Bhaji gravy meets Misal for the ultimate street food experience.',
    price: 155,
    category: 'fusion-specials',
    spiceLevel: 3,
    isVegetarian: true,
    isNew: true,
    ingredients: ['Matki Sprouts', 'Pav Bhaji Gravy', 'Butter', 'Farsan', 'Onion'],
  },
  
  // Beverages
  {
    id: 'sol-kadhi',
    name: 'Sol Kadhi',
    nameHindi: 'सोल कढी',
    description: 'Traditional Konkani digestive drink made with kokum and coconut milk. Perfect after a spicy Misal!',
    price: 50,
    category: 'beverages',
    spiceLevel: 1,
    isVegetarian: true,
    isVegan: true,
    isPopular: true,
  },
  {
    id: 'masala-chaas',
    name: 'Masala Chaas',
    nameHindi: 'मसाला छाछ',
    description: 'Spiced buttermilk with cumin and mint. The perfect cooling companion.',
    price: 40,
    category: 'beverages',
    spiceLevel: 1,
    isVegetarian: true,
  },
  {
    id: 'kokum-sharbat',
    name: 'Kokum Sharbat',
    nameHindi: 'कोकम शरबत',
    description: 'Sweet and tangy kokum drink, a Maharashtrian summer essential.',
    price: 45,
    category: 'beverages',
    spiceLevel: 1,
    isVegetarian: true,
    isVegan: true,
  },
  {
    id: 'thandai',
    name: 'Thandai',
    nameHindi: 'ठंडाई',
    description: 'Rich milk drink with nuts and aromatic spices. Refreshing and nutritious.',
    price: 60,
    category: 'beverages',
    spiceLevel: 1,
    isVegetarian: true,
  },
  
  // Sides
  {
    id: 'extra-pav',
    name: 'Extra Pav (2 pcs)',
    nameHindi: 'एक्स्ट्रा पाव',
    description: 'Soft, buttery pav to soak up every last drop of tarri.',
    price: 20,
    category: 'sides',
    spiceLevel: 1,
    isVegetarian: true,
  },
  {
    id: 'extra-farsan',
    name: 'Extra Farsan',
    nameHindi: 'एक्स्ट्रा फरसाण',
    description: 'Crispy farsan mix for that extra crunch.',
    price: 30,
    category: 'sides',
    spiceLevel: 2,
    isVegetarian: true,
  },
  {
    id: 'kanda-bhaji',
    name: 'Kanda Bhaji',
    nameHindi: 'कांदा भजी',
    description: 'Crispy onion fritters, perfect for dipping.',
    price: 60,
    category: 'sides',
    spiceLevel: 2,
    isVegetarian: true,
    isPopular: true,
  },
  {
    id: 'batata-bhaji',
    name: 'Batata Bhaji',
    nameHindi: 'बटाटा भजी',
    description: 'Spiced potato slices, deep-fried to perfection.',
    price: 50,
    category: 'sides',
    spiceLevel: 2,
    isVegetarian: true,
  },
  
  // Combos
  {
    id: 'misal-combo-classic',
    name: 'Classic Combo',
    nameHindi: 'क्लासिक कॉम्बो',
    description: 'Any Classic Misal + Sol Kadhi + Extra Pav. The complete experience!',
    price: 170,
    category: 'combos',
    spiceLevel: 3,
    isVegetarian: true,
    isPopular: true,
  },
  {
    id: 'misal-combo-fusion',
    name: 'Fusion Feast',
    nameHindi: 'फ्यूजन फीस्ट',
    description: 'Any Fusion Misal + Masala Chaas + Kanda Bhaji. For the adventurous foodie!',
    price: 220,
    category: 'combos',
    spiceLevel: 3,
    isVegetarian: true,
    isNew: true,
  },
  {
    id: 'misal-combo-family',
    name: 'Family Pack',
    nameHindi: 'फॅमिली पॅक',
    description: '4 Classic Misals + 4 Beverages + Extra Farsan. Perfect for sharing!',
    price: 550,
    category: 'combos',
    spiceLevel: 3,
    isVegetarian: true,
  },
]

// Helper function to get menu items by category
export const getMenuByCategory = (category: string): MenuItem[] => {
  return menuItems.filter(item => item.category === category)
}

// Helper function to get popular items
export const getPopularItems = (): MenuItem[] => {
  return menuItems.filter(item => item.isPopular)
}

// Helper function to get new items
export const getNewItems = (): MenuItem[] => {
  return menuItems.filter(item => item.isNew)
}

import { Ingredient, StorySection } from '@/types'

export const ingredients: Ingredient[] = [
  {
    id: 'sprouts',
    name: 'Matki Sprouts',
    nameMarathi: 'मटकी',
    description: 'The heart of every Misal. Protein-rich moth bean sprouts cooked to perfection, providing the earthy base that defines this dish.',
    color: '#8B7355',
    funFact: 'Matki sprouts are a superfood! They contain more protein per gram than most other legumes.',
  },
  {
    id: 'tarri',
    name: 'Spicy Tarri',
    nameMarathi: 'तर्री',
    description: 'The soul of Misal - a fiery, aromatic curry made with a secret blend of Maharashtrian spices. Each region has its own legendary recipe.',
    color: '#E4002B',
    funFact: 'The word "Tarri" comes from Marathi meaning "to float" - describing how the curry floats on top.',
  },
  {
    id: 'farsan',
    name: 'Crispy Farsan',
    nameMarathi: 'फरसाण',
    description: 'The crunch factor! A mix of sev, chivda, and crispy bits that adds texture and transforms every bite into an experience.',
    color: '#D4A574',
    funFact: 'No two farsan mixes are the same - each shop guards their recipe like a family treasure.',
  },
  {
    id: 'pav',
    name: 'Soft Pav',
    nameMarathi: 'पाव',
    description: 'Pillowy soft bread rolls, slightly toasted with butter. The perfect vessel for soaking up every drop of that glorious tarri.',
    color: '#F5DEB3',
    funFact: 'Pav was introduced to India by the Portuguese, but Maharashtra made it legendary!',
  },
  {
    id: 'onion',
    name: 'Fresh Onion',
    nameMarathi: 'कांदा',
    description: 'Freshly chopped onions add a sharp, refreshing crunch that cuts through the richness and heat of the dish.',
    color: '#DDA0DD',
    funFact: 'Nashik, the onion capital of India, is also famous for its unique style of Misal!',
  },
  {
    id: 'lemon',
    name: 'Tangy Lemon',
    nameMarathi: 'लिंबू',
    description: 'A squeeze of fresh lemon awakens all the flavors and adds a citrusy brightness that makes the dish come alive.',
    color: '#FFE135',
    funFact: 'The acidity from lemon actually helps your body absorb more nutrients from the sprouts!',
  },
]

export const misalStory: StorySection[] = [
  {
    id: 'origin',
    title: 'The Birth of a Legend',
    content: 'In the bustling streets of Maharashtra, amidst the clatter of morning chai and the aroma of spices, Misal was born. What started as a humble breakfast for farmers and mill workers became a culinary revolution that would capture the hearts of millions.',
    year: '1900s',
  },
  {
    id: 'regional',
    title: 'Every City, A New Story',
    content: 'From the fiery depths of Kolhapur to the sophisticated streets of Pune, from the bustling lanes of Mumbai to the wine country of Nashik - each region crafted its own version, each with a distinct personality and pride.',
    year: '1950s',
  },
  {
    id: 'street-food',
    title: 'The Street Food King',
    content: 'Misal rose from humble beginnings to become the undisputed king of Maharashtrian street food. Small shops became legendary, with lines stretching around corners and families passing down recipes through generations.',
    year: '1980s',
  },
  {
    id: 'modern',
    title: 'A New Chapter Begins',
    content: 'The Misal Story is born with a mission: to celebrate this iconic dish, honor its traditions, and share it with the world. We\'re not just serving food - we\'re serving culture, history, and a whole lot of spice.',
    year: 'Today',
  },
]

export const brandValues = [
  {
    title: 'Authenticity',
    description: 'We source our spices from the same regions that invented Misal. No shortcuts, no compromises.',
    icon: 'heart',
  },
  {
    title: 'Quality',
    description: 'Fresh ingredients, traditional recipes, and the same love that goes into home-cooked meals.',
    icon: 'star',
  },
  {
    title: 'Innovation',
    description: 'While we respect tradition, we\'re not afraid to experiment. Our fusion menu is proof.',
    icon: 'sparkles',
  },
  {
    title: 'Community',
    description: 'Misal has always been about bringing people together. That spirit lives in every TMS outlet.',
    icon: 'users',
  },
]

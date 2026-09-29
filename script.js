/**
 * KING'S TABLE & CO. - Master Product Catalog Database & Gallery Script
 * Vessels for the Royal Table Showcase
 */

// Clean Studio Ceramic Product Photos (Strictly Ceramic Items, Zero Ice Cream, Zero Food)
const studioImages = {
  cleanPlate: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=800',
  cleanPlatter: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800',
  cleanCup: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
  cleanMug: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&q=80&w=800',
  cleanBowl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=800',
  cleanStack: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=800',
  cleanGreyPlate: 'https://images.unsplash.com/photo-1615865417491-9941019fbc00?auto=format&fit=crop&q=80&w=800'
};

const productsData = [
  // ==========================================
  // 1. WHITE MATTE SNOW SPECKLE (Pages 04 - 06)
  // ==========================================
  {
    id: 'snow-urmi-full-plate',
    title: 'URMI FULL PLATE',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Plates',
    dimension: '26 cm',
    capacity: 'N/A',
    finish: 'White Matte Speckle',
    colors: ['#ffffff', '#e2e8f0'],
    image: 'img/white matte.webp',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. Elevate your dining experience with our timeless collection, meticulously crafted for refined elegance.',
    badge: 'Popular',
    featured: true
  },
  {
    id: 'snow-urmi-quarter-plate',
    title: 'URMI QUARTER PLATE',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Plates',
    dimension: '19 cm',
    capacity: 'N/A',
    finish: 'White Matte Speckle',
    colors: ['#ffffff'],
    image: 'img/URMIQUARTERPLATE.jpg',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. Meticulously crafted 19 cm quarter plate.',
    badge: 'Essential',
    featured: false
  },
  {
    id: 'snow-island-platter-big',
    title: 'ISLAND PLATTER BIG',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Platters',
    dimension: '33 x 2 cm',
    capacity: 'N/A',
    finish: 'White Matte Speckle',
    colors: ['#ffffff'],
     image: 'img/ISLANDPLATTERBIGnew.jpg',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. Large 33 x 21 cm curved island platter.',
    badge: 'Bestseller',
    featured: true
  },
  {
    id: 'snow-island-platter-small',
    title: 'ISLAND PLATTER SMALL',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Platters',
    dimension: '30 x 19.5 cm',
    capacity: 'N/A',
    finish: 'White Matte Speckle',
    colors: ['#ffffff'],
    image: 'img/WhiteMatteSnowSpeckle.jpg',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. 30 x 19.5 cm small island platter.',
    badge: 'Popular',
    featured: false
  },
  {
    id: 'snow-serving-platter-big',
    title: 'SERVING PLATTER BIG',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Platters',
    dimension: '34 x 17 cm',
    capacity: 'N/A',
    finish: 'White Matte Speckle',
    colors: ['#ffffff'],
    image: 'img/snow-serving-platter-big.jpg',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. Large 34 x 17 cm serving platter.',
    badge: 'Prestige',
    featured: false
  },
  {
    id: 'snow-serving-platter-small',
    title: 'SERVING PLATTER SMALL',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Platters',
    dimension: '29 x 14.5 cm',
    capacity: 'N/A',
    finish: 'White Matte Speckle',
    colors: ['#ffffff'],
    image: 'img/snow-serving-platter-small.jpg',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. 29 x 14.5 cm small serving platter.',
    badge: 'Prestige',
    featured: false
  },
  {
    id: 'snow-serving-platter',
    title: 'SERVING PLATTER',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Platters',
    dimension: '24.5 x 13 cm',
    capacity: 'N/A',
    finish: 'White Matte Speckle',
    colors: ['#ffffff'],
    image: 'img/ISLANDPLATTERBIGnew.jpg',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. Standard 24.5 x 13 cm serving platter.',
    badge: 'Prestige',
    featured: false
  },
  {
    id: 'snow-coffee-cup',
    title: 'COFFEE CUP',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Cups & Mugs',
    dimension: '250 ml',
    capacity: '250 ml',
    finish: 'White Matte Speckle',
    colors: ['#ffffff', '#d4af37'],
    image: 'img/whitecupn.webp',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. 250 ml coffee cup.',
    badge: 'Trending',
    featured: true
  },
  {
    id: 'snow-coffee-cup-saucer',
    title: 'COFFEE CUP SAUCER',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Cups & Mugs',
    dimension: '14 cm',
    capacity: 'N/A',
    finish: 'White Matte Speckle',
    colors: ['#ffffff'],
    image: 'img/snow-coffee-cup-saucer.jpg',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. 14 cm coffee cup saucer.',
    badge: 'Saucer',
    featured: false
  },
  {
    id: 'snow-coffee-mug-s1',
    title: 'COFFEE MUG S1',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Cups & Mugs',
    dimension: '210 ml',
    capacity: '210 ml',
    finish: 'White Matte Speckle',
    colors: ['#ffffff'],
    image: 'img/snow-coffee-mug-s1.avif',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. 210 ml coffee mug S1.',
    badge: 'Classic',
    featured: false
  },
  {
    id: 'snow-coffee-mug-s3',
    title: 'COFFEE MUG S3',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Cups & Mugs',
    dimension: '130 ml',
    capacity: '130 ml',
    finish: 'White Matte Speckle',
    colors: ['#ffffff'],
    image: 'img/COFFEE MUG S3-1.jpg',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. 130 ml coffee mug S3.',
    badge: 'Espresso',
    featured: false
  },
  {
    id: 'snow-tea-cup-big',
    title: 'TEA CUP BIG (6oz)',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Cups & Mugs',
    dimension: '180 ml',
    capacity: '180 ml',
    finish: 'White Matte Speckle',
    colors: ['#ffffff'],
    image: 'img/snow-tea-cup-big.avif',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. 180 ml (6oz) big tea cup.',
    badge: 'Tea Set',
    featured: false
  },
  {
    id: 'snow-tea-cup-saucer-big',
    title: 'TEA CUP SAUCER BIG',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Cups & Mugs',
    dimension: '15 cm',
    capacity: 'N/A',
    finish: 'White Matte Speckle',
    colors: ['#ffffff'],
    image: 'img/snow-tea-cup-saucer-big.jpg',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. 15 cm big tea cup saucer.',
    badge: 'Saucer',
    featured: false
  },
  {
    id: 'snow-tea-cup-small',
    title: 'TEA CUP SMALL (4oz)',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Cups & Mugs',
    dimension: '140 ml',
    capacity: '140 ml',
    finish: 'White Matte Speckle',
    colors: ['#ffffff'],
    image: 'img/snow-tea-cup-small.avif',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. 140 ml (4oz) small tea cup.',
    badge: 'Tea Set',
    featured: false
  },
  {
    id: 'snow-tea-cup-saucer-small',
    title: 'TEA CUP SAUCER SMALL',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Cups & Mugs',
    dimension: '14 cm',
    capacity: 'N/A',
    finish: 'White Matte Speckle',
    colors: ['#ffffff'],
     image: 'img/COFFEE MUG S3-1.jpg',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. 14 cm small tea cup saucer.',
    badge: 'Saucer',
    featured: false
  },
  {
    id: 'snow-tea-cup-mini',
    title: 'TEA CUP MINI (3oz)',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Cups & Mugs',
    dimension: '90 ml',
    capacity: '90 ml',
    finish: 'White Matte Speckle',
    colors: ['#ffffff'],
     image: 'img/COFFEE MUG S3-1.jpg',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. 90 ml (3oz) mini tea cup.',
    badge: 'Mini',
    featured: false
  },
  {
    id: 'snow-dip-bowl',
    title: 'DIP BOWL',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Bowls',
    dimension: '6.5 cm - 90 ml',
    capacity: '90 ml',
    finish: 'White Matte Speckle',
    colors: ['#ffffff'],
    image: 'img/snow-dip-bowl.jpg',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. 6.5 cm - 90 ml dip bowl.',
    badge: 'Dip Bowl',
    featured: false
  },
  {
    id: 'snow-desserts-bowl',
    title: 'DESSERTS BOWL',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Bowls',
    dimension: '10 cm - 210 ml',
    capacity: '210 ml',
    finish: 'White Matte Speckle',
    colors: ['#ffffff'],
    image: 'img/snow-desserts-bowl.jpg',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. 10 cm - 210 ml desserts bowl.',
    badge: 'Dessert Bowl',
    featured: false
  },
  {
    id: 'snow-veg-bowl',
    title: 'VEG. BOWL',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Bowls',
    dimension: '8 cm - 150 ml',
    capacity: '150 ml',
    finish: 'White Matte Speckle',
    colors: ['#ffffff'],
    image: 'img/snow-veg-bowl.jpg',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. 8 cm - 150 ml veg bowl.',
    badge: 'Veg Bowl',
    featured: false
  },
  {
    id: 'snow-soup-bowl',
    title: 'SOUP BOWL',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Bowls',
    dimension: '10.5 cm - 240 ml',
    capacity: '240 ml',
    finish: 'White Matte Speckle',
    colors: ['#ffffff'],
    image: 'img/snow-soup-bowl.jpg',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. 10.5 cm - 240 ml soup bowl.',
    badge: 'Soup Bowl',
    featured: false
  },
  {
    id: 'snow-1-portion-bowl',
    title: '1 PORTION BOWL',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Bowls',
    dimension: '14 cm - 560 ml',
    capacity: '560 ml',
    finish: 'White Matte Speckle',
    colors: ['#ffffff'],
    image: 'img/snow-1-portion-bowl.avif',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. 14 cm - 560 ml 1 portion bowl.',
    badge: 'Portion Bowl',
    featured: false
  },
  {
    id: 'snow-2-portion-bowl',
    title: '2 PORTION BOWL',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Bowls',
    dimension: '16 cm - 880 ml',
    capacity: '880 ml',
    finish: 'White Matte Speckle',
    colors: ['#ffffff'],
    image: 'img/snow-2-portion-bowl.jpg',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. 16 cm - 880 ml 2 portion bowl.',
    badge: 'Portion Bowl',
    featured: false
  },
  {
    id: 'snow-small-pyala-bowl',
    title: 'SMALL PYALA BOWL',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Bowls',
    dimension: '9.5 cm - 160 ml',
    capacity: '160 ml',
    finish: 'White Matte Speckle',
    colors: ['#ffffff'],
    image: 'img/SMALL PYALA BOWL.jpg',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. 9.5 cm - 160 ml small pyala bowl.',
    badge: 'Pyala Bowl',
    featured: false
  },
  {
    id: 'snow-medium-pyala-bowl',
    title: 'MEDIUM PYALA BOWL',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Bowls',
    dimension: '15 cm - 600 ml',
    capacity: '600 ml',
    finish: 'White Matte Speckle',
    colors: ['#ffffff'],
    image: 'img/snow-medium-pyala-bowl.jpg',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. 15 cm - 600 ml medium pyala bowl.',
    badge: 'Pyala Bowl',
    featured: false
  },
  {
    id: 'snow-large-pyala-bowl',
    title: 'LARGE PYALA BOWL',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Bowls',
    dimension: '20 cm - 1200 ml',
    capacity: '1200 ml',
    finish: 'White Matte Speckle',
    colors: ['#ffffff'],
    image: 'img/snow-large-pyala-bowl.jpg',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. 20 cm - 1200 ml large pyala bowl.',
    badge: 'Pyala Bowl',
    featured: false
  },
  {
    id: 'snow-katori-small',
    title: 'KATORI SMALL',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Bowls',
    dimension: '9.5 cm - 180 ml',
    capacity: '180 ml',
    finish: 'White Matte Speckle',
    colors: ['#ffffff'],
    image: 'img/snow-katori-small.jpg',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. 9.5 cm - 180 ml katori small.',
    badge: 'Katori',
    featured: false
  },
  {
    id: 'snow-katori-medium',
    title: 'KATORI MEDIUM',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Bowls',
    dimension: '15 cm - 600 ml',
    capacity: '600 ml',
    finish: 'White Matte Speckle',
    colors: ['#ffffff'],
    image: 'img/snow-katori-medium.jpg',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. 15 cm - 600 ml katori medium.',
    badge: 'Katori',
    featured: false
  },
  {
    id: 'snow-katori-large',
    title: 'KATORI LARGE',
    category: 'snow-speckle',
    categoryName: 'White Matte Snow Speckle',
    type: 'Bowls',
    dimension: '20 cm - 1300 ml',
    capacity: '1300 ml',
    finish: 'White Matte Speckle',
    colors: ['#ffffff'],
    image: 'img/KATORI LARGE.jpg',
    description: 'Discover our chic white matte tableware, featuring subtle blank dots and bordered accents. 20 cm - 1300 ml katori large.',
    badge: 'Katori',
    featured: false
  },

  // ==========================================
  // 2. CHARCOAL GREY SHINE (Pages 07 - 09)
  // ==========================================
  {
    id: 'grey-urmi-full-plate',
    title: 'URMI FULL PLATE',
    category: 'grey-shine',
    categoryName: 'Charcoal Grey Shine',
    type: 'Plates',
    dimension: '26 cm',
    capacity: 'N/A',
    finish: 'Grey Gloss Shine',
    colors: ['#4a5568', '#2d3748'],
    image: 'img/CharcoalGreyplates.jpg',
    description: 'Introducing our Grey Gloss Tableware: chic, modern, and adorned with subtle blank dots. With its sleek border design, it adds sophistication to any table setting.',
    badge: 'Modern',
    featured: true
  },
  {
    id: 'grey-urmi-quarter-plate',
    title: 'URMI QUARTER PLATE',
    category: 'grey-shine',
    categoryName: 'Charcoal Grey Shine',
    type: 'Plates',
    dimension: '19 cm',
    capacity: 'N/A',
    finish: 'Grey Gloss Shine',
    colors: ['#4a5568'],
    image: 'img/grey-urmi-quarter-plate.jpg',
    description: 'Introducing our Grey Gloss Tableware: chic, modern 19 cm quarter plate.',
    badge: 'Essential',
    featured: false
  },
  {
    id: 'grey-island-big',
    title: 'ISLAND PLATTER BIG',
    category: 'grey-shine',
    categoryName: 'Charcoal Grey Shine',
    type: 'Platters',
    dimension: '33 x 21 cm',
    capacity: 'N/A',
    finish: 'Grey Gloss Shine',
    colors: ['#4a5568'],
    image: 'img/ISLANDPLATTERBIGnew.jpg',
    description: 'Sleek dark grey gloss 33 x 21 cm island platter.',
    badge: 'Luxury',
    featured: false
  },
  {
    id: 'grey-serving-big',
    title: 'SERVING PLATTER BIG',
    category: 'grey-shine',
    categoryName: 'Charcoal Grey Shine',
    type: 'Platters',
    dimension: '34 x 17 cm',
    capacity: 'N/A',
    finish: 'Grey Gloss Shine',
    colors: ['#4a5568'],
    image: 'img/grey-serving-big.jpg',
    description: 'Large charcoal grey gloss 34 x 17 cm rectangular platter.',
    badge: 'Prestige',
    featured: false
  },
  {
    id: 'grey-coffee-mug-s1',
    title: 'COFFEE MUG S1',
    category: 'grey-shine',
    categoryName: 'Charcoal Grey Shine',
    type: 'Cups & Mugs',
    dimension: '210 ml',
    capacity: '210 ml',
    finish: 'Grey Gloss Shine',
    colors: ['#4a5568'],
    image: 'https://img.magnific.com/free-photo/cozy-autumn-still-life-background-with-beautiful-cup_169016-6308.jpg?t=st=1790666135~exp=1790669735~hmac=c6d385ade2c73f34c117ad9452abb65e49f8bdb0cf704c4af99ee962832e25cb&w=1480',
    description: '210 ml glossy grey coffee mug S1.',
    badge: 'New',
    featured: true
  },

  // ==========================================
  // 3. SPRINKLE GLOW COLLECTION (Pages 10 - 16)
  // ==========================================
  {
    id: 'sprinkle-pink-full-plate',
    title: 'PINK BLOSSOM FULL PLATE',
    category: 'sprinkle-glow',
    categoryName: 'Sprinkle Glow',
    type: 'Plates',
    dimension: '26 cm',
    capacity: 'N/A',
    finish: 'Pink Blossom Gloss',
    colors: ['#f472b6', '#fbcfe8'],
    image: 'img/pinkplater.jpg',
    description: 'Introducing our Sprinkle Glow Collection: where soft gloss hues meet the allure of midnight sparkle. Elevate your dining experience with subtle sophistication.',
    badge: 'Highlight',
    featured: true
  },

  // ==========================================
  // 4. SERENE PLAIN MATTE COLLECTION (Pages 17 - 25)
  // ==========================================
  {
    id: 'serene-seafoam-platter',
    title: 'SEAFOAM GREEN SERVING PLATTER',
    category: 'serene-matte',
    categoryName: 'Serene Plain Matte',
    type: 'Platters',
    dimension: '34 x 17 cm',
    capacity: 'N/A',
    finish: 'Seafoam Green Matte',
    colors: ['#8da399', '#a7f3d0'],
    image: 'img/SEAFOAMGREENSERVINGPLATTER.jpg',
    description: 'Indulge in understated sophistication with our soft tone matte plain color ceramic tableware. Effortlessly blending elegance with minimalism.',
    badge: 'Minimalist',
    featured: true
  },
  {
    id: 'serene-chestnut-pyala',
    title: 'CHESTNUT BROWN PYALA BOWL',
    category: 'serene-matte',
    categoryName: 'Serene Plain Matte',
    type: 'Bowls',
    dimension: '20 cm',
    capacity: '1200 ml',
    finish: 'Chestnut Brown Matte',
    colors: ['#c27a58', '#9c4221'],
    image: 'img/serene-chestnut-pyala.jpg',
    description: 'Earthy terracotta chestnut brown 1200 ml pyala bowl.',
    badge: 'Terracotta',
    featured: false
  },

  // ==========================================
  // 5. SIP IN STYLE - CUPS & MUGS (Pages 47 - 50)
  // ==========================================
  {
    id: 'cup-face-milk-mug',
    title: 'FACE MILK MUG',
    category: 'cups-mugs',
    categoryName: 'Sip in Style Cups & Mugs',
    type: 'Cups & Mugs',
    dimension: '400 ml',
    capacity: '400 ml',
    finish: 'Matte & Gloss Accent',
    colors: ['#ffffff', '#2c3539'],
    image: 'https://img.magnific.com/free-photo/cup-coffee-coffee-beans_1252-901.jpg?t=st=1790665729~exp=1790669329~hmac=71e4ea0e639a017c4ea14e51137fc07fd471eed35393e90128a2dd008533e3d6&w=1480',
    description: 'Introducing our refined Cups Series, combining stylish design with exceptional craftsmanship. Statement 400ml milk mug featuring a minimalist 3D face outline sculpture.',
    badge: 'Sculpted Face',
    featured: true
  },
  {
    id: 'cup-pillar-cup',
    title: 'PILLAR CUP',
    category: 'cups-mugs',
    categoryName: 'Sip in Style Cups & Mugs',
    type: 'Cups & Mugs',
    dimension: '170 ml',
    capacity: '170 ml',
    finish: 'Ribbed Pastel Glaze',
    colors: ['#fbcfe8', '#93c5fd', '#fde047'],
    image: 'img/cup-pillar-cup.jpg',
    description: 'Introducing our refined Cups Series. 170 ml ribbed pillar cup in soft pastel tones.',
    badge: 'Pillar Cup',
    featured: false
  },
  {
    id: 'cup-barista-designer',
    title: 'DESIGNER BARISTA CUP',
    category: 'cups-mugs',
    categoryName: 'Sip in Style Cups & Mugs',
    type: 'Cups & Mugs',
    dimension: '230 ml',
    capacity: '230 ml',
    finish: 'Horizontal Rib Texture',
    colors: ['#fbbf24', '#60a5fa'],
    image: 'img/DESIGNERBARISTACUP.jpg',
    description: 'Introducing our refined Cups Series. 230 ml wide-brim barista cup ideal for cappuccino art.',
    badge: 'Barista Choice',
    featured: true
  },

  // ==========================================
  // 50-50 BLEND COLLECTION
  // ==========================================
  {
    id: 'blend-5050-royal-dinner-plate',
    title: '50-50 ROYAL DINNER PLATE',
    category: '50-50-blend',
    categoryName: 'Royal 50-50 Dual Tone Blend',
    type: 'Plates',
    dimension: '27 cm',
    capacity: 'N/A',
    finish: 'Dual Tone Earth & Glaze Blend',
    colors: ['#3b2f2f', '#d4c5b9'],
    image: 'img/50-50.jpg',
    description: 'Signature 50-50 dual-shade dinner plate featuring a striking two-tone reactive glaze finish. Engineered for high-end dining and hotel presentation.',
    badge: 'Signature',
    featured: true
  },

  {
    id: 'blend-5050-pyala-serving-bowl',
    title: '50-50 SERVING PYALA BOWL',
    category: '50-50-blend',
    categoryName: 'Royal 50-50 Dual Tone Blend',
    type: 'Bowls',
    dimension: '18 cm - 850 ml',
    capacity: '850 ml',
    finish: 'Dual Tone Stoneware Glaze',
    colors: ['#3b2f2f', '#c6a767'],
    image: 'img/50-50.jpg',
    description: 'Deep 850 ml stoneware pyala bowl with a dual-tone contrast rim. Kiln-fired at 1200°C for exceptional chip resistance and thermal durability.',
    badge: 'Bestseller',
    featured: false
  },
  {
    id: 'blend-5050-oval-platter',
    title: '50-50 OVAL SERVING PLATTER',
    category: '50-50-blend',
    categoryName: 'Royal 50-50 Dual Tone Blend',
    type: 'Platters',
    dimension: '32 x 20 cm',
    capacity: 'N/A',
    finish: 'Artisanal Two-Tone Glaze',
    colors: ['#3b2f2f', '#d4c5b9'],
    image: 'img/50-50.jpg',
    description: 'Spacious 32 x 20 cm oval serving platter with two-tone glaze gradient. Ideal for banquets, appetizers, and luxury table arrangements.',
    badge: 'Prestige',
    featured: false
  },

  // ==========================================
  // HAZELNUT MATTE COLLECTION
  // ==========================================
  {
    id: 'hazelnut-urmi-full-plate',
    title: 'HAZELNUT MATTE DINNER PLATE',
    category: 'hazelnut-matte',
    categoryName: 'Artisanal Hazelnut Matte',
    type: 'Plates',
    dimension: '26 cm',
    capacity: 'N/A',
    finish: 'Warm Velvet Hazelnut Matte',
    colors: ['#8c6239', '#5c3a21'],
    image: 'img/HAZAL.jpg',
    description: 'Earthy, velvet-smooth Hazelnut Matte 26 cm full plate. Inspired by natural stone textures and crafted to bring organic warmth to modern dining tables.',
    badge: 'Trending',
    featured: true
  },
  {
    id: 'hazelnut-coupe-salad-bowl',
    title: 'HAZELNUT MATTE COUPE BOWL',
    category: 'hazelnut-matte',
    categoryName: 'Artisanal Hazelnut Matte',
    type: 'Bowls',
    dimension: '21 cm - 750 ml',
    capacity: '750 ml',
    finish: 'Velvet Hazelnut Texture',
    colors: ['#8c6239'],
    image: 'img/HAZAL.jpg',
    description: 'Wide 21 cm coupe salad and pasta bowl in warm Hazelnut Matte. Non-porous, 100% food-safe stoneware designed for commercial dishwasher durability.',
    badge: 'Bestseller',
    featured: false
  },
  {
    id: 'hazelnut-serving-platter',
    title: 'HAZELNUT RECTANGULAR PLATTER',
    category: 'hazelnut-matte',
    categoryName: 'Artisanal Hazelnut Matte',
    type: 'Platters',
    dimension: '34 x 18 cm',
    capacity: 'N/A',
    finish: 'Warm Earth Matte Glaze',
    colors: ['#8c6239'],
    image: 'img/HAZAL.jpg',
    description: 'Elegant 34 x 18 cm rectangular presentation platter in rich Hazelnut Matte. Features soft raised edges for refined hotel and buffet service.',
    badge: 'Prestige',
    featured: false
  },
  {
    id: 'hazelnut-artisan-coffee-mug',
    title: 'HAZELNUT MATTE COFFEE MUG',
    category: 'hazelnut-matte',
    categoryName: 'Artisanal Hazelnut Matte',
    type: 'Cups & Mugs',
    dimension: '250 ml',
    capacity: '250 ml',
    finish: 'Silky Hazelnut Surface',
    colors: ['#8c6239', '#c6a767'],
    image: 'img/PLAINMATTE.jpg',
    description: '250 ml ergonomic coffee mug in velvety Hazelnut Matte finish. Retains thermal heat while delivering a luxurious tactile feel.',
    badge: 'Essential',
    featured: false
  },

  // ==========================================
  // FROST WHITE COLLECTION
  // ==========================================
  {
    id: 'frost-white-royal-plate',
    title: 'FROST WHITE ROYAL FULL PLATE',
    category: 'frost-white',
    categoryName: 'Frost White Pristine Stoneware',
    type: 'Plates',
    dimension: '27 cm',
    capacity: 'N/A',
    finish: 'Pristine Frost White Satin',
    colors: ['#ffffff', '#f8fafc'],
    image: 'img/URMIFULLPLATE white snow.jpg',
    description: 'Ultra-clean 27 cm Frost White dinner plate with a subtle satin rim sheen. Created for Michelin-starred food presentation and fine dining setups.',
    badge: 'Bestseller',
    featured: true
  },
  {
    id: 'frost-white-charger-platter',
    title: 'FROST WHITE RECTANGULAR PLATTER',
    category: 'frost-white',
    categoryName: 'Frost White Pristine Stoneware',
    type: 'Platters',
    dimension: '33 x 19 cm',
    capacity: 'N/A',
    finish: 'Subtle Frost Satin Finish',
    colors: ['#ffffff'],
    image: 'img/white matte.webp',
    description: '33 x 19 cm rectangular charger platter in pristine Frost White. Scratch-resistant glaze engineered to withstand high-volume hotel use.',
    badge: 'Popular',
    featured: false
  },
  {
    id: 'frost-white-pyala-salad-bowl',
    title: 'FROST WHITE DEEP SALAD BOWL',
    category: 'frost-white',
    categoryName: 'Frost White Pristine Stoneware',
    type: 'Bowls',
    dimension: '22 cm - 1100 ml',
    capacity: '1100 ml',
    finish: 'Satin Frost White',
    colors: ['#ffffff'],
    image: 'img/URMIFULLPLATE white snow.jpg',
    description: 'Generous 1100 ml deep salad and ramen bowl in pure Frost White. Heavy-weight stoneware base provides maximum table stability.',
    badge: 'Prestige',
    featured: false
  },
  {
    id: 'frost-white-cappuccino-cup',
    title: 'FROST WHITE CAPPUCCINO CUP & SAUCER',
    category: 'frost-white',
    categoryName: 'Frost White Pristine Stoneware',
    type: 'Cups & Mugs',
    dimension: '220 ml',
    capacity: '220 ml',
    finish: 'Pure Frost Glaze',
    colors: ['#ffffff', '#e2e8f0'],
    image: 'img/whitecups.jpg',
    description: 'Classical 220 ml cappuccino cup with matching saucer in Frost White glaze. Designed for latte art presentation and everyday coffee service.',
    badge: 'Trending',
    featured: false
  }
  
];

// State variables
let currentFilter = 'all';
let searchQuery = '';

// DOM Elements Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Check if we are on collections.html (full catalog)
  if (document.getElementById('product-grid')) {
    renderProductGrid('product-grid', false);
    setupFilterListeners();
    setupSearchListener();
  }

  // Check if we are on index.html (featured preview grid)
  if (document.getElementById('featured-grid')) {
    renderProductGrid('featured-grid', true);
  }

  // Contact Form Submission Handler
  const contactForm = document.getElementById('inquiryForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
  }
});

// Render Product Cards Grid
function renderProductGrid(targetId, featuredOnly = false) {
  const container = document.getElementById(targetId);
  if (!container) return;

  const filteredProducts = productsData.filter(product => {
    if (featuredOnly) return product.featured;

    const matchesFilter = (currentFilter === 'all') || 
                          (product.category === currentFilter) ||
                          (product.type.toLowerCase() === currentFilter.toLowerCase());
    
    const matchesSearch = product.title.toLowerCase().includes(searchQuery) ||
                          product.categoryName.toLowerCase().includes(searchQuery) ||
                          product.finish.toLowerCase().includes(searchQuery);

    return matchesFilter && matchesSearch;
  });

  if (filteredProducts.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-search display-4 text-muted mb-3 d-block"></i>
        <h4 class="text-muted">No products found</h4>
        <p class="text-muted">Try selecting a different collection or clearing your search term.</p>
        <button class="btn btn-primary-custom mt-2" onclick="resetFilters()">View All Collections</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredProducts.map(product => `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="product-card">
        <div class="product-img-wrap">
          <img src="${product.image}" alt="${product.title}" loading="lazy">
          <span class="product-badge">${product.badge}</span>
          <div class="product-colors-preview">
            ${product.colors.map(color => `<span class="color-dot" style="background-color: ${color}"></span>`).join('')}
          </div>
        </div>
        <div class="product-body">
          <span class="product-category">${product.categoryName}</span>
          <h3 class="product-title">${product.title}</h3>
          <div class="product-specs-pills">
            <span class="spec-pill"><i class="bi bi-aspect-ratio me-1"></i>${product.dimension}</span>
            ${product.capacity !== 'N/A' ? `<span class="spec-pill"><i class="bi bi-cup-hot me-1"></i>${product.capacity}</span>` : ''}
            <span class="spec-pill"><i class="bi bi-palette me-1"></i>${product.finish}</span>
          </div>
          <p class="text-muted small mb-3 flex-grow-1">${product.description}</p>
          <div class="product-footer">
            <button class="btn btn-view-spec" onclick="openProductModal('${product.id}')">
              <i class="bi bi-info-circle me-1"></i> View Specifications
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Filter Event Listeners
function setupFilterListeners() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.getAttribute('data-filter');
      renderProductGrid('product-grid', false);
    });
  });
}

// Search Listener
function setupSearchListener() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderProductGrid('product-grid', false);
  });
}

function resetFilters() {
  currentFilter = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(b => {
    if (b.getAttribute('data-filter') === 'all') b.classList.add('active');
    else b.classList.remove('active');
  });

  renderProductGrid('product-grid', false);
}

// Open Product Detail Modal
function openProductModal(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  document.getElementById('modalProductTitle').innerText = product.title;
  document.getElementById('modalCategory').innerText = product.categoryName;
  document.getElementById('modalFinish').innerText = product.finish;
  document.getElementById('modalDimension').innerText = product.dimension;
  document.getElementById('modalCapacity').innerText = product.capacity;
  document.getElementById('modalDescription').innerText = product.description;
  document.getElementById('modalProductImg').src = product.image;
  document.getElementById('modalBadge').innerText = product.badge;

  // Set WhatsApp Direct Inquiry Link
  const waText = encodeURIComponent(`Hello King's Table & Co.! I am interested in inquiring about: ${product.title} (${product.categoryName}, Size: ${product.dimension}, Volume: ${product.capacity}). Please share catalog pricing and bulk availability.`);
  document.getElementById('modalWaBtn').href = `https://wa.me/918077229191?text=${waText}`;

  // Set Email Direct Link
  const mailSubject = encodeURIComponent(`Product Inquiry: ${product.title}`);
  const mailBody = encodeURIComponent(`Hello King's Table & Co. Team,\n\nI would like to get more information and price quotes for:\nProduct: ${product.title}\nCollection: ${product.categoryName}\nDimensions: ${product.dimension}\nCapacity: ${product.capacity}\n\nLooking forward to your response.`);
  document.getElementById('modalMailBtn').href = `mailto:kingstableco@gmail.com?subject=${mailSubject}&body=${mailBody}`;

  const modalElement = new bootstrap.Modal(document.getElementById('productDetailModal'));
  modalElement.show();
}

// Handle Contact Form Submission
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('inquiryName').value;
  const collection = document.getElementById('inquiryCollection').value;
  
  alert(`Thank you, ${name}! Your inquiry regarding ${collection || "King's Table & Co. Royal Tableware"} has been recorded. Our Delhi,India sales team will contact you shortly.`);
  e.target.reset();
}

// Handle Embedded Quick Inquiry Form Submission (Homepage CTA Banner)
function handleQuickInquirySubmit(e) {
  e.preventDefault();
  const name = document.getElementById('quickName').value;
  const phone = document.getElementById('quickPhone').value;
  const req = document.getElementById('quickRequirement').value;
  const msg = document.getElementById('quickMessage').value;

  const waText = encodeURIComponent(
    `Hello King's Table & Co.!\n\nI would like to submit a Quick Bulk Inquiry:\n- Name: ${name}\n- Phone/WhatsApp: ${phone}\n- Requirement: ${req}\n- Notes: ${msg || 'N/A'}\n\nPlease share catalog details and bulk pricing quotes.`
  );

  window.open(`https://wa.me/918077229191?text=${waText}`, '_blank');
  e.target.reset();
}



  
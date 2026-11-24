import type {
  Product,
  Category,
  CartItem,
  Review,
  WishlistItem,
  ProductBundle,
  ProductQuestion,
} from "@/types"

// ============================================================
// Delivery Helper
// ============================================================

export function getEstimatedDelivery(): string {
  const now = new Date()
  const start = new Date(now.getTime() + 4 * 86400000)
  const end = new Date(now.getTime() + 7 * 86400000)
  const fmt = (d: Date) => d.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  return `${fmt(start)} – ${fmt(end)}`
}

// Product images are local crops from the supplied HandsCarp sample PDF.\n// The image() helper remains available for future editorial/category photography.\n\n// ============================================================\n// Categories
// ============================================================

export const categories: Category[] = [
  {
    "id": "cat-001",
    "name": "Hand-knotted",
    "slug": "hand-knotted",
    "description": "Rugs made using hand-knotting techniques.",
    "image": "/images/products/hands-carp-rc-51-a.jpg",
    "subcategories": [
      {
        "name": "Abstract",
        "slug": "abstract"
      },
      {
        "name": "Geometric",
        "slug": "geometric"
      }
    ]
  },
  {
    "id": "cat-002",
    "name": "Hand-tufted",
    "slug": "hand-tufted",
    "description": "Rugs made using hand-tufting techniques.",
    "image": "",
    "subcategories": []
  },
  {
    "id": "cat-003",
    "name": "Flatwoven",
    "slug": "flatwoven",
    "description": "Flat-structured woven rugs.",
    "image": "",
    "subcategories": []
  },
  {
    "id": "cat-004",
    "name": "Kilim",
    "slug": "kilim",
    "description": "Traditional flatwoven rugs, often featuring geometric designs.",
    "image": "",
    "subcategories": []
  },
  {
    "id": "cat-005",
    "name": "Handwoven",
    "slug": "handwoven",
    "description": "Rugs woven by hand using a loom or related hand-weaving methods.",
    "image": "",
    "subcategories": []
  }
]

// ============================================================
// HandsCarp hand-knotted rug samples
// ============================================================

const rawProducts = [
  {
    "id": "hands-carp-rc-51-a",
    "name": "RC 51 A Abstract Rug",
    "slug": "hands-carp-rc-51-a",
    "brand": "WEAVENTRA",
    "description": "Abstract painterly design with layered grey, charcoal, ivory and subtle muted-gold accents.",
    "longDescription": "Abstract painterly design with layered grey, charcoal, ivory and subtle muted-gold accents.",
    "features": [
      "Construction: Hand knotted",
      "Ground material: N/Z Wool",
      "Design material: Tensile Silk",
      "Quality: 10/33",
      "Size: 8.0 x 10.0 ft"
    ],
    "price": 0,
    "priceOnRequest": true,
    "category": "Hand-knotted",
    "categoryId": "hand-knotted",
    "subcategory": "Abstract",
    "tags": [
      "Hand-knotted",
      "Abstract",
      "Modern",
      "Distressed-look",
      "Grey",
      "Charcoal",
      "Ivory",
      "Muted Gold",
      "N/Z Wool",
      "Tensile Silk"
    ],
    "status": "active",
    "stock": 0,
    "stockKnown": false,
    "sku": "RC 51 A",
    "image": "/images/products/hands-carp-rc-51-a.jpg",
    "images": [
      "/images/products/hands-carp-rc-51-a.jpg"
    ],
    "variants": [],
    "specs": {
      "Construction": "Hand knotted",
      "Quality": "10/33",
      "Ground Material": "N/Z Wool",
      "Design Material": "Tensile Silk",
      "Size": "8.0 x 10.0 ft",
      "Design": "Abstract",
      "Colors": "Grey, Charcoal, Ivory, Muted Gold"
    },
    "rating": 0,
    "reviewCount": 0,
    "createdAt": "2026-11-20"
  },
  {
    "id": "hands-carp-hr-16",
    "name": "HR 16 Abstract Rug",
    "slug": "hands-carp-hr-16",
    "brand": "WEAVENTRA",
    "description": "Large-scale abstract distressed pattern with a warm beige and sand base, dark navy or charcoal areas, and rust-brown accents.",
    "longDescription": "Large-scale abstract distressed pattern with a warm beige and sand base, dark navy or charcoal areas, and rust-brown accents.",
    "features": [
      "Construction: Hand knotted",
      "Ground material: N/Z Wool",
      "Design material: Tensile Silk",
      "Quality: 10/33",
      "Size: 9.0 x 12.0 ft"
    ],
    "price": 0,
    "priceOnRequest": true,
    "category": "Hand-knotted",
    "categoryId": "hand-knotted",
    "subcategory": "Abstract",
    "tags": [
      "Hand-knotted",
      "Abstract",
      "Modern",
      "Distressed-look",
      "Beige",
      "Sand",
      "Navy",
      "Charcoal",
      "Rust Brown",
      "N/Z Wool",
      "Tensile Silk"
    ],
    "status": "active",
    "stock": 0,
    "stockKnown": false,
    "sku": "HR 16",
    "image": "/images/products/hands-carp-hr-16.jpg",
    "images": [
      "/images/products/hands-carp-hr-16.jpg"
    ],
    "variants": [],
    "specs": {
      "Construction": "Hand knotted",
      "Quality": "10/33",
      "Ground Material": "N/Z Wool",
      "Design Material": "Tensile Silk",
      "Size": "9.0 x 12.0 ft",
      "Design": "Abstract",
      "Colors": "Beige, Sand, Navy, Charcoal, Rust Brown"
    },
    "rating": 0,
    "reviewCount": 0,
    "createdAt": "2026-11-20"
  },
  {
    "id": "hands-carp-rc-22-b",
    "name": "RC 22 B Abstract Rug",
    "slug": "hands-carp-rc-22-b",
    "brand": "WEAVENTRA",
    "description": "Soft abstract organic forms with a light grey base, pale blue and ivory shapes, and muted beige-gold details.",
    "longDescription": "Soft abstract organic forms with a light grey base, pale blue and ivory shapes, and muted beige-gold details.",
    "features": [
      "Construction: Hand knotted",
      "Ground material: N/Z Wool",
      "Design material: Tensile Silk",
      "Quality: 10/33",
      "Size: 9.0 x 12.0 ft"
    ],
    "price": 0,
    "priceOnRequest": true,
    "category": "Hand-knotted",
    "categoryId": "hand-knotted",
    "subcategory": "Abstract",
    "tags": [
      "Hand-knotted",
      "Abstract",
      "Modern",
      "Organic",
      "Light Grey",
      "Pale Blue",
      "Ivory",
      "Muted Beige",
      "N/Z Wool",
      "Tensile Silk"
    ],
    "status": "active",
    "stock": 0,
    "stockKnown": false,
    "sku": "RC 22 B",
    "image": "/images/products/hands-carp-rc-22-b.jpg",
    "images": [
      "/images/products/hands-carp-rc-22-b.jpg"
    ],
    "variants": [],
    "specs": {
      "Construction": "Hand knotted",
      "Quality": "10/33",
      "Ground Material": "N/Z Wool",
      "Design Material": "Tensile Silk",
      "Size": "9.0 x 12.0 ft",
      "Design": "Abstract",
      "Colors": "Light Grey, Pale Blue, Ivory, Muted Beige"
    },
    "rating": 0,
    "reviewCount": 0,
    "createdAt": "2026-11-20"
  },
  {
    "id": "hands-carp-hr-22",
    "name": "HR 22 Abstract Rug",
    "slug": "hands-carp-hr-22",
    "brand": "WEAVENTRA",
    "description": "Weathered, layered abstract pattern in beige and taupe with dark charcoal accents and subtle muted green areas.",
    "longDescription": "Weathered, layered abstract pattern in beige and taupe with dark charcoal accents and subtle muted green areas.",
    "features": [
      "Construction: Hand knotted",
      "Ground material: N/Z Wool",
      "Design material: Tensile Silk",
      "Quality: 10/33",
      "Size: 9.0 x 12.0 ft"
    ],
    "price": 0,
    "priceOnRequest": true,
    "category": "Hand-knotted",
    "categoryId": "hand-knotted",
    "subcategory": "Abstract",
    "tags": [
      "Hand-knotted",
      "Abstract",
      "Modern",
      "Distressed-look",
      "Textured-look",
      "Beige",
      "Taupe",
      "Charcoal",
      "Muted Green",
      "N/Z Wool",
      "Tensile Silk"
    ],
    "status": "active",
    "stock": 0,
    "stockKnown": false,
    "sku": "HR 22",
    "image": "/images/products/hands-carp-hr-22.jpg",
    "images": [
      "/images/products/hands-carp-hr-22.jpg"
    ],
    "variants": [],
    "specs": {
      "Construction": "Hand knotted",
      "Quality": "10/33",
      "Ground Material": "N/Z Wool",
      "Design Material": "Tensile Silk",
      "Size": "9.0 x 12.0 ft",
      "Design": "Abstract",
      "Colors": "Beige, Taupe, Charcoal, Muted Green"
    },
    "rating": 0,
    "reviewCount": 0,
    "createdAt": "2026-11-20"
  },
  {
    "id": "hands-carp-sp-29-a",
    "name": "SP 29 Abstract Rug",
    "slug": "hands-carp-sp-29-a",
    "brand": "WEAVENTRA",
    "description": "Light neutral abstract design with flowing blue and beige accents over a soft grey and ivory ground.",
    "longDescription": "Light neutral abstract design with flowing blue and beige accents over a soft grey and ivory ground.",
    "features": [
      "Construction: Hand knotted",
      "Ground material: N/Z Handspun Wool",
      "Design material: Tensile Silk",
      "Quality: 10/33",
      "Size: 8.0 x 10.0 ft"
    ],
    "price": 0,
    "priceOnRequest": true,
    "category": "Hand-knotted",
    "categoryId": "hand-knotted",
    "subcategory": "Abstract",
    "tags": [
      "Hand-knotted",
      "Abstract",
      "Modern",
      "Organic",
      "Ivory",
      "Light Grey",
      "Blue",
      "Beige",
      "N/Z Handspun Wool",
      "Tensile Silk"
    ],
    "status": "active",
    "stock": 0,
    "stockKnown": false,
    "sku": "SP 29",
    "image": "/images/products/hands-carp-sp-29-a.jpg",
    "images": [
      "/images/products/hands-carp-sp-29-a.jpg"
    ],
    "variants": [],
    "specs": {
      "Construction": "Hand knotted",
      "Quality": "10/33",
      "Ground Material": "N/Z Handspun Wool",
      "Design Material": "Tensile Silk",
      "Size": "8.0 x 10.0 ft",
      "Design": "Abstract",
      "Colors": "Ivory, Light Grey, Blue, Beige"
    },
    "rating": 0,
    "reviewCount": 0,
    "createdAt": "2026-11-20"
  },
  {
    "id": "hands-carp-hr-13",
    "name": "HR 13 Abstract Rug",
    "slug": "hands-carp-hr-13",
    "brand": "WEAVENTRA",
    "description": "Subtle horizontal, weathered abstract texture in taupe, beige and warm sand, with soft ivory highlights and muted rust tones.",
    "longDescription": "Subtle horizontal, weathered abstract texture in taupe, beige and warm sand, with soft ivory highlights and muted rust tones.",
    "features": [
      "Construction: Hand knotted",
      "Ground material: N/Z Wool",
      "Design material: Tensile Silk",
      "Quality: 10/33",
      "Size: 9.0 x 12.0 ft"
    ],
    "price": 0,
    "priceOnRequest": true,
    "category": "Hand-knotted",
    "categoryId": "hand-knotted",
    "subcategory": "Abstract",
    "tags": [
      "Hand-knotted",
      "Abstract",
      "Modern",
      "Linear",
      "Distressed-look",
      "Taupe",
      "Beige",
      "Sand",
      "Ivory",
      "Muted Rust",
      "N/Z Wool",
      "Tensile Silk"
    ],
    "status": "active",
    "stock": 0,
    "stockKnown": false,
    "sku": "HR 13",
    "image": "/images/products/hands-carp-hr-13.jpg",
    "images": [
      "/images/products/hands-carp-hr-13.jpg"
    ],
    "variants": [],
    "specs": {
      "Construction": "Hand knotted",
      "Quality": "10/33",
      "Ground Material": "N/Z Wool",
      "Design Material": "Tensile Silk",
      "Size": "9.0 x 12.0 ft",
      "Design": "Abstract",
      "Colors": "Taupe, Beige, Sand, Ivory, Muted Rust"
    },
    "rating": 0,
    "reviewCount": 0,
    "createdAt": "2026-11-20"
  },
  {
    "id": "hands-carp-sp-24",
    "name": "SP 24 Geometric Rug",
    "slug": "hands-carp-sp-24",
    "brand": "WEAVENTRA",
    "description": "All-over irregular geometric grid or intersecting-line pattern in ivory and pale grey with subtle beige-gold lines.",
    "longDescription": "All-over irregular geometric grid or intersecting-line pattern in ivory and pale grey with subtle beige-gold lines.",
    "features": [
      "Construction: Hand knotted",
      "Ground material: N/Z Handspun Wool",
      "Design material: Bamboo Silk",
      "Quality: 10/33",
      "Size: 8.0 x 10.0 ft"
    ],
    "price": 0,
    "priceOnRequest": true,
    "category": "Hand-knotted",
    "categoryId": "hand-knotted",
    "subcategory": "Geometric",
    "tags": [
      "Hand-knotted",
      "Geometric",
      "Modern",
      "Linear",
      "Ivory",
      "Pale Grey",
      "Beige",
      "Muted Gold",
      "N/Z Handspun Wool",
      "Bamboo Silk"
    ],
    "status": "active",
    "stock": 0,
    "stockKnown": false,
    "sku": "SP 24",
    "image": "/images/products/hands-carp-sp-24.jpg",
    "images": [
      "/images/products/hands-carp-sp-24.jpg"
    ],
    "variants": [],
    "specs": {
      "Construction": "Hand knotted",
      "Quality": "10/33",
      "Ground Material": "N/Z Handspun Wool",
      "Design Material": "Bamboo Silk",
      "Size": "8.0 x 10.0 ft",
      "Design": "Geometric",
      "Colors": "Ivory, Pale Grey, Beige, Muted Gold"
    },
    "rating": 0,
    "reviewCount": 0,
    "createdAt": "2026-11-20"
  },
  {
    "id": "hands-carp-rc-51-b",
    "name": "RC 51 B Abstract Rug",
    "slug": "hands-carp-rc-51-b",
    "brand": "WEAVENTRA",
    "description": "Monochromatic abstract design with layered charcoal, dark grey and silver-grey brush-like areas on a pale grey ground.",
    "longDescription": "Monochromatic abstract design with layered charcoal, dark grey and silver-grey brush-like areas on a pale grey ground.",
    "features": [
      "Construction: Hand knotted",
      "Ground material: N/Z Wool",
      "Design material: Tensile Silk",
      "Quality: 10/33",
      "Size: 8.0 x 10.0 ft"
    ],
    "price": 0,
    "priceOnRequest": true,
    "category": "Hand-knotted",
    "categoryId": "hand-knotted",
    "subcategory": "Abstract",
    "tags": [
      "Hand-knotted",
      "Abstract",
      "Modern",
      "Distressed-look",
      "Pale Grey",
      "Silver Grey",
      "Charcoal",
      "Dark Grey",
      "N/Z Wool",
      "Tensile Silk"
    ],
    "status": "active",
    "stock": 0,
    "stockKnown": false,
    "sku": "RC 51 B",
    "image": "/images/products/hands-carp-rc-51-b.jpg",
    "images": [
      "/images/products/hands-carp-rc-51-b.jpg"
    ],
    "variants": [],
    "specs": {
      "Construction": "Hand knotted",
      "Quality": "10/33",
      "Ground Material": "N/Z Wool",
      "Design Material": "Tensile Silk",
      "Size": "8.0 x 10.0 ft",
      "Design": "Abstract",
      "Colors": "Pale Grey, Silver Grey, Charcoal, Dark Grey"
    },
    "rating": 0,
    "reviewCount": 0,
    "createdAt": "2026-11-20"
  },
  {
    "id": "hands-carp-sp-26",
    "name": "SP 26 Abstract Rug",
    "slug": "hands-carp-sp-26",
    "brand": "WEAVENTRA",
    "description": "Fluid, stone-like abstract pattern with pale beige, cream and soft blue-grey areas, plus darker blue-grey vein-like accents.",
    "longDescription": "Fluid, stone-like abstract pattern with pale beige, cream and soft blue-grey areas, plus darker blue-grey vein-like accents.",
    "features": [
      "Construction: Hand knotted",
      "Ground material: Handspun Wool",
      "Design material: Bamboo Silk & Tensile Silk",
      "Quality: 10/33",
      "Size: 8.0 x 10.0 ft"
    ],
    "price": 0,
    "priceOnRequest": true,
    "category": "Hand-knotted",
    "categoryId": "hand-knotted",
    "subcategory": "Abstract",
    "tags": [
      "Hand-knotted",
      "Abstract",
      "Modern",
      "Organic",
      "Cream",
      "Beige",
      "Blue Grey",
      "Dark Slate",
      "Handspun Wool",
      "Bamboo Silk & Tensile Silk"
    ],
    "status": "active",
    "stock": 0,
    "stockKnown": false,
    "sku": "SP 26",
    "image": "/images/products/hands-carp-sp-26.jpg",
    "images": [
      "/images/products/hands-carp-sp-26.jpg"
    ],
    "variants": [],
    "specs": {
      "Construction": "Hand knotted",
      "Quality": "10/33",
      "Ground Material": "Handspun Wool",
      "Design Material": "Bamboo Silk & Tensile Silk",
      "Size": "8.0 x 10.0 ft",
      "Design": "Abstract",
      "Colors": "Cream, Beige, Blue Grey, Dark Slate"
    },
    "rating": 0,
    "reviewCount": 0,
    "createdAt": "2026-11-20"
  },
  {
    "id": "hands-carp-sp-29-b",
    "name": "SP 29 Abstract Rug",
    "slug": "hands-carp-sp-29-b",
    "brand": "WEAVENTRA",
    "description": "Soft abstract organic design in ivory and beige with pale blue-grey and muted taupe patches; lighter and more subdued than the first SP 29 sample.",
    "longDescription": "Soft abstract organic design in ivory and beige with pale blue-grey and muted taupe patches; lighter and more subdued than the first SP 29 sample.",
    "features": [
      "Construction: Hand knotted",
      "Ground material: Handspun Wool",
      "Design material: Bamboo Silk & Tensile Silk",
      "Quality: 10/33",
      "Size: 8.0 x 10.0 ft"
    ],
    "price": 0,
    "priceOnRequest": true,
    "category": "Hand-knotted",
    "categoryId": "hand-knotted",
    "subcategory": "Abstract",
    "tags": [
      "Hand-knotted",
      "Abstract",
      "Modern",
      "Organic",
      "Ivory",
      "Beige",
      "Pale Blue Grey",
      "Taupe",
      "Handspun Wool",
      "Bamboo Silk & Tensile Silk"
    ],
    "status": "active",
    "stock": 0,
    "stockKnown": false,
    "sku": "SP 29",
    "image": "/images/products/hands-carp-sp-29-b.jpg",
    "images": [
      "/images/products/hands-carp-sp-29-b.jpg"
    ],
    "variants": [],
    "specs": {
      "Construction": "Hand knotted",
      "Quality": "10/33",
      "Ground Material": "Handspun Wool",
      "Design Material": "Bamboo Silk & Tensile Silk",
      "Size": "8.0 x 10.0 ft",
      "Design": "Abstract",
      "Colors": "Ivory, Beige, Pale Blue Grey, Taupe"
    },
    "rating": 0,
    "reviewCount": 0,
    "createdAt": "2026-11-20"
  }
]

function skuFromSlug(slug: string, idx: number): string {
  return rawProducts[idx].sku
}

const handsCarpProducts: Product[] = rawProducts.map((p, i) => ({
  ...p,
  specs: p.specs as unknown as Record<string, string>,
  tags: [p.category, p.subcategory ?? "", ...p.tags, "weaventra-rug"].filter(Boolean),
  status: "active" as const,
  sku: skuFromSlug(p.slug, i),
  variants: (p.variants as Product["variants"]).map((v) => ({ ...v, type: v.type as "size" | "color" })),
}))

export const products: Product[] = handsCarpProducts

// ── Navigation ──────────────────────────────────────────────────────
export const storeNavItems = [
  { title: "Hand-knotted", href: "/categories/hand-knotted" },
  { title: "Hand-tufted", href: "/categories/hand-tufted" },
  { title: "Flatwoven", href: "/categories/flatwoven" },
  { title: "Kilim", href: "/categories/kilim" },
  { title: "Handwoven", href: "/categories/handwoven" },
]

const findProduct = (id: string) => products.find((p) => p.id === id)!

export const cartItems: CartItem[] = []
export const savedForLaterItems: CartItem[] = []
export const wishlistItems: WishlistItem[] = []

// ── Product Bundles (Frequently Bought Together) ────────────────────
const bundleMap: Record<string, string[]> = {}

export const productBundles: ProductBundle[] = Object.entries(bundleMap).map(
  ([productId, companionIds]) => ({ productId, companionIds })
)

// ── Reviews ─────────────────────────────────────────────────────────
export const reviews: Review[] = []

// ── Product Questions ───────────────────────────────────────────────
export const productQuestions: ProductQuestion[] = []


// ── Admin: Customers ────────────────────────────────────────────────


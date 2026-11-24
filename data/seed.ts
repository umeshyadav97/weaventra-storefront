import type {
  Category,
  CartItem,
  ProductBundle,
  ProductQuestion,
  Review,
  WishlistItem,
} from "@/types"
import { rugProducts } from "@/data/rug-products"
import { products as handsCarpProducts } from "@/data/weaventra-hands-carp-products"
import galleryImageData from "@/data/weaventra-product-gallery-images.json"
import promptImageData from "@/data/weaventra-prompt-images.json"

export function getEstimatedDelivery(): string {
  const now = new Date()
  const start = new Date(now.getTime() + 4 * 86400000)
  const end = new Date(now.getTime() + 7 * 86400000)
  const format = (date: Date) => date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  return `${format(start)} – ${format(end)}`
}

// The storefront now uses the rug catalogue only. The previous apparel seed is removed.
// Keep the existing rug records and the HandsCarp sample, and include every usable
// image from the 40-entry WEAVENTRA image dataset as a catalogue record.
const baseProducts = [...handsCarpProducts, ...rugProducts]

const promptImageCategories: Record<number, string> = {
  1: "Hand-tufted",
  2: "Handwoven",
  3: "Hand-tufted",
  4: "Hand-knotted",
  5: "Kilim",
  6: "Hand-knotted",
  7: "Hand-tufted",
  8: "Flatweave",
  9: "Kilim",
  10: "Handwoven",
  11: "Dhurrie",
  12: "Hand-knotted",
  13: "Hand-tufted",
  14: "Handwoven",
  15: "Hand-knotted",
  16: "Hand-knotted",
  17: "Handwoven",
  18: "Kilim",
  19: "Hand-tufted",
  20: "Hand-knotted",
  21: "Flatweave",
  22: "Kilim",
  23: "Handwoven",
  24: "Dhurrie",
  25: "Flatweave",
  26: "Kilim",
  27: "Hand-tufted",
  28: "Hand-knotted",
  29: "Dhurrie",
  30: "Handwoven",
  31: "Hand-knotted",
  32: "Kilim",
  33: "Hand-knotted",
  34: "Hand-knotted",
  35: "Handwoven",
  36: "Hand-knotted",
  37: "Hand-knotted",
  38: "Hand-tufted",
  39: "Handwoven",
  40: "Hand-knotted",
}

// The 14 collection/catalogue prompt images are already represented by the
// curated gallery records below. Add only the remaining prompt images here.
const representedImagePaths = new Set([
  ...baseProducts.map((product) => product.image),
  ...galleryImageData.map((entry) => entry.image),
])

const promptImageProducts = promptImageData.flatMap((entry) => {
  if (representedImagePaths.has(entry.image)) return []
  representedImagePaths.add(entry.image)

  const category = promptImageCategories[entry.id]
  const slugTitle = entry.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
  const imageProduct = rugProducts[0]
  return [{
    ...imageProduct,
    id: `WV-DATASET-${String(entry.id).padStart(2, "0")}`,
    name: entry.title,
    slug: `dataset-${entry.id}-${slugTitle}`,
    description: `WEAVENTRA catalogue image from ${entry.section}. This is an illustrative reference; confirm product details and availability with us.`,
    longDescription: undefined,
    features: undefined,
    category,
    subcategory: entry.section,
    tags: [category, entry.section, "weaventra-image-dataset"],
    status: "active" as const,
    price: 0,
    priceOnRequest: true,
    salePrice: undefined,
    stock: 0,
    sku: `WV-DATASET-${String(entry.id).padStart(2, "0")}`,
    image: entry.image,
    images: [entry.image],
    variants: [],
    specs: { "Dataset section": entry.section, Source: entry.source },
    rating: 0,
    reviewCount: 0,
    createdAt: "2026-01-01",
  }]
})

export const products = [...baseProducts, ...promptImageProducts]

// The product catalogue shows each primary rug photo and each curated gallery
// image as a filterable entry. Gallery images inherit the category of their linked rug.
export const catalogueProducts = [
  ...products.map((product) => ({ ...product, images: [product.image] })),
  ...galleryImageData.flatMap((entry) => {
    const product = rugProducts.find((item) => item.id === entry.product_id)
    if (!product) return []
    return [{
      ...product,
      name: entry.title,
      image: entry.image,
      images: [entry.image],
    }]
  }),
]

const categoryDetails = [
  { name: "Hand-knotted", slug: "hand-knotted", description: "Rugs made by tying individual knots by hand." },
  { name: "Hand-tufted", slug: "hand-tufted", description: "Rugs created by tufting yarn into a stretched foundation." },
  { name: "Handwoven", slug: "handwoven", description: "Rugs woven by hand on a loom." },
  { name: "Dhurrie", slug: "dhurrie", description: "Flat, reversible rugs woven for everyday use." },
  { name: "Flatweave", slug: "flatweave", description: "Low-profile rugs woven without a pile." },
  { name: "Kilim", slug: "kilim", description: "Patterned flatwoven rugs with traditional character." },
]

export const categories: Category[] = categoryDetails.flatMap((category, index) => {
  const categoryProducts = catalogueProducts.filter(
    (product) => product.category.toLowerCase() === category.name.toLowerCase(),
  )
  if (categoryProducts.length === 0) return []

  const subcategories = [...new Set(
    categoryProducts
      .map((product) => product.subcategory)
      .filter((subcategory): subcategory is string => Boolean(subcategory))
      .filter((subcategory) => subcategory.toLowerCase() !== category.name.toLowerCase()),
  )]

  return [{
    id: `rug-category-${index + 1}`,
    ...category,
    image: categoryProducts[0].image,
    subcategories: subcategories.map((name) => ({
      name,
      slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    })),
  }]
})

export const storeNavItems = categories.map((category) => ({
  title: category.name,
  href: `/products?type=${category.slug}`,
}))

export const cartItems: CartItem[] = []
export const savedForLaterItems: CartItem[] = []
export const wishlistItems: WishlistItem[] = []
export const productBundles: ProductBundle[] = []
export const reviews: Review[] = []
export const productQuestions: ProductQuestion[] = []

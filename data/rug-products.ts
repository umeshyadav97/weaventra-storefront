import rugData from "./weaventra-15-products.json"
import galleryImageData from "./weaventra-product-gallery-images.json"
import type { Product } from "@/types"

const productImages: Record<string, string> = {
  "WV-RUG-001": "/images/products/pexels/heritage-bloom.jpeg",
  "WV-RUG-002": "/images/products/pexels/terra-form.jpeg",
  "WV-RUG-003": "/images/products/pexels/nordic-weave.jpeg",
  "WV-RUG-004": "/images/products/pexels/indigo-nomad.jpeg",
  "WV-RUG-005": "/images/products/pexels/earthline.jpeg",
  "WV-RUG-006": "/images/products/pexels/royal-garnet.jpeg",
  "WV-RUG-007": "/images/products/pexels/botanical-calm.jpeg",
  "WV-RUG-008": "/images/products/pexels/monochrome-story.jpeg",
  "WV-RUG-009": "/images/products/pexels/lavender-terrain.jpeg",
  "WV-RUG-010": "/images/products/pexels/vintage-revival.jpeg",
  "WV-RUG-011": "/images/products/pexels/cloud-texture.jpeg",
  "WV-RUG-012": "/images/products/pexels/modern-grid.jpeg",
  "WV-RUG-013": "/images/products/pexels/jaipur-strata.jpeg",
  "WV-RUG-014": "/images/products/pexels/ivory-majesty.jpeg",
  "WV-RUG-015": "/images/products/pexels/desert-horizon.jpeg",
}

const galleryImagesByProduct: Record<string, string[]> = {}
for (const entry of galleryImageData) {
  galleryImagesByProduct[entry.product_id] ??= []
  galleryImagesByProduct[entry.product_id].push(entry.image)
}

// Keep the original 15 product records and lead images. The prompt catalogue
// photos are additional gallery images, with their source links in the dataset.
export const rugProducts: Product[] = rugData.map((rug) => {
  const image = productImages[rug.id] ?? "/rug-flatwoven.png"

  return {
    id: rug.id,
    name: rug.name,
    slug: rug.slug,
    description: rug.description,
    brand: "WEAVENTRA",
    price: rug.price ?? 0,
    priceOnRequest: rug.price === null,
    category: rug.category,
    subcategory: rug.technique,
    tags: [rug.category, rug.technique, rug.style, ...rug.materials, "weaventra-rug"],
    status: rug.status as Product["status"],
    stock: 0,
    sku: rug.id,
    image,
    images: [image, ...(galleryImagesByProduct[rug.id] ?? [])],
    variants: [],
    specs: {
      Technique: rug.technique,
      Materials: rug.materials.join(", "),
      Style: rug.style,
      Colors: rug.colors.join(", "),
      Sizes: rug.availableSizes.join(", "),
    },
    rating: 0,
    reviewCount: 0,
    createdAt: "2026-01-01",
  }
})

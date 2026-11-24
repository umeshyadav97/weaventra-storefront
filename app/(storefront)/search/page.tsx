import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Clock, TrendingUp } from "lucide-react"
import { SearchBar } from "@/components/storefront/search-bar"
import { ProductCard } from "@/components/storefront/product-card"
import { categories, products } from "@/data/seed"

export const metadata: Metadata = { title: "Search" }

const recentSearches = [
  "hand-knotted rug",
  "wool rug",
  "kilim rug",
  "flatweave rug",
  "rug runner",
]

const trendingSearches = [
  "abstract rug",
  "hand-tufted rug",
  "jute rug",
  "traditional rug",
  "wool runner",
]

const popularCategories = categories.map((category) => ({
  name: category.name,
  href: `/products?type=${category.slug}`,
  image: category.image,
}))

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams
  const query = q.trim().toLowerCase()

  const results = query
    ? products.filter(
        (p) =>
          p.status === "active" &&
          (p.name.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query) ||
            p.tags.some((t) => t.toLowerCase().includes(query)))
      )
    : []

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 animate-fade-in">
      <h1 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">Search Products</h1>

      <div className="mb-8">
        <SearchBar products={products.filter((p) => p.status === "active")} />
      </div>

      {query && (
        <div>
          <p className="mb-4 text-sm text-muted-foreground">
            {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{q}&rdquo;
          </p>
          {results.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {results.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-lg text-muted-foreground">
                No products found. Try a different search term.
              </p>
            </div>
          )}
        </div>
      )}

      {!query && (
        <div className="space-y-10">
          {/* Recent Searches */}
          <section>
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Clock className="size-4" />
              Recent Searches
            </div>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((term) => (
                <Link
                  key={term}
                  href={`/search?q=${encodeURIComponent(term)}`}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {term}
                </Link>
              ))}
            </div>
          </section>

          {/* Trending Searches */}
          <section>
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <TrendingUp className="size-4" />
              Trending Searches
            </div>
            <div className="flex flex-wrap gap-2">
              {trendingSearches.map((term) => (
                <Link
                  key={term}
                  href={`/search?q=${encodeURIComponent(term)}`}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <span className="flex items-center gap-1.5">
                    <TrendingUp className="size-3 text-primary" />
                    {term}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Popular Categories */}
          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">Popular Categories</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {popularCategories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group relative overflow-hidden rounded-xl"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-lg font-semibold text-white">
                      {category.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

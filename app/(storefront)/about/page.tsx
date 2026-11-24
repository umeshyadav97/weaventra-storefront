import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import promptImages from "@/data/weaventra-prompt-images.json"
import { EditorialImageGrid } from "@/components/storefront/editorial-image-grid"

export const metadata: Metadata = { title: "Our Story" }

const values = ["Experience", "Trust", "Craftsmanship", "A passion for rugs"]

export default function AboutPage() {
  return (
    <div className="pb-14 sm:pb-20">
      <section
        id="our-story"
        className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:px-8 lg:py-20"
      >
        <div className="order-2 lg:order-1">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Our Story · Since 1990
          </p>
          <h1 className="max-w-xl font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Rooted in tradition. Designed for today.
          </h1>
          <p className="mt-6 text-lg font-medium text-foreground sm:text-xl">
            A legacy of craftsmanship since 1990
          </p>
          <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            <p>
              WEAVENTRA is built on a family legacy that began in 1990, when
              our father started his journey in the carpet and rug industry.
            </p>
            <p>
              What began with a passion for rugs gradually grew into decades of
              experience, knowledge and respect for the art of carpet making.
              Over the years, he developed a deep understanding of materials,
              weaving techniques, designs and the craftsmanship that goes into
              creating a beautiful rug.
            </p>
            <p>
              Today, we carry that legacy forward with a fresh perspective —
              bringing together traditional craftsmanship and contemporary
              design.
            </p>
          </div>
          <Link
            href="/rug-process"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            Discover our rug process <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="aspect-[4/3] overflow-hidden rounded-md bg-muted sm:aspect-[5/4]">
            <img
              src="/weaventra-our-story-living-room.png"
              alt="Warm modern living room featuring a patterned WEAVENTRA rug"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-4 rounded-md border border-border bg-background/95 px-4 py-3 shadow-sm sm:bottom-5 sm:left-5 sm:px-5">
            <p className="font-heading text-2xl font-semibold text-foreground">1990</p>
            <p className="text-xs text-muted-foreground">Where our story began</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-14 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              What a rug means to us
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              More than home décor
            </h2>
          </div>
          <div>
            <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              At WEAVENTRA, we believe a rug is more than just a piece of home
              décor. It brings warmth, character and personality into a space.
              Every design reflects our appreciation for detail, quality and
              the people behind the craft.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {values.map((value) => (
                <span
                  key={value}
                  className="rounded-sm border border-border bg-background px-3 py-2 text-xs font-medium text-foreground sm:text-sm"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EditorialImageGrid
        title="The people and materials behind every rug"
        description="A small look at the care, experience and hands-on work that continue to shape our family’s craft."
        images={promptImages.filter(({ id }) => id >= 33 && id <= 36)}
      />

      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8">
        <div className="rounded-md bg-foreground px-6 py-8 text-background sm:px-10 sm:py-10">
          <p className="max-w-3xl font-heading text-xl leading-relaxed sm:text-2xl">
            Our journey continues with the same values on which it began:
            <span className="font-semibold"> experience, trust, craftsmanship and a passion for creating beautiful rugs.</span>
          </p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-background/70">
            WEAVENTRA — Rooted in Tradition. Designed for Today.
          </p>
        </div>
      </section>
    </div>
  )
}

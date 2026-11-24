import type { Metadata } from "next"

export const metadata: Metadata = { title: "Our Rug Process" }

const processSteps = [
  {
    title: "Colour matching",
    image: "/rug-process/colour-match-ars1400-check-1600w.webp",
    alt: "Artisan comparing rug colors against a wool shade card",
    tags: ["Design planning", "Colour accuracy"],
  },
  {
    title: "Preparing the yarn",
    image: "/rug-process/different-shades-of-wool.webp",
    alt: "Bundles of wool yarn in different shades drying outdoors",
    tags: ["Yarn preparation", "Shade consistency"],
  },
  {
    title: "Wool selection",
    image: "/rug-process/1.jpg",
    alt: "Wool yarn sorted into natural and dyed colors",
    tags: ["Material selection", "Natural wool"],
  },
  {
    title: "Dyeing",
    image: "/rug-process/Dyeing.jpg",
    alt: "Wool yarn being dyed by hand",
    tags: ["Colouring", "Small-batch craft"],
  },
  {
    title: "Weaving techniques",
    image: "/rug-process/hand-knotting-weaving.jpg",
    alt: "Artisan hand-knotting a rug on a loom",
    tags: ["Weaving craft", "Traditional techniques"],
  },
  {
    title: "Weaving",
    image: "/rug-process/Weaving.jpg",
    alt: "Artisan weaving a rug on a loom",
    tags: ["Handwoven", "Skilled craft"],
  },
  {
    title: "Hand-tufting detail",
    image: "/rug-process/hand-tufting-detail.avif",
    alt: "Close view of the hand-tufting process",
    tags: ["Hand-tufted", "Artisan technique"],
  },
  {
    title: "Finishing cuts",
    image: "/rug-process/Cutting.jpg",
    alt: "Artisan making a careful finishing cut in a rug",
    tags: ["Hand finishing", "Detail work"],
  },
  {
    title: "Clipping",
    image: "/rug-process/Clipping.jpg",
    alt: "Artisan clipping the pile of a finished rug",
    tags: ["Pile finishing", "Even texture"],
  },
  {
    title: "Washing",
    image: "/rug-process/Washing.jpg",
    alt: "Rugs being washed by hand in an open washing area",
    tags: ["Careful washing", "Final clean"],
  },
  {
    title: "Stretching",
    image: "/rug-process/Streching.jpg",
    alt: "Artisan stretching a rug flat for finishing",
    tags: ["Shape setting", "Quality check"],
  },
  {
    title: "Binding",
    image: "/rug-process/Binding.jpg",
    alt: "Artisan hand-binding the edge of a rug",
    tags: ["Edge finishing", "Durable details"],
  },
  {
    title: "Rug detailing",
    image: "/rug-process/rug-detailing.jpg",
    alt: "Artisan carefully trimming details into a patterned rug",
    tags: ["Hand finishing", "Pattern detailing"],
  },
  {
    title: "Rug making",
    image: "/rug-process/rug-making-process.avif",
    alt: "Artisans working through the rug-making process",
    tags: ["Rug making", "Craft process"],
  },
  {
    title: "Hand-tufted rug samples",
    image: "/rug-process/hand-tufting-samples.webp",
    alt: "Artisan creating a hand-tufted rug sample",
    tags: ["Hand-tufted", "Sample making"],
  },
  {
    title: "Rug finishing",
    image: "/rug-process/rug-finishing.jpeg",
    alt: "Artisans inspecting and finishing rugs by hand",
    tags: ["Final finishing", "Quality inspection"],
  },
]

export default function RugProcessPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Made with care, at every step
        </p>
        <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          The rug-making process
        </h1>
        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          Every WEAVENTRA rug begins with carefully selected materials and a thoughtful design. From colour planning and yarn preparation to skilled craftsmanship and final finishing, each stage brings together traditional techniques, attention to detail and a commitment to quality.
        </p>
      </header>

      <section aria-label="Rug-making steps">
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-10">
          {processSteps.map((step, index) => (
            <article key={step.title} className="group min-w-0">
              <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-muted">
                <img
                  src={step.image}
                  alt={step.alt}
                  loading={index < 4 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="pt-3">
                <h2 className="text-sm font-semibold text-foreground sm:text-base">
                  {step.title}
                </h2>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-border px-2 py-1 text-[10px] leading-none text-muted-foreground sm:text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

import Link from "next/link"

export type EditorialImage = {
  id: number
  title: string
  image: string
  source: string
}

export function EditorialImageGrid({
  title,
  description,
  images,
  columns = 4,
}: {
  title: string
  description?: string
  images: EditorialImage[]
  columns?: 3 | 4 | 6
}) {
  const columnClass = {
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    6: "lg:grid-cols-3 xl:grid-cols-6",
  }[columns]

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header className="mb-6 max-w-2xl">
        <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          {title}
        </h2>
        {description && <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>}
      </header>
      <div className={`grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 ${columnClass}`}>
        {images.map((item) => (
          <article key={item.id} className="group min-w-0">
            <div className="aspect-[4/3] overflow-hidden rounded-md bg-muted">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <h3 className="pt-2.5 text-sm font-medium text-foreground">{item.title}</h3>
            {item.source.startsWith("https://") && (
              <Link
                href={item.source}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block text-xs text-muted-foreground underline-offset-4 hover:underline"
              >
                Photo source
              </Link>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

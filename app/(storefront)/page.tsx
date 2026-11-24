import Link from "next/link";
import { HeroBanner } from "@/components/storefront/hero-banner";
import { CategoryGrid } from "@/components/storefront/category-grid";
import { RecentlyViewed } from "@/components/storefront/recently-viewed";
import { categories } from "@/data/seed";
import { ArrowRight } from "lucide-react";
import promptImages from "@/data/weaventra-prompt-images.json";
import { EditorialImageGrid } from "@/components/storefront/editorial-image-grid";

const promptImagesFor = (firstId: number, lastId: number) =>
  promptImages.filter(({ id }) => id >= firstId && id <= lastId);

const rugCategories = categories.map((category) => ({
  ...category,
  href: `/products?type=${category.slug}`,
}))

function SectionHeader({
  title,
  action,
}: {
  title: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="mb-6 flex items-end justify-between">
      <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
        {title}
      </h2>
      {action && (
        <Link
          href={action.href}
          className="flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
        >
          {action.label}
          <ArrowRight className="size-3" />
        </Link>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <HeroBanner />

      {/* Categories */}
      <section className="mx-auto w-full max-w-full px-4 py-6 sm:px-6 sm:py-14 lg:px-8">
        <SectionHeader
          title="Shop by Rug Technique"
          action={{ label: "View All", href: "/products" }}
        />
        <CategoryGrid categories={rugCategories} />
      </section>

      <EditorialImageGrid
        title="Rugs for considered spaces"
        description="Explore a few of the interiors and palettes that inspire the WEAVENTRA collection."
        images={promptImagesFor(2, 5)}
      />

      <EditorialImageGrid
        title="Find your style"
        description="From expressive patterns to quieter textures, discover a look that feels at home with you."
        images={promptImagesFor(13, 18)}
        columns={6}
      />

      <EditorialImageGrid
        title="Room inspiration"
        description="Ideas for bringing softness, colour and character to the rooms you live in every day."
        images={promptImagesFor(19, 24)}
        columns={6}
      />

      {/* Recently Viewed */}
      <RecentlyViewed />
    </div>
  );
}

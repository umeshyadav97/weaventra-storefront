"use client";

import { useState, useMemo, useEffect } from "react";
import type { Product } from "@/types";
import { ProductCard } from "@/components/storefront/product-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LayoutGrid, List, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  SORT_OPTIONS,
  getSortLabel,
  type ActiveChip,
} from "@/hooks/use-product-filters";

interface ProductGridProps {
  products: Product[];
  totalCount?: number;
  defaultView?: "grid" | "list";
  activeChips?: ActiveChip[];
  onRemoveChip?: (chip: ActiveChip) => void;
  onClearAll?: () => void;
  sortValue?: string;
  onSortChange?: (value: string) => void;
  /** Hide the sort control (used when mobile bottom bar owns sort) */
  hideSortOnMobile?: boolean;
}

const VIEW_STORAGE_KEY = "plp-view-mode";

function getStoredView(): "grid" | "list" | null {
  if (typeof window === "undefined") return null;
  try {
    const v = localStorage.getItem(VIEW_STORAGE_KEY);
    if (v === "grid" || v === "list") return v;
  } catch {
    // ignore
  }
  return null;
}

export function ProductGrid({
  products,
  defaultView = "grid",
  activeChips = [],
  onRemoveChip,
  onClearAll,
  sortValue,
  onSortChange,
  hideSortOnMobile = false,
}: ProductGridProps) {
  // View toggle with localStorage persistence
  const [view, setView] = useState<"grid" | "list">(defaultView);
  const [compareSelected, setCompareSelected] = useState<string[]>([]);

  // Hydrate from localStorage on mount
  useEffect(() => {
    const stored = getStoredView();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- read the saved view from localStorage after mount
    if (stored) setView(stored);
  }, []);

  // Persist view changes
  function handleViewChange(v: "grid" | "list") {
    setView(v);
    try {
      localStorage.setItem(VIEW_STORAGE_KEY, v);
    } catch {
      /* ignore */
    }
  }

  // Sort is handled externally via the hook, but we also support internal sort for
  // backward-compat with the /products page. If sortValue is provided, use external sort.
  const [internalSort, setInternalSort] = useState("popular");
  const effectiveSort = sortValue ?? internalSort;

  const sorted = useMemo(() => {
    // If sort is handled externally (sortValue + products already sorted), just pass through
    if (sortValue !== undefined) return products;
    // Otherwise sort internally
    return [...products].sort((a, b) => {
      switch (internalSort) {
        case "price-asc":
          return (a.salePrice ?? a.price) - (b.salePrice ?? b.price);
        case "price-desc":
          return (b.salePrice ?? b.price) - (a.salePrice ?? a.price);
        case "newest":
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        case "rating":
          return b.rating - a.rating;
        default:
          return b.reviewCount - a.reviewCount;
      }
    });
  }, [products, sortValue, internalSort]);

  const imageCards = useMemo(
    () =>
      sorted.flatMap((product) =>
        (product.images?.length ? product.images : [product.image]).map(
          (image, imageIndex) => ({
            product,
            image,
            imageIndex,
          }),
        ),
      ),
    [sorted],
  );
  // Catalogue images are a small curated set, so render the full filtered result
  // immediately instead of hiding everything after an initial 15-image batch.
  const displayed = imageCards;

  function handleCompareToggle(productId: string) {
    setCompareSelected((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : prev.length < 4
          ? [...prev, productId]
          : prev,
    );
  }

  function handleSortChange(v: string | null) {
    if (!v) return;
    if (onSortChange) {
      onSortChange(v);
    } else {
      setInternalSort(v);
    }
  }

  const displayCount = imageCards.length;

  return (
    <div className="flex flex-col gap-4">
      {/* Applied filter chips */}
      {activeChips.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 overflow-x-auto scrollbar-none lg:overflow-visible">
          {activeChips.map((chip) => (
            <Badge
              key={`${chip.type}-${chip.value}`}
              variant="secondary"
              className="shrink-0 gap-1.5 rounded-full pr-1"
            >
              {chip.label}
              <button
                onClick={() => onRemoveChip?.(chip)}
                className="ml-0.5 rounded-full p-0.5 hover:bg-muted-foreground/20 transition-colors"
                aria-label={`Remove ${chip.label} filter`}
              >
                <X className="size-3" />
              </button>
            </Badge>
          ))}
          <button
            onClick={onClearAll}
            className="shrink-0 text-xs font-medium text-primary hover:underline"
          >
            Clear all
          </button>
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {displayed.length} of {displayCount} product image
          {displayCount !== 1 ? "s" : ""}
        </p>
        {/* <div className={cn("flex items-center gap-2", hideSortOnMobile && "hidden lg:flex")}>
          <span className="text-sm text-muted-foreground whitespace-nowrap">Sort by:</span>
          <Select value={effectiveSort} onValueChange={handleSortChange}>
            <SelectTrigger className="w-48">
              <SelectValue>{getSortLabel(effectiveSort)}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {SORT_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex rounded-xl border border-border">
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    variant={view === "grid" ? "secondary" : "ghost"}
                    size="icon"
                    className="rounded-r-none"
                    onClick={() => handleViewChange("grid")}
                    aria-label="Grid view"
                  >
                    <LayoutGrid className="size-4" />
                  </Button>
                }
              />
              <TooltipContent>Grid view</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    variant={view === "list" ? "secondary" : "ghost"}
                    size="icon"
                    className="rounded-l-none"
                    onClick={() => handleViewChange("list")}
                    aria-label="List view"
                  >
                    <List className="size-4" />
                  </Button>
                }
              />
              <TooltipContent>List view</TooltipContent>
            </Tooltip>
          </div>
        </div> */}
      </div>

      {displayed.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-lg text-muted-foreground">
            No products match your filters.
          </p>
          {onClearAll && (
            <Button variant="outline" className="mt-4" onClick={onClearAll}>
              Clear all filters
            </Button>
          )}
        </div>
      ) : view === "grid" ? (
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {displayed.map(({ product, image, imageIndex }) => (
            <ProductCard
              key={`${product.id}-${imageIndex}-${image}`}
              product={{ ...product, image, images: [image] }}
              view="grid"
              showCompare
              isCompareSelected={compareSelected.includes(product.id)}
              onCompareToggle={handleCompareToggle}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {displayed.map(({ product, image, imageIndex }) => (
            <ProductCard
              key={`${product.id}-${imageIndex}-${image}`}
              product={{ ...product, image, images: [image] }}
              view="list"
            />
          ))}
        </div>
      )}

      {/* Floating compare bar */}
      {compareSelected.length >= 2 && (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80 shadow-lg animate-fade-in-up">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="text-sm font-semibold">
                {compareSelected.length}
              </Badge>
              <span className="text-sm font-medium text-foreground">
                product{compareSelected.length !== 1 ? "s" : ""} selected
              </span>
              <button
                onClick={() => setCompareSelected([])}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Clear
              </button>
            </div>
            <Button
              size="sm"
              render={<Link href="/contact" />}
            >
              Ask about selected rugs
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

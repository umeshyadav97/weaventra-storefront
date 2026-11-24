"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MiniCartDrawer } from "@/components/storefront/mini-cart-drawer";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { CurrencySelector } from "@/components/layout/currency-selector";
import { SearchBar } from "@/components/storefront/search-bar";
import { products } from "@/data/seed";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/cart-context";

const brandNavItems = [
  { title: "Rug Process", href: "/rug-process" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export function StoreHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [miniCartOpen, setMiniCartOpen] = useState(false);
  const { count: cartCount } = useCart();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 transition-all duration-200",
          scrolled && "shadow-sm",
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "flex items-center gap-4 transition-all duration-200",
              scrolled ? "h-14" : "h-16",
            )}
          >
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="touch-target md:hidden"
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>

            {/* Logo */}
            <Link
              href="/"
              className="flex shrink-0 items-center gap-2 font-heading font-bold"
            >
              <Image
                src="/weaventra.png"
                alt=""
                width={32}
                height={32}
                className={cn(
                  "object-contain transition-all",
                  scrolled ? "h-7 w-7" : "h-8 w-8",
                )}
              />
              <span
                className={cn(
                  "text-foreground transition-all tracking-tight",
                  scrolled ? "text-base" : "text-lg",
                )}
              >
                WEAVENTRA
              </span>
            </Link>

            {/* Desktop navigation */}
            <nav
              className="hidden md:flex md:items-center md:gap-1"
              aria-label="Main navigation"
            >
              <Link
                href="/products"
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Products
              </Link>
              {brandNavItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* Search bar (desktop) */}
            <div className="hidden flex-1 md:block md:max-w-sm lg:max-w-md">
              <SearchBar products={products} />
            </div>

            <div className="flex-1 md:hidden" />

            {/* Action icons */}
            <div className="flex items-center gap-0.5">
              {/* Mobile search toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="touch-target md:hidden"
                aria-label={searchOpen ? "Close search" : "Open search"}
                onClick={() => setSearchOpen(!searchOpen)}
              >
                {searchOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Search className="h-5 w-5" />
                )}
              </Button>

              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon"
                      className="touch-target relative"
                      aria-label={`Cart (${cartCount} items)`}
                      onClick={() => setMiniCartOpen(true)}
                    >
                      <ShoppingCart className="h-5 w-5" />
                      {cartCount > 0 && (
                        <Badge className="absolute -top-1 -right-1 flex size-[18px] items-center justify-center rounded-full p-0 text-[10px]">
                          {cartCount}
                        </Badge>
                      )}
                    </Button>
                  }
                />
                <TooltipContent>Cart</TooltipContent>
              </Tooltip>

              <CurrencySelector />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile search bar */}
          {searchOpen && (
            <div className="border-t border-border py-3 md:hidden">
              <SearchBar products={products} />
            </div>
          )}
        </div>

        {/* Mobile navigation sheet */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetContent side="left" className="w-72 p-0">
            <SheetHeader className="border-b border-border px-4 py-4">
              <SheetTitle className="flex items-center gap-2">
                <Image
                  src="/weaventra-logo.png"
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded object-contain"
                />
                WEAVENTRA
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col p-4" aria-label="Mobile navigation">
              <Link
                href="/products"
                className="flex min-h-11 items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <div className="my-2 border-t border-border" />
              {brandNavItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex min-h-11 items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <MiniCartDrawer open={miniCartOpen} onOpenChange={setMiniCartOpen} />
      </header>
    </>
  );
}

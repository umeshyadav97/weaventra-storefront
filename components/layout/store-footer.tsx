"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function StoreFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div className="max-w-lg">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/weaventra-logo.png"
                alt=""
                width={44}
                height={44}
                className="size-11 rounded object-contain"
              />
              <span className="font-heading text-lg font-semibold tracking-wide text-foreground">
                WEAVENTRA
              </span>
            </Link>
            <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
              Thoughtfully designed rugs, shaped by traditional techniques and
              the hands that bring each detail to life.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Explore rugs <ArrowUpRight className="size-3.5" />
              </Link>
              <Link
                href="/rug-process"
                className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Our process <ArrowUpRight className="size-3.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Contact us <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background p-5 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Stay in touch
            </p>
            <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-muted-foreground sm:text-3xl">
              Notes from the loom
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
              Sign up for new collections, stories from our craft, and
              occasional offers from WEAVENTRA.
            </p>
            <form
              className="mt-5 flex flex-col gap-2 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Your email address"
                className="h-11 flex-1 bg-background"
                aria-label="Email address for newsletter"
                required
              />
              <Button type="submit" className="h-11 shrink-0 px-6">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8 sm:my-10" />

        <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>
            &copy; {new Date().getFullYear()} WEAVENTRA. All rights reserved.
          </span>
          <span>Made with care, from yarn to finished rug.</span>
        </div>
      </div>
    </footer>
  );
}

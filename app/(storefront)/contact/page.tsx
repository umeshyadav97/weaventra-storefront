import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactEnquiryForm } from "./contact-enquiry-form";

export const metadata: Metadata = { title: "Contact Us" };

const whatsappUrl =
  "https://wa.me/918318664763?text=Hello%20WEAVENTRA%2C%20I%20have%20an%20enquiry.";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <header className="mb-8 max-w-3xl sm:mb-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Contact WEAVENTRA
        </p>
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Tell us what you need
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
          Trade buyers, designers and homeowners — send us your brief and we’ll
          come back with design ideas, sizes and pricing.
        </p>
      </header>

      <div className="grid items-start gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:gap-8">
        <section
          className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-8"
          aria-label="Send an enquiry"
        >
          <ContactEnquiryForm />
        </section>

        <aside className="space-y-5">
          <section className="rounded-xl bg-foreground p-5 text-background sm:p-6">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <MessageCircle className="size-4" /> Quickest reply
            </div>
            <p className="mt-3 text-sm leading-6 text-background/75">
              Message us on WhatsApp. You can send photos, sketches or sizes
              directly.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-background px-4 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
            >
              WhatsApp +91 83186 64763
            </a>
          </section>

          <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Get in touch
            </h2>
            <div className="mt-4 space-y-4 text-sm">
              <a
                href="tel:+918318664763"
                className="flex items-start gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  <span className="block font-medium text-foreground">
                    Call
                  </span>
                  +91 83186 64763
                </span>
              </a>
              <a
                href="mailto:umeshyadava099@gmail.com"
                className="flex items-start gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  <span className="block font-medium text-foreground">
                    Email
                  </span>
                  umeshyadavaba099@gmail.com
                </span>
              </a>
            </div>
            <div className="mt-5 border-t border-border pt-5">
              <div className="flex gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Head office</p>
                  <p className="mt-1 leading-6">
                    Goplakunj Colony, Rajpura
                    <br />
                    Bhadohi 221401, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </section>

          <p className="px-1 text-xs leading-5 text-muted-foreground">
            Prefer to talk through a project? Call or WhatsApp us and we’ll help
            you get started.
          </p>
        </aside>
      </div>
    </div>
  );
}

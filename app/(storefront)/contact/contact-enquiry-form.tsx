"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const enquiryTypes = [
  "Trade / wholesale",
  "Custom rug",
  "For my home",
  "Something else",
];

export function ContactEnquiryForm() {
  const [enquiryType, setEnquiryType] = useState(enquiryTypes[0]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = [
      `Enquiry type: ${enquiryType}`,
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Phone / WhatsApp: ${formData.get("phone") || "Not provided"}`,
      `Country: ${formData.get("country") || "Not provided"}`,
      `Company: ${formData.get("company") || "Not provided"}`,
      `Design code or collection: ${formData.get("design") || "Not provided"}`,
      "",
      "Requirement:",
      String(formData.get("requirement") || ""),
    ].join("\n");

    window.location.href = `mailto:umeshyadava099@gmail.com?subject=${encodeURIComponent(`WEAVENTRA enquiry: ${enquiryType}`)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <fieldset>
        <legend className="mb-3 text-sm font-semibold text-foreground">
          I’m enquiring about
        </legend>
        <div className="flex flex-wrap gap-2">
          {enquiryTypes.map((type) => (
            <button
              key={type}
              type="button"
              aria-pressed={enquiryType === type}
              onClick={() => setEnquiryType(type)}
              className={`rounded-full border px-3.5 py-2 text-sm transition-colors ${
                enquiryType === type
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-background text-muted-foreground hover:border-foreground/50 hover:text-foreground"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-foreground">
          Your name <span className="text-primary">*</span>
          <Input
            name="name"
            autoComplete="name"
            required
            placeholder="Name"
            className="h-11 bg-background"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground">
          Email <span className="text-primary">*</span>
          <Input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className="h-11 bg-background"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground">
          Phone / WhatsApp
          <Input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+ country code"
            className="h-11 bg-background"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground">
          Country
          <Input
            name="country"
            autoComplete="country-name"
            placeholder="Country"
            className="h-11 bg-background"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground">
          Company
          <Input
            name="company"
            autoComplete="organization"
            placeholder="Company or studio"
            className="h-11 bg-background"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground">
          Design code or collection
          <Input
            name="design"
            placeholder="If you have one"
            className="h-11 bg-background"
          />
        </label>
      </div>

      <label className="block space-y-2 text-sm font-medium text-foreground">
        Your requirement <span className="text-primary">*</span>
        <Textarea
          name="requirement"
          required
          rows={5}
          placeholder="Tell us about the rug, sizes, quantities, materials, timeline or budget you have in mind."
          className="min-h-32 resize-y bg-background"
        />
      </label>

      <div className="flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-5 text-muted-foreground">
          We only use your details to reply to this enquiry.
        </p>
        <button
          type="submit"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Send enquiry <ArrowRight className="size-4" />
        </button>
      </div>
    </form>
  );
}

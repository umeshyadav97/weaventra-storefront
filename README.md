# WEAVENTRA

WEAVENTRA is a rug catalogue and brand website focused on handcrafted rugs, traditional techniques, and contemporary design.

## Website sections

- Home, including rug categories and editorial imagery
- Product catalogue with image cards, category filters, sorting, grid and list views
- Rug process, About, and Contact pages
- Product detail pages, search, and cart enquiry links

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project data

- `data/weaventra-15-products.json` contains the 15 core WEAVENTRA rugs.
- `data/weaventra-hands-carp-products.ts` contains the additional rug records.
- `data/weaventra-prompt-images.json` contains the 40 image dataset entries.
- `data/seed.ts` combines the product and image data used by the storefront.

The product and editorial images are illustrative references. Confirm final materials, availability, pricing, and provenance with WEAVENTRA before presenting them as confirmed stock.

## Contact and checkout

The cart links to the WEAVENTRA enquiry page. This project does not currently integrate payment processing or an order management backend. The contact form opens an email draft; the newsletter form still needs a mailing-list service to store subscriptions.

## Stack

- Next.js App Router, React, and TypeScript
- Tailwind CSS
- Base UI components and Lucide icons

## License

See `LICENSE` for the MIT license and its retained copyright notice.

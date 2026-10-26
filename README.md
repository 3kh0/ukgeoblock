# UK geoblock notice

A small Vite + Vue app with Tailwind CSS. `/` displays the notice and `/x` sets
the existing bypass cookie.

```sh
pnpm install
pnpm dev
```

Build with `pnpm build` and preview with `pnpm preview`.

Deploy the generated `dist/` directory to a static host. Configure the host to
serve `index.html` for `/x` (and `/x/`) so direct bypass links work.

The bypass cookie uses the `.3kh0.net` domain in production and a host-only
cookie on localhost.

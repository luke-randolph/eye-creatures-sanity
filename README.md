# Eye Creatures — Sanity Studio

Content studio for the Eye Creatures merch store. This is where products (shirts, tapes, CDs, stickers) are created and edited; the storefront (`eye-creatures-merch`) reads the same dataset over the Sanity Content API.

- **Project ID:** `qvmho7ys`
- **Dataset:** `production`
- **Sanity version:** v5

## Getting started

```bash
npm install
npm run dev
```

The studio runs at http://localhost:3333. You'll be prompted to log in with the Sanity account that has access to project `qvmho7ys`.

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Run the studio locally with hot reload |
| `npm run build` | Build the studio for production |
| `npm run deploy` | Deploy the studio to `<project>.sanity.studio` |
| `npm run deploy-graphql` | Deploy the GraphQL API for the dataset |

## Content model

### `product`

| Field | Type | Notes |
| --- | --- | --- |
| `name` | string | Required, max 128 chars |
| `slug` | slug | Required, generated from `name` |
| `category` | string | One of `shirt`, `tape`, `cd`, `stickers` |
| `price` | number | Required, positive integer — whole dollars (e.g. `25` = $25) |
| `description` | text | Optional |
| `sizes` | array of string | `S`–`3XL`; leave empty for items without sizes (tapes, CDs, stickers) |
| `mainImage` | image | Required, hotspot enabled |
| `colors` | array of `colorVariant` | Optional color variants, each with `hex`, `label`, and `image` |

Schemas live in `schemaTypes/`. Add a new document type there and register it in `schemaTypes/index.ts`.

## Configuration

- `sanity.config.ts` — studio config (project ID, dataset, plugins, schema)
- `sanity.cli.ts` — CLI config and deployment settings (auto-updates enabled)

Plugins in use: `structureTool` (content editing) and `visionTool` (GROQ query playground, available in the **Vision** tab).

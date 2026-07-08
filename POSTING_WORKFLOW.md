# Teddy Travels posting workflow

This version uses Astro content collections. The goal is simple:

```text
Add one Markdown file = new post appears in the right archive automatically.
```

## Outdoors posts

Create a file under:

```text
src/content/outdoors/<region-slug>/<post-slug>.md
```

Example:

```text
src/content/outdoors/mountain-west/castle-peak.md
```

Use this frontmatter:

```md
---
title: "Castle Peak"
date: "TBD"
region: "Mountain West"
location: "Idaho"
type: "Hike / peak"
difficulty: 7
quality: 8
gpx: "/gpx/castle-peak.gpx"
gallery: true
photos:
  - src: "/images/outdoors/mountain-west/castle-peak/castle-peak-01.jpg"
    alt: "View from the Castle Peak route"
---

Write the post here.
```

The post will automatically appear at:

```text
/outdoors/mountain-west/castle-peak
```

and in the Mountain West archive if `region: "Mountain West"`.

## Trips posts

Create a file under:

```text
src/content/trips/<type-slug>/<post-slug>.md
```

Use `type` exactly as one of the current category names:

```text
Road Trips
Surf Trips
Backpacks
```

## Gear posts

Create a file under:

```text
src/content/gear/<category-slug>/<post-slug>.md
```

Use `category` exactly as one of the current category names:

```text
Backpacking
Running
Climbing & Snow
```

Gear photos can still be embedded in gear posts, but they will not show in the main photo gallery unless you build that in later.

## Book notes

Finished book notes live in:

```text
src/content/books/<book-slug>.md
```

The Want to Read page stays as a simple manual list because those books do not need pages, dates, or links.

## Photos

Drop image files into a matching folder in `public/images/`, then list them in the post frontmatter.

Example:

```text
public/images/outdoors/mountain-west/castle-peak/castle-peak-01.jpg
```

Reference it from the post like this:

```md
photos:
  - src: "/images/outdoors/mountain-west/castle-peak/castle-peak-01.jpg"
    alt: "View from the Castle Peak route"
```

Outdoors and Trips photos automatically appear in `/photos`. Gear photos do not.

## Publishing

Run locally:

```bash
npm run dev
```

When ready:

```bash
git add .
git commit -m "Add new Teddy Travels post"
git push
```

Cloudflare Pages will redeploy automatically.

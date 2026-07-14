## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

# Teddy Travels — Project Context

## Purpose and nature of the site

**Teddy Travels** is the personal website of Luke Tedford, hosted at:

```text
https://teddytravels.net
```

The site is not meant to be a normal SEO blog or polished travel-influencer brand site. It is best understood as a **personal digital archive / scrapbook**: part trip report collection, part photo archive, part gear notebook, part reading list, and part record of future objectives.

The site should feel personal, outdoorsy, practical, reflective, and handmade. The desired tone is plainspoken and natural, with some literary/reflection when it fits, but not fake-poetic or overproduced. It should feel like Luke, not like an AI-generated travel brand.

The long-term vision is to build a body of work around:

- Hikes, peaks, backpacking routes, and outdoor objectives
- Road trips, surf trips, study abroad, work seasons, and other travel stories
- Gear reviews based on actual use
- Book notes and personal reactions
- A photo archive connected to real trips and posts
- Future objectives and goals

The website can support an outward-facing travel-influencer Instagram presence, but the site itself should remain more personal, archival, and durable.

## Current tech stack

The project uses:

- **Astro** as the static site framework
- **Markdown content collections** for posts
- **VS Code** for local editing
- **Git** for version control
- **GitHub** as the source repository
- **Cloudflare Pages** for hosting and deployment
- **GoDaddy** as the domain registrar for `teddytravels.net`
- **Cloudflare DNS** for DNS management
- **Google Search Console** for search indexing and sitemap submission

The basic workflow is:

```bash
npm run dev
```

for local development, then:

```bash
npm run build
git add .
git commit -m "Meaningful commit message"
git push
```

Cloudflare Pages is connected to the GitHub repository. A successful `git push` to the deployment branch triggers Cloudflare to build and deploy the live site.

`npm run build` only builds/tests the site locally. It does **not** deploy by itself. Deployment happens after pushing to GitHub.

## Domain, DNS, and hosting

The public domain is:

```text
teddytravels.net
```

The domain was purchased/managed through **GoDaddy**, but DNS is handled through **Cloudflare**. Cloudflare Pages hosts the built static Astro site.

The general relationship is:

```text
VS Code local files
        ↓
Git commit
        ↓
GitHub repository
        ↓
Cloudflare Pages automatic build/deploy
        ↓
teddytravels.net
```

GoDaddy is mainly the registrar. Cloudflare is responsible for DNS and hosting/deployment.

## Search / indexing setup

A sitemap has been added through Astro’s sitemap integration. The intended sitemap URL is:

```text
https://teddytravels.net/sitemap-index.xml
```

That sitemap index points to the generated sitemap file, such as:

```text
https://teddytravels.net/sitemap-0.xml
```

A `robots.txt` file should exist at:

```text
public/robots.txt
```

with contents similar to:

```txt
User-agent: *
Allow: /

Sitemap: https://teddytravels.net/sitemap-index.xml
```

The sitemap should be submitted in Google Search Console using the full URL, especially if using a Domain property:

```text
https://teddytravels.net/sitemap-index.xml
```

For indexing, Google Search Console can also be used to inspect and request indexing for important URLs such as the homepage and first real content pages.

## Content architecture

The project was refactored from mostly hand-written `.astro` pages into **Astro content collections**. New posts should generally be Markdown files inside `src/content/`, rather than full Astro pages.

Expected content folders:

```text
src/content/
  outdoors/
  trips/
  gear/
  books/
```

The site has dynamic Astro pages that render those Markdown posts automatically.

Expected dynamic page files:

```text
src/pages/outdoors/[...slug].astro
src/pages/trips/[...slug].astro
src/pages/gear/[...slug].astro
src/pages/books/read/[slug].astro
```

Category/archive pages still live under `src/pages/.../index.astro`. These are not old individual posts; they are section/category archive pages and should remain.

Examples:

```text
src/pages/outdoors/mountain-west/index.astro
src/pages/outdoors/peaks/index.astro
src/pages/trips/road-trips/index.astro
src/pages/gear/backpacking/index.astro
```

Individual posts should be Markdown content files, not one-off `.astro` pages.

## Current main navigation

The main nav currently points to:

```astro
<nav>
  <a href="/outdoors">Outdoors</a>
  <a href="/trips">Trips</a>
  <a href="/photos">Photos</a>
  <a href="/objectives">Objectives</a>
  <a href="/gear">Gear</a>
  <a href="/books">Books</a>
  <a href="/about">About</a>
</nav>
```

Infrastructure is considered mostly complete for:

- Outdoors
- Trips
- Gear
- Books
- Objectives

Photos infrastructure exists, but the photo/gallery experience can be improved later.

## Design identity

The site uses a warm, old-internet / outdoors archive feel. The visual identity includes:

- Warm paper background
- Dark green text
- Burnt orange accents
- Serif typography
- Card-based landing pages
- Simple archive lists
- Photo-forward trip report feel

Primary CSS variables:

```css
:root {
  --bg: #f4efe4;
  --paper: #fffaf0;
  --paper-dark: #eee4d2;
  --text: #1f2a24;
  --muted: #68746b;
  --accent: #9a542e;
  --accent-dark: #6f3b22;
  --green: #2f4a3d;
  --border: #d8c8ad;
  --shadow: 0 10px 30px rgba(31, 42, 36, 0.08);
}
```

Cards should generally be fully clickable when used as navigation cards. This means the card itself should be an `<a>` element rather than an `<article>` with a small text link inside.

## Outdoors section

The Outdoors section is for hikes, peaks, routes, backpacking trips, scrambling, climbing, and short expedition reports.

The `/outdoors` page is a card-based landing page organized by region/country plus special indexes.

Current or planned Outdoors cards include:

- Peaks
- Mountain West
- Pacific Northwest
- Appalachia
- Hawaii
- New Zealand
- Other

Region archive pages should stay as simple archive lists, not card grids.

Region archive rows should show:

```text
Name | Date | State/Country
```

No status column.

### Outdoors frontmatter

Outdoor posts should live in:

```text
src/content/outdoors/
```

A typical Outdoors post frontmatter should look like:

```md
---
title: "Naomi Peak via Tony Grove"
date: "2026-06-28"
region: "Mountain West"
location: "Utah"
type: "Peak"
miles: 9
time: "4 hr 30 min"
height: 9980
gpx: "/gpx/naomi-peak.gpx"
gallery: true
photos:
  - src: "/images/outdoors/mountain-west/naomi-peak/naomi-peak-01.jpg"
    alt: "Ridgeline view near Naomi Peak in the Bear River Range"
---
```

Important notes:

- Dates should be standardized as `YYYY-MM-DD`.
- `height` should be optional.
- `type: "Peak"` should be used consistently for peak pages that should appear on the Peaks page.
- GPX files should live in `public/gpx/` and be linked from frontmatter as `/gpx/file-name.gpx`.
- Photos should live in `public/images/` and be referenced with root-relative paths like `/images/...`.

### Peaks page

A dedicated Peaks page exists or is planned at:

```text
src/pages/outdoors/peaks/index.astro
```

Public URL:

```text
/outdoors/peaks
```

This page should list all Outdoors activities with:

```md
type: "Peak"
```

The Peaks page should show columns:

```text
Name | Date | Height | Region | State
```

Default sort should be by height, tallest first. Buttons can also sort by date and alphabetically.

Because date sorting matters, all content dates should use:

```text
YYYY-MM-DD
```

Examples:

```md
date: "2026-07-12"
date: "2026-06-28"
date: "2026-05-12"
```

Avoid mixed formats such as:

```text
2026-7-12
5/12/2026
```

## Trips section

The Trips section is for longer travel stories that are not just standalone outdoor routes.

Current Trips categories:

- Road Trips
- Surf Trips
- Backpacks

Trip posts should live in:

```text
src/content/trips/
```

Possible trip content:

- Costa Rica surf trip
- Summer 2026 Western Road Trip
- New Zealand
- Hawaii farm season
- Ski season / lift operator season

The Trips index should stay simpler than Outdoors.

## Gear section

The Gear section is a practical notebook: what worked, what failed, what was worth the money, and what Luke would change next time.

Gear categories:

- Backpacking
- Running
- Climbing & Snow

Gear posts should live in:

```text
src/content/gear/
```

Gear image folders should be organized by category and item:

```text
public/images/gear/backpacking/nemo-tensor/
public/images/gear/backpacking/rei-half-dome-2/
public/images/gear/running/brooks-ghost-max/
public/images/gear/climbing-snow/future-alpine-kit/
```

### Gear frontmatter

Gear reviews should include a product rating and product link when available:

```md
---
title: "NEMO Tensor All-Season Sleeping Pad"
date: "2026-07-13"
category: "Backpacking"
type: "Sleeping Pad"
rating: 9
productLink: "https://www.rei.com/product/228436/nemo-tensor-all-season-ultralight-insulated-sleeping-pad"
gallery: false
photos: []
---
```

The URL should be stored in frontmatter, but the page should display a normal hyperlink like:

```text
Product: View product
```

The site should not display the full raw URL.

The gear schema should allow:

```ts
rating: z.number().min(1).max(10).optional(),
productLink: z.string().url().optional(),
```

If a product link is only a placeholder, either use a real valid full URL with `https://`, or omit `productLink` until the real link is available.

## Books section

The Books page has:

- Read
- Want to Read

The “Currently Reading” card was removed. The page can still include a simple line such as:

```text
Currently reading: East of Eden
```

Book notes should live in:

```text
src/content/books/
```

Book notes should feel like personal notes, remembered passages, and honest reactions rather than academic essays.

Current Want to Read list:

- Desert Solitaire — Edward Abbey
- The Dharma Bums — Jack Kerouac
- The Brothers Karamazov — Fyodor Dostoevsky

Current/read book notes include or may include:

- The Quiet American — Graham Greene
- East of Eden — John Steinbeck

## Photos infrastructure

Long-term, photos should generally live in each post’s frontmatter rather than in a separate global photo registry.

Example:

```md
photos:
  - src: "/images/outdoors/mountain-west/naomi-peak/naomi-peak-01.jpg"
    alt: "Trail view near Naomi Peak"
  - src: "/images/outdoors/mountain-west/naomi-peak/naomi-peak-02.jpg"
    alt: "Ridgeline near Naomi Peak"
gallery: true
```

Photo files should live under:

```text
public/images/
```

using section/category/post folders.

Examples:

```text
public/images/outdoors/mountain-west/naomi-peak/
public/images/trips/road-trips/summer-2026-western-road-trip/
public/images/gear/backpacking/nemo-tensor/
```

The `/photos` page should eventually collect photos automatically from Outdoors and Trips posts while excluding Gear.

Gear photos should generally not appear in the main Photos gallery unless intentionally changed later.

## About page

The About page includes Luke’s bio, headshot, and contact links.

Contact/social links:

```text
Email: mailto:luketedford@gmail.com
Instagram: https://www.instagram.com/luketedford
LinkedIn: likely https://www.linkedin.com/in/luketedford
```

LinkedIn slug should be double-checked before treating it as final.

Current About text:

```text
I’m Luke Tedford. I grew up in Tennessee, study at the University of Alabama,
and spend as much time as I can chasing mountains, trails, strange jobs,
long drives, and places that make good stories.

Teddy Travels is my personal archive: part trip report collection, part photo
scrapbook, part gear notebook, and part record of the places I’ve been and the
objectives I’m working toward.
```

About headshot:

```text
public/images/about/headshot.jpg
```

## Homepage

The homepage uses:

- Hero section with photo collage
- Intro section
- Six feature cards
- Quote block

Current homepage language:

```text
A digital archive by Luke Tedford

Teddy Travels

Mountains, road trips, surf, work seasons, photos, and gear notes.
```

Quote block:

```text
“No weapon formed against me shall prosper”
- Isaiah 54:17
```

Homepage images:

```text
public/images/home/luke-1.jpg
public/images/home/luke-2.jpg
public/images/home/luke-3.jpg
```

## Writing style guidelines

The site should sound like Luke. Keep writing:

- Personal
- Plainspoken
- Outdoorsy
- Practical
- Reflective
- Occasionally funny
- Not over-polished
- Not generic travel-influencer copy

Avoid phrases that sound like AI travel writing, such as:

```text
Volcanic ridgelines, surf breaks, rainforests...
```

Prefer simpler language like:

```text
Hawaiian mountains, surf, farm roads, rain, beaches, and whatever island stories are worth remembering.
```

Gear notes can be casual and direct. Example tone:

```text
Thank God I bought this. I have never slept better in a tent.
```

Book notes should be honest reactions, not literary criticism written for a professor.

## Near-term content priorities

The site infrastructure is in a good place. The next priority is adding real content.

Good first milestones:

```text
5 Outdoors posts
2 Trips posts
2 Gear notes
2 Book notes
25+ real photos
```

Then:

```text
10 Outdoors posts
5 Trips posts
5 Gear notes
5 Book notes
50–100 photos
```

Suggested Outdoors posts:

1. Naomi Peak via Tony Grove
2. Standhope Peak via Jarvis Trail
3. Grandfather Mountain via Tanawha Trail
4. Grand Sawtooth Loop
5. Castle Peak
6. Three Fingers Lookout
7. Vesper Peak
8. Gobbler’s Knob
9. Max Patch
10. Mt. Mitchell
11. Mt. Cammerer
12. Hawaii farm / island hikes

Suggested Gear posts:

- NEMO Tensor All-Season Sleeping Pad
- Osprey Atmos
- REI Half Dome 2+
- Platypus GravityWorks
- Radiant 20 Sleeping Bag
- Mizuno Neo Zen
- Brooks Ghost Max
- Future Alpine Kit

Suggested Book notes:

- The Quiet American
- East of Eden

## Future outlook

The long-term goal is for Teddy Travels to become a substantial personal archive and public-facing travel/outdoors project.

It should not chase volume for its own sake. A small number of real, useful, firsthand posts is better than hundreds of thin pages.

A strong first version of the site would include:

```text
10 Outdoors reports
5 Trips posts
5 Gear notes
5 Book notes
A meaningful photo gallery
A useful Peaks index
A clean About page
A working sitemap and Search Console setup
```

At 50–75 strong entries, Teddy Travels would feel like a genuinely substantial personal archive. At 100+ strong entries, it would start to feel like a serious public project or small media property.

Possible future improvements:

- Better Photos page filtering
- Automatic photo collection from Outdoors and Trips posts
- Better post templates for different content types
- More polished archive tables
- GPX/map embedding instead of only GPX download links
- Decap CMS or another lightweight admin system for easier posting
- Personal domain `luketedford.com` as a professional hub linking to Teddy Travels
- Travel Instagram connected to the site
- Optional affiliate disclosures if gear links ever become affiliate links
- Structured data for posts/reviews later, if useful

Do **not** build too much infrastructure too early. The current best move is to keep adding content and let real usage reveal what feels annoying.

## Important maintenance reminders

- Use Markdown posts in `src/content/` for individual content.
- Keep `src/pages/.../index.astro` archive pages.
- Avoid old one-off `.astro` post pages unless there is a specific reason.
- Use `YYYY-MM-DD` for all dates.
- Keep `type: "Peak"` exact for peak filtering.
- Keep `height` optional for Outdoors posts.
- Store images under `public/images/` with organized section/category/post folders.
- Store GPX files under `public/gpx/`.
- Use full valid URLs for `productLink`, including `https://`.
- Run `npm run build` before pushing major changes.
- Deploy by committing and pushing to GitHub.

## Core philosophy

Teddy Travels should be a place where a stranger can land and think:

> “Oh, this person actually does this.”

The site should grow through real trips, real notes, real photos, and real opinions. It should stay useful, personal, and durable.
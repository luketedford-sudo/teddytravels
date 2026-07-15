# Post templates

Local reference only. Nothing in this folder is read by Astro — it lives outside
`src/`, so it never becomes a page and never ships to the live site. Copy a
template into the right spot under `src/content/`, fill it in, delete the field
notes at the bottom (or just leave them, they still won't render), and it becomes
a real post.

| Type | Template | Goes in |
|---|---|---|
| Outdoors | [outdoors.md](outdoors.md) | `src/content/outdoors/<region-slug>/<post-slug>.md` |
| Trips | [trips.md](trips.md) | `src/content/trips/<type-slug>/<post-slug>.md` |
| Gear | [gear.md](gear.md) | `src/content/gear/<category-slug>/<post-slug>.md` |
| Books | [books.md](books.md) | `src/content/books/<post-slug>.md` |

## Rules that apply to every type

- Dates: `"YYYY-MM-DD"` (e.g. `"2026-07-12"`). `"TBD"` is fine as a temporary
  placeholder before you know the real date, but swap it out before the date
  needs to sort correctly against other posts.
- Images live in `public/images/<section>/<category-slug>/<post-slug>/` and are
  referenced from frontmatter with a root-relative path, e.g.
  `/images/outdoors/mountain-west/castle-peak/castle-peak-01.jpg`.
- GPX files live in `public/gpx/` and are referenced as `/gpx/file-name.gpx`.
- Add `draft: true` to a post to keep it out of every listing and stop its page
  from being generated at all, without deleting the file. Remove the line (or
  set it to `false`) when it's ready.
- These templates reflect the actual schema in `src/content.config.ts` as of
  this writing. If you add/rename a field there, update the matching template
  too — the schema is the source of truth, not this folder.

See also [`POSTING_WORKFLOW.md`](../POSTING_WORKFLOW.md) at the project root
for the narrative version of this. That file is currently a bit out of date
(it references a couple of fields — `difficulty`, `quality` — that no longer
exist in the schema) so trust these templates over it for exact field names.

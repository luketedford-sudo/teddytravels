---
title: ""
date: "YYYY-MM-DD"
region: ""
location: ""
type: ""
height:
miles:
time: ""
gpx: ""
gallery: true
photos:
  - src: ""
    alt: ""
peaks:
  - name: ""
    height:
---

Write the trip report here.

<!--
FIELD NOTES (delete before publishing, or just leave — this comment never renders)

File location: src/content/outdoors/<region-slug>/<post-slug>.md
Public URL:    /outdoors/<region-slug>/<post-slug>

Required
- title        Post title, e.g. "Standhope Peak via Jarvis Trail"
- date         "YYYY-MM-DD". Controls sort order everywhere dates are used.
- region       One of: "Mountain West", "Pacific Northwest", "Appalachia",
               "Hawaii", "New Zealand", "Other". Must match a region card/
               archive page exactly, including capitalization.
- location     State or country, e.g. "Idaho", "Utah".
- type         Free text description, e.g. "Hike / scramble", "Lookout / hike",
               "Backpacking loop". Use the EXACT string "Peak" if — and only
               if — this post should appear on /outdoors/peaks.

Optional
- height       Number, feet. No quotes, no "ft" suffix. e.g. height: 11878
- miles        Number, round-trip mileage.
- time         Free text, e.g. "7 hr 30 min".
- gpx          "/gpx/file-name.gpx" — the file itself goes in public/gpx/.
- photos       Array of { src, alt }. src is root-relative:
               "/images/outdoors/<region-slug>/<post-slug>/<name>-01.jpg"
               The actual files live in public/images/outdoors/...
- gallery      true/false — whether the photo gallery block shows on the post.
- draft        true to hide the post everywhere and skip generating its page.

peaks (optional, only matters if type is "Peak")
- The Peaks page (/outdoors/peaks) shows one row per entry in `peaks`, and
  every row links back to THIS post. Each entry is { name, height }.
- Use this for a normal single-summit post too, if you want the Peaks page
  Name column to show something cleaner than the full post title — e.g.
  title "Standhope Peak via Jarvis Trail" but peaks: [{ name: "Standhope Peak" }].
- For a trip that summits more than one peak, add one entry per peak. Both
  rows will show up separately on the Peaks page but link to this same post.
- If you omit `peaks` entirely, the Peaks page falls back to using the post's
  `title` and top-level `height` as a single row.
- height on a peaks entry overrides the top-level `height` for that row only;
  if omitted it falls back to the top-level `height`.
-->

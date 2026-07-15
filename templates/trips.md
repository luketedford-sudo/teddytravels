---
title: ""
date: "YYYY-MM-DD"
type: ""
place: ""
gpx: ""
gallery: true
photos:
  - src: ""
    alt: ""
---

Write the trip story here.

<!--
FIELD NOTES (delete before publishing, or just leave — this comment never renders)

File location: src/content/trips/<type-slug>/<post-slug>.md
Public URL:    /trips/<type-slug>/<post-slug>

Required
- title    Post title, e.g. "Costa Rica"
- date     "YYYY-MM-DD". "TBD" is fine as a placeholder until you know it.
- type     Must be EXACTLY one of: "Road Trips", "Surf Trips", "Backpacks".
           This is what sorts the post into the right Trips archive page —
           it does not need to match the folder name, but keeping them in
           sync (road-trips/, surf-trips/, backpacks/) avoids confusion.
- place    Free text, e.g. "Costa Rica", "Western U.S.", "Idaho".

Optional
- gpx      "/gpx/file-name.gpx" — file itself goes in public/gpx/.
- photos   Array of { src, alt }. src is root-relative:
           "/images/trips/<type-slug>/<post-slug>/<name>-01.jpg"
           Files live in public/images/trips/... Trips photos DO show up
           automatically in /photos.
- gallery  true/false — whether the photo gallery block shows on the post.
- draft    true to hide the post everywhere and skip generating its page.
-->

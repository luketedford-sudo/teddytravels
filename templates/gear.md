---
title: ""
date: "YYYY-MM-DD"
category: ""
type: ""
rating:
productLink: ""
gallery: false
photos: []
---

Write the review here — what worked, what failed, what you'd change next time.

<!--
FIELD NOTES (delete before publishing, or just leave — this comment never renders)

File location: src/content/gear/<category-slug>/<post-slug>.md
Public URL:    /gear/<category-slug>/<post-slug>

Required
- title    Product name, e.g. "NEMO Tensor All-Season Sleeping Pad"
- date     "YYYY-MM-DD".
- category Must be EXACTLY one of: "Backpacking", "Running", "Climbing & Snow".
           This sorts the post into the right Gear archive page.
- type     Free text sub-type, e.g. "Sleeping Pad", "Shoe", "Pack".

Optional
- rating       Number 1–10.
- productLink  Full URL including "https://". Displays on the page as a plain
               "View product" link — the raw URL is never shown. If you only
               have a placeholder link, leave this field out entirely rather
               than filling in a fake/incomplete URL (it must pass URL
               validation or the build fails).
- photos       Array of { src, alt }. src is root-relative:
               "/images/gear/<category-slug>/<post-slug>/<name>-01.jpg"
               Files live in public/images/gear/... NOTE: gear photos do NOT
               show up in the main /photos gallery, even if gallery: true.
- gallery      true/false — whether the photo gallery block shows on the post.
- draft        true to hide the post everywhere and skip generating its page.
-->

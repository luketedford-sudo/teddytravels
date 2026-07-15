---
title: ""
author: ""
date: "YYYY-MM-DD"
status: "read"
rating:
photos: []
---

Notes, quotes, thoughts, and things I want to remember.

<!--
FIELD NOTES (delete before publishing, or just leave — this comment never renders)

File location: src/content/books/<post-slug>.md
Public URL:    /books/read/<post-slug>

Required
- title    Book title, e.g. "East of Eden"
- author   Author name, e.g. "John Steinbeck"
- status   Only "read" is currently wired up to anything — posts with
           status: "read" (and draft not true) are what populate /books/read
           and get their own page at /books/read/<post-slug>.

Optional
- date     "YYYY-MM-DD" or "TBD". Schema allows omitting it entirely.
- rating   Number 1–10.
- photos   Array of { src, alt }, root-relative paths under
           /images/books/... if you ever add cover photos or scans.
- draft    true to hide the post everywhere and skip generating its page.

Heads up on "Want to Read"
- The "Want to Read" list on /books is currently a hardcoded list written
  directly in src/pages/books/index.astro — it is NOT pulled from this
  content collection. Adding a file here with some other status (e.g.
  "want-to-read") will NOT make it show up there. To add a book to Want to
  Read today, edit that page directly. This template is only for books
  you've actually finished and want a real notes page for.
-->

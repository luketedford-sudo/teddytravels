import { getCollection } from "astro:content";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { parseGpxVerticalGainFeet } from "./gpx-stats.js";

async function verticalGainForEntry(entry) {
  if (!entry.data.gpx) return 0;

  const gpxPath = path.join(process.cwd(), "public", entry.data.gpx);
  const gpxXml = await readFile(gpxPath, "utf-8");
  return parseGpxVerticalGainFeet(gpxXml);
}

export async function getTripStats() {
  const [outdoors, trips, gear, books] = await Promise.all([
    getCollection("outdoors"),
    getCollection("trips"),
    getCollection("gear"),
    getCollection("books"),
  ]);

  const totalMiles = outdoors.reduce((sum, entry) => sum + (entry.data.miles || 0), 0);

  const verticalGains = await Promise.all(
    [...outdoors, ...trips].map(verticalGainForEntry)
  );
  const totalVerticalFeet = verticalGains.reduce((sum, gain) => sum + gain, 0);

  const totalBooksRead = books.filter((entry) => entry.data.status === "read").length;

  return {
    totalReviews: gear.length,
    totalBooksRead,
    totalMiles,
    totalVerticalFeet,
  };
}

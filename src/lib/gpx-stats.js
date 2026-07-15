const METERS_TO_FEET = 3.28084;

// GPS elevation jitters by a meter or two between points even when standing
// still. Only counting gains past this threshold keeps that noise from
// inflating the total (this is the same approach GPS watches/Strava use).
const NOISE_THRESHOLD_METERS = 3;

export function parseGpxVerticalGainFeet(gpxXml, thresholdMeters = NOISE_THRESHOLD_METERS) {
  const elevations = [...gpxXml.matchAll(/<ele>([\d.-]+)<\/ele>/g)].map((match) =>
    Number.parseFloat(match[1])
  );

  let gainMeters = 0;
  let lastCounted = elevations[0] ?? 0;

  for (const ele of elevations.slice(1)) {
    const delta = ele - lastCounted;
    if (delta >= thresholdMeters) {
      gainMeters += delta;
      lastCounted = ele;
    } else if (delta <= -thresholdMeters) {
      lastCounted = ele;
    }
  }

  return Math.round(gainMeters * METERS_TO_FEET);
}

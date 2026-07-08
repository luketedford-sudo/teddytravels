export function sortEntriesNewest(entries) {
  return [...entries].sort((a, b) => {
    const dateA = getSortDate(a.data.date);
    const dateB = getSortDate(b.data.date);

    if (dateA !== dateB) {
      return dateB.localeCompare(dateA);
    }

    return a.data.title.localeCompare(b.data.title);
  });
}

export function getSortDate(date) {
  return date && date !== "TBD" ? date : "0000-00-00";
}

export function publicEntryPath(section, entry) {
  return `/${section}/${entry.id}`;
}

export function collectionToArchiveItems(section, entries, metaField) {
  return sortEntriesNewest(entries).map((entry) => ({
    title: entry.data.title,
    date: entry.data.date || "TBD",
    meta: entry.data[metaField] || "",
    href: publicEntryPath(section, entry),
    sortDate: getSortDate(entry.data.date),
  }));
}

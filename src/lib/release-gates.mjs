export function founderAuthorityApproved(entry) {
  return entry.productionReady === true
    && entry.items.length === 2
    && entry.items.every((founder) => [founder.publicName, founder.role, founder.biography, founder.portrait]
      .every((value) => typeof value === "string" && value.trim().length > 0)
      && Array.isArray(founder.links)
      && founder.links.length > 0
      && founder.links.every((link) => typeof link === "string" && /^https:\/\//.test(link)));
}

export function workRightsApproved(entry) {
  return entry.rightsStatus === "approved";
}

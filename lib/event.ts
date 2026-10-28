export const eventLinks = {
  // Paste your Google Form link here, e.g. "https://forms.gle/..."
  googleForm: '',
  // Paste your log-in page link here
  login: '',
}

export function linkOrFallback(url: string) {
  return url || '#join'
}

import { useEffect } from 'react'

export const defaultPrefix = 'QR Coder'

export function useWebsiteTitle(defaultTitle?: string) {
  useEffect(() => {
    if (!defaultTitle) return updateWebsiteTitleWithoutPrefix(defaultPrefix)
    updateWebsiteTitle(defaultTitle)
  }, [])

  function updateWebsiteTitle(title: string) {
    updateWebsiteTitleWithoutPrefix(`${defaultPrefix} | ${title}`)
  }

  function updateWebsiteTitleWithoutPrefix(title: string) {
    const titleElement = document.querySelector('title')
    if (!titleElement) return

    titleElement.innerHTML = title
  }

  return { updateWebsiteTitle, updateWebsiteTitleWithoutPrefix }
}

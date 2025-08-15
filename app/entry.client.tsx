import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { RemixBrowser } from '@remix-run/react'

function start() {
  try {
    hydrateRoot(
      document,
      <StrictMode>
        <RemixBrowser />
      </StrictMode>
    )
  } catch (err) {
    console.error('Hydration error:', err)
  }
}

// tenta após a nave estar “ociosa”; se não existir, cai no setTimeout
if ('requestIdleCallback' in window) {
  ;(window as any).requestIdleCallback(start)
} else {
  setTimeout(start, 1)
}

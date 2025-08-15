import { StrictMode, startTransition } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { RemixBrowser } from '@remix-run/react'

function render() {
  try {
    startTransition(() => {
      hydrateRoot(
        document,
        <StrictMode>
          <RemixBrowser />
        </StrictMode>
      )
    })
  } catch (e) {
    const pre = document.createElement('pre')
    pre.style.cssText =
      'white-space:pre-wrap;padding:16px;background:#200;color:#f88;' +
      'font:12px/1.4 ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    pre.textContent =
      'Hydration error:\n' +
      (e instanceof Error ? e.stack || e.message : String(e))
    document.body.innerHTML = ''
    document.body.appendChild(pre)
    console.error(e)
  }
}

if (typeof requestIdleCallback === 'function') {
  requestIdleCallback(() => render())
} else {
  setTimeout(render, 1)
}

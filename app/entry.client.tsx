import { RemixBrowser } from '@remix-run/react';
import { startTransition } from 'react';
import { hydrateRoot } from 'react-dom/client';

startTransition(() => {
  hydrateRoot(document.getElementById('root')!, <RemixBrowser />);
});

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
  } catch (e) {
    // Mostra o erro na tela pra você ver sem abrir o console
    const pre = document.createElement('pre')
    pre.style.cssText = 'white-space:pre-wrap;padding:16px;background:#200;color:#f88'
    pre.textContent = 'Hydration error:\n' + (e as Error).stack
    document.body.innerHTML = ''
    document.body.appendChild(pre)
    console.error(e)
  }
}
start()

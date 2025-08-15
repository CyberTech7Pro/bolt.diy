import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse
} from '@remix-run/react'

export const meta: MetaFunction = () => ([
  { charset: 'utf-8' },
  { title: 'Bolt' },
  { viewport: 'width=device-width,initial-scale=1' }
])

export const links: LinksFunction = () => ([
  // Se você tiver CSS global, adicione aqui. Deixa vazio por enquanto.
])

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <Meta />
        <Links />
      </head>
      <body style={{ minHeight: '100vh', background: '#0b0b0c', color: '#e6e6e6' }}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()
  let title = 'Erro inesperado'
  let details = 'Sem detalhes.'

  if (isRouteErrorResponse(error)) {
    title = `Erro ${error.status} ${error.statusText}`
    details = typeof error.data === 'string' ? error.data : JSON.stringify(error.data, null, 2)
  } else if (error instanceof Error) {
    title = error.message
    details = error.stack || error.message
  } else if (typeof error === 'string') {
    details = error
  }

  return (
    <Document>
      <div style={{ padding: 16 }}>
        <h1 style={{ margin: '0 0 12px' }}>💥 {title}</h1>
        <pre style={{
          whiteSpace: 'pre-wrap',
          font: '12px/1.4 ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
          background: '#220', color: '#f88', padding: 16, borderRadius: 8, overflow: 'auto'
        }}>
          {details}
        </pre>
      </div>
    </Document>
  )
}

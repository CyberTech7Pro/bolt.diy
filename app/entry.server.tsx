import type { EntryContext } from '@remix-run/node';
import { RemixServer } from '@remix-run/react';
import * as React from 'react';
import reactDomServer from 'react-dom/server';
import { PassThrough } from 'node:stream';

const R = reactDomServer as any;
const hasPipe = typeof R.renderToPipeableStream === 'function';
const hasReadable = typeof R.renderToReadableStream === 'function';
const ABORT_DELAY = 5_000;

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  if (hasPipe) {
    return new Promise<Response>((resolve, reject) => {
      let didError = false;
      const { pipe, abort } = R.renderToPipeableStream(
        React.createElement(RemixServer, { context: remixContext, url: request.url }),
        {
          onShellReady() {
            const body = new PassThrough();
            responseHeaders.set('Content-Type', 'text/html');
            resolve(new Response(body as any, { status: didError ? 500 : responseStatusCode, headers: responseHeaders }));
            pipe(body);
          },
          onShellError(err: unknown) { reject(err); },
          onError(err: unknown) { didError = true; console.error(err); }
        }
      );
      setTimeout(abort, ABORT_DELAY);
    });
  }

  if (hasReadable) {
    return R.renderToReadableStream(
      React.createElement(RemixServer, { context: remixContext, url: request.url })
    ).then((stream: ReadableStream) => {
      responseHeaders.set('Content-Type', 'text/html');
      return new Response(stream, { status: responseStatusCode, headers: responseHeaders });
    });
  }

  const html = reactDomServer.renderToString(
    React.createElement(RemixServer, { context: remixContext, url: request.url })
  );
  responseHeaders.set('Content-Type', 'text/html');
  return new Response('<!DOCTYPE html>' + html, { status: responseStatusCode, headers: responseHeaders });
}

export type LogFn = (...args: any[]) => void;
export interface Logger { info: LogFn; warn: LogFn; error: LogFn; debug: LogFn; child?: (s: string)=>Logger; }

const make = (p?: string): Logger => {
  const pref = p ? `[${p}]` : '';
  const wrap = (fn: LogFn): LogFn => (...a) => fn(pref ? pref + ' ' : '', ...a);
  return {
    info:  wrap(console.log),
    warn:  wrap(console.warn),
    error: wrap(console.error),
    debug: wrap(console.debug),
    child: (s: string) => make(p ? `${p}:${s}` : s),
  };
};

export const logger = make();
export function createScopedLogger(scope: string): Logger { return make(scope); }
export default logger;

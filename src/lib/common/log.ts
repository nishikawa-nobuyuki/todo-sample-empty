// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
export const __log = (...output: any): void => {
  if (process.env.NEXT_PUBLIC_ENV !== 'dev') {
    return;
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, no-console
  console.log(...output);
};

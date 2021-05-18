export const objToQueryString = (options: { [k: string]: string }): string =>
  Object.entries(options)
    .map(([k, v]) => k + "=" + encodeURIComponent(v))
    .join("&");

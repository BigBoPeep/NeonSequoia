export function debounce<T extends unknown[]>(
  fn: (...args: T) => void,
  delay: number,
) {
  let tID: ReturnType<typeof setTimeout>;

  return function (this: unknown, ...args: T) {
    if (tID) clearTimeout(tID);
    tID = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

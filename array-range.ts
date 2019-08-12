const arrayRange = (start: number, end: number): number[] =>
  Array(end - start + 1)
    .fill(start)
    .map((a, b) => a + b);

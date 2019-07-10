const getRange = (start: number, length: number): number[] =>
  Array(length)
    .fill(start)
    .map((a, b) => a + b);

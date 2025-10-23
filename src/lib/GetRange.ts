export function getRange(from: number, to: number): number[] {
  const range: number[] = [];

  for (let i = from; i <= to; i++) {
    range.push(i);
  }

  return range;
}

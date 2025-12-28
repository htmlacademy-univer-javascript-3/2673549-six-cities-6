export function getPercentage(count: number, maxCount: number): number {
  return 100 / maxCount * count;
}

export function getRandomNumber(from: number, to: number): number {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

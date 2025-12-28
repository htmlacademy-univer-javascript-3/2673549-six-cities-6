export function getRandomBoolean(probability: number = 0.5): boolean {
  return Math.random() < probability;
}

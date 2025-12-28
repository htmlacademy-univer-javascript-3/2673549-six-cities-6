export function getRandomElement<T>(array: T[]): T | undefined {
  if (array.length === 0) {
    return undefined;
  }
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export function getRandomArray<T>(count: number, dataGenerator: () => T): T[] {
  return Array.from({ length: count }, () => dataGenerator());
}

import { getRandomArray } from 'lib/array-utils';
import { getRandomString } from 'lib/string-utils';

export function getRandomGoods(count: number): string[] {
  return getRandomArray(count, () => getRandomString(10));
}

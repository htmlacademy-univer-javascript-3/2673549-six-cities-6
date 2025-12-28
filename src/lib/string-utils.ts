export function capitalize(word: string) {
  return word
    ? word[0].toUpperCase() + word.slice(1).toLowerCase()
    : word;
}

export function getCorrectWordForm(count: number, singular: string, plural: string) {
  return count === 1 ? singular : plural;
}

export function getRandomString(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}

export function capitalize(word: string) {
  return word
    ? word[0].toUpperCase() + word.slice(1).toLowerCase()
    : word;
}

export function getCorrectWordForm(count: number, singular: string, plural: string) {
  return count === 1 ? singular : plural;
}

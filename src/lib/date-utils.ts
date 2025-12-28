export function getMonthWithYear(date: Date) {
  return date.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric'
  });
}

export function getRandomDateISO(): string {
  return new Date().toISOString();
}

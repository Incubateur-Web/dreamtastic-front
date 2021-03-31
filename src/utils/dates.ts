/**
 * @param stringDate
 */
export function displayLocaleDate(stringDate: Date | string) {
  const formatter = new Intl.DateTimeFormat("fr", { month: "long" });
  const date = new Date(stringDate);
  const month = formatter.format(date);
  return `${date.getDay()} ${month} ${date.getFullYear()}`;
}

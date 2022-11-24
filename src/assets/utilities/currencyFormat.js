const euro_format = new Intl.NumberFormat(undefined, {
  currency: "EUR",
  style: "currency",
});

export function currencyFormat(number) {
  return euro_format.format(number);
}

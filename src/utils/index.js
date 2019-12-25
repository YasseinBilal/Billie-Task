export function toGermanFormat(amount) {
  if (!parseFloat(amount)) return amount;
  return parseFloat(amount).toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
  });
}

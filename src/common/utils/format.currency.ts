export function formatCurrency(value: any, data: any): any {
  return value.toLocaleString("en-US") + " " + data.currency;
}

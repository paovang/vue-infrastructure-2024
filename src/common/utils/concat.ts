export function conCatPermission(value: any): any {
  return value.map((item: { name: string }) => item.name).join(", ");
}

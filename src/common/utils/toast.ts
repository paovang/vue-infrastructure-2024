export async function showNotificationToast({
  toast,
  error,
  summary,
  detail,
}: {
  toast: any;
  error: string;
  summary: any;
  detail: any;
}): Promise<any> {
  toast.add({
    severity: error,
    summary: summary,
    detail: detail,
    life: 3000,
  });
}

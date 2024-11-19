export const formatVND = (value: number): string => {
  const formatted = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);

  // Thay "₫" bằng "VNĐ" và "." thành ","
  return formatted.replace("₫", "VNĐ").replace(/\./g, ",");
};

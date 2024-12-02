export const formatVND = (value: number): string => {
  const formatted = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);

  // Thay "₫" bằng "VNĐ" và "." thành ","
  return formatted.replace("₫", "VNĐ").replace(/\./g, ",");
};

export const formatUSD = (value: number): number => {
  const exchangeRate: number = 23000; // Tỷ giá cố định, 1 USD = 23,000 VND
  const convertToUSD: number = value / exchangeRate; // Chuyển đổi giá trị từ VND sang USD
  return parseFloat(convertToUSD.toFixed(2));
};

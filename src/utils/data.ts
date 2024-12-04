export const createData = () => {
  // Danh sách sản phẩm từ dữ liệu bạn đã cung cấp
  const products = [
    {
      id: 1,
      name: "Pizza hải sản",
      price: 200000,
      imgPath: "/imgs/bakery-images/pizzab.png",
    },
    {
      id: 2,
      name: "Bánh tart trứng",
      price: 30000,
      imgPath: "/imgs/bakery-images/eggtartb.png",
    },
    {
      id: 3,
      name: "Bánh muffin",
      price: 20000,
      imgPath: "/imgs/bakery-images/muffinb.png",
    },
    {
      id: 4,
      name: "Bánh bông lan trứng muối",
      price: 150000,
      imgPath: "/imgs/bakery-images/saltedb.png",
    },
    {
      id: 5,
      name: "Bánh brownies",
      price: 50000,
      imgPath: "/imgs/bakery-images/browniesb.png",
    },
    {
      id: 6,
      name: "Bánh chuối",
      price: 80000,
      imgPath: "/imgs/bakery-images/bananapieb.png",
    },
    {
      id: 7,
      name: "Bánh su kem",
      price: 10000,
      imgPath: "/imgs/bakery-images/chouxbb.png",
    },
    {
      id: 8,
      name: "Bánh cupcake",
      price: 20000,
      imgPath: "/imgs/bakery-images/cupcakeb.png",
    },
    {
      id: 9,
      name: "Bánh táo",
      price: 80000,
      imgPath: "/imgs/bakery-images/applepieb.png",
    },
    {
      id: 10,
      name: "Bánh macaron",
      price: 20000,
      imgPath: "/imgs/bakery-images/macaronb.png",
    },
    {
      id: 11,
      name: "Bánh cookies",
      price: 20000,
      imgPath: "/imgs/bakery-images/cookiesb.png",
    },
    {
      id: 12,
      name: "Bánh sừng bò",
      price: 40000,
      imgPath: "/imgs/bakery-images/croissantb.png",
    },
    {
      id: 13,
      name: "Bánh waffle",
      price: 50000,
      imgPath: "/imgs/bakery-images/waffleb.png",
    },
    {
      id: 14,
      name: "Bánh eclair",
      price: 20000,
      imgPath: "/imgs/bakery-images/eclairb.png",
    },
    {
      id: 15,
      name: "Bánh donut",
      price: 30000,
      imgPath: "/imgs/bakery-images/donutb.png",
    },
  ];

  // Danh sách toppings đa dạng
  const toppingsList = [
    "Kiwi",
    "Mứt việt quất",
    "Mật ong",
    "Chuối",
    "Hạt vừng",
    "Mứt đào",
    "Sốt socola",
    "Dừa khô",
    "Hạnh nhân",
    "Phô mai",
    "Dâu tươi",
    "Sốt caramel",
  ];

  // Danh sách thông tin giao hàng khác nhau
  const deliveryInfoList = [
    {
      fullName: "Nguyễn Văn A",
      streetName: "Số 10 Nguyễn Trãi",
      district: "Quận 1",
      ward: "Bến Thành",
      phoneNumber: "0901234567",
      note: "Giao vào giờ hành chính",
    },
    {
      fullName: "Lê Thị B",
      streetName: "Số 20 Lý Tự Trọng",
      district: "Quận 3",
      ward: "Phường 6",
      phoneNumber: "0932123456",
      note: "Gọi trước khi giao",
    },
    {
      fullName: "Trần Văn C",
      streetName: "Số 5 Đinh Tiên Hoàng",
      district: "Quận Bình Thạnh",
      ward: "Phường 2",
      phoneNumber: "0987654321",
      note: "Giao tối từ 6h - 8h",
    },
    {
      fullName: "Phạm Thị D",
      streetName: "Số 15 Pasteur",
      district: "Quận Phú Nhuận",
      ward: "Phường 8",
      phoneNumber: "0912123456",
      note: "Để tại bảo vệ",
    },
    {
      fullName: "Vũ Thị E",
      streetName: "Số 1 Điện Biên Phủ",
      district: "Quận 10",
      ward: "Phường 3",
      phoneNumber: "0962123456",
      note: "Không bấm chuông, chỉ gọi",
    },
  ];
  const orderStatusList = ["PENDING", "PROCESSING", "COMPLETED", "CANCEL"];
  // Hàm chọn ngẫu nhiên toppings
  function getRandomToppings() {
    const count = Math.floor(Math.random() * 4) + 1; // Chọn từ 1 đến 4 toppings
    return [...toppingsList].sort(() => 0.5 - Math.random()).slice(0, count);
  }
  // Hàm chọn ngẫu nhiên trạng thái đơn hàng
  function getRandomOrderStatus() {
    return orderStatusList[Math.floor(Math.random() * orderStatusList.length)];
  }
  // Kiểm tra sự tồn tại của biến "order"
  const existingOrders = localStorage.getItem("order");

  if (!existingOrders) {
    const orders = [];

    for (let i = 0; i < 15; i++) {
      const orderDetails = [];
      let totalAmount = 0;

      // Mỗi đơn hàng có từ 1 đến 5 sản phẩm
      for (let j = 0; j < Math.floor(Math.random() * 5) + 1; j++) {
        const product = products[Math.floor(Math.random() * products.length)];
        const quantity = Math.floor(Math.random() * 5) + 1;
        const totalPrice = product.price * quantity;

        totalAmount += totalPrice;

        orderDetails.push({
          productId: product.id,
          productName: product.name,
          productQuantity: quantity,
          productPrice: product.price,
          productImgPath: product.imgPath,
          toppings: getRandomToppings(),
          totalPrice: totalPrice,
        });
      }

      // Lấy thông tin giao hàng ngẫu nhiên
      const deliveryInfo = deliveryInfoList[i % deliveryInfoList.length];

      // Thêm đơn hàng vào danh sách
      orders.push({
        orderID: `ORDER${i + 1}`,
        totalAmount: totalAmount,
        orderStatus: getRandomOrderStatus(),
        orderDate: new Date().toISOString().slice(0, 10),
        orderDetails: orderDetails,
        deliveryInfo: deliveryInfo,
      });
    }

    // Lưu vào localStorage
    localStorage.setItem("order", JSON.stringify(orders));
    console.log("Orders đã được tạo và lưu vào localStorage!", orders);
  }
};

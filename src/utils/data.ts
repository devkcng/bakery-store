export const createData = () => {
  const orders = [
    {
      orderID: "ORDER1",
      totalAmount: 200000,
      orderStatus: "PENDING",
      orderDate: "2024-12-04",
      orderDetails: [
        {
          productId: 2,
          productName: "Bánh tart trứng",
          productQuantity: 4,
          productPrice: 30000,
          productImgPath: "/imgs/bakery-images/eggtartb.png",
          toppings: ["Mật ong", "Mứt đào", "Mứt việt quất", "Chuối"],
          totalPrice: 120000,
        },
        {
          productId: 8,
          productName: "Bánh cupcake",
          productQuantity: 4,
          productPrice: 20000,
          productImgPath: "/imgs/bakery-images/cupcakeb.png",
          toppings: ["Chuối"],
          totalPrice: 80000,
        },
      ],
      deliveryInfo: {
        fullName: "Nguyễn Văn A",
        streetName: "Số 10 Nguyễn Trãi",
        district: "Quận 1",
        ward: "Bến Thành",
        phoneNumber: "0901234567",
        note: "Giao vào giờ hành chính",
      },
    },
    {
      orderID: "ORDER2",
      totalAmount: 370000,
      orderStatus: "CANCEL",
      orderDate: "2024-12-04",
      orderDetails: [
        {
          productId: 11,
          productName: "Bánh cookies",
          productQuantity: 5,
          productPrice: 20000,
          productImgPath: "/imgs/bakery-images/cookiesb.png",
          toppings: ["Dừa khô"],
          totalPrice: 100000,
        },
        {
          productId: 2,
          productName: "Bánh tart trứng",
          productQuantity: 4,
          productPrice: 30000,
          productImgPath: "/imgs/bakery-images/eggtartb.png",
          toppings: ["Dừa khô"],
          totalPrice: 120000,
        },
        {
          productId: 5,
          productName: "Bánh brownies",
          productQuantity: 3,
          productPrice: 50000,
          productImgPath: "/imgs/bakery-images/browniesb.png",
          toppings: ["Kiwi", "Sốt caramel", "Hạt vừng"],
          totalPrice: 150000,
        },
      ],
      deliveryInfo: {
        fullName: "Lê Thị B",
        streetName: "Số 20 Lý Tự Trọng",
        district: "Quận 3",
        ward: "Phường 6",
        phoneNumber: "0932123456",
        note: "Gọi trước khi giao",
      },
    },
    {
      orderID: "ORDER3",
      totalAmount: 350000,
      orderStatus: "COMPLETED",
      orderDate: "2024-12-04",
      orderDetails: [
        {
          productId: 10,
          productName: "Bánh macaron",
          productQuantity: 1,
          productPrice: 20000,
          productImgPath: "/imgs/bakery-images/macaronb.png",
          toppings: ["Hạt vừng", "Sốt socola"],
          totalPrice: 20000,
        },
        {
          productId: 13,
          productName: "Bánh waffle",
          productQuantity: 4,
          productPrice: 50000,
          productImgPath: "/imgs/bakery-images/waffleb.png",
          toppings: ["Hạnh nhân", "Chuối"],
          totalPrice: 200000,
        },
        {
          productId: 12,
          productName: "Bánh sừng bò",
          productQuantity: 1,
          productPrice: 40000,
          productImgPath: "/imgs/bakery-images/croissantb.png",
          toppings: ["Dừa khô"],
          totalPrice: 40000,
        },
        {
          productId: 2,
          productName: "Bánh tart trứng",
          productQuantity: 3,
          productPrice: 30000,
          productImgPath: "/imgs/bakery-images/eggtartb.png",
          toppings: ["Sốt socola"],
          totalPrice: 90000,
        },
      ],
      deliveryInfo: {
        fullName: "Trần Văn C",
        streetName: "Số 5 Đinh Tiên Hoàng",
        district: "Quận Bình Thạnh",
        ward: "Phường 2",
        phoneNumber: "0987654321",
        note: "Giao tối từ 6h - 8h",
      },
    },
    {
      orderID: "ORDER4",
      totalAmount: 440000,
      orderStatus: "CANCEL",
      orderDate: "2024-12-04",
      orderDetails: [
        {
          productId: 1,
          productName: "Pizza hải sản",
          productQuantity: 2,
          productPrice: 200000,
          productImgPath: "/imgs/bakery-images/pizzab.png",
          toppings: ["Dừa khô", "Mật ong", "Chuối"],
          totalPrice: 400000,
        },
        {
          productId: 11,
          productName: "Bánh cookies",
          productQuantity: 2,
          productPrice: 20000,
          productImgPath: "/imgs/bakery-images/cookiesb.png",
          toppings: ["Hạnh nhân"],
          totalPrice: 40000,
        },
      ],
      deliveryInfo: {
        fullName: "Phạm Thị D",
        streetName: "Số 15 Pasteur",
        district: "Quận Phú Nhuận",
        ward: "Phường 8",
        phoneNumber: "0912123456",
        note: "Để tại bảo vệ",
      },
    },
    {
      orderID: "ORDER5",
      totalAmount: 20000,
      orderStatus: "COMPLETED",
      orderDate: "2024-12-04",
      orderDetails: [
        {
          productId: 7,
          productName: "Bánh su kem",
          productQuantity: 2,
          productPrice: 10000,
          productImgPath: "/imgs/bakery-images/chouxbb.png",
          toppings: ["Dừa khô", "Kiwi", "Mứt việt quất"],
          totalPrice: 20000,
        },
      ],
      deliveryInfo: {
        fullName: "Vũ Thị E",
        streetName: "Số 1 Điện Biên Phủ",
        district: "Quận 10",
        ward: "Phường 3",
        phoneNumber: "0962123456",
        note: "Không bấm chuông, chỉ gọi",
      },
    },
    {
      orderID: "ORDER6",
      totalAmount: 270000,
      orderStatus: "CANCEL",
      orderDate: "2024-12-04",
      orderDetails: [
        {
          productId: 15,
          productName: "Bánh donut",
          productQuantity: 4,
          productPrice: 30000,
          productImgPath: "/imgs/bakery-images/donutb.png",
          toppings: ["Kiwi", "Mứt việt quất", "Chuối"],
          totalPrice: 120000,
        },
        {
          productId: 15,
          productName: "Bánh donut",
          productQuantity: 5,
          productPrice: 30000,
          productImgPath: "/imgs/bakery-images/donutb.png",
          toppings: ["Kiwi"],
          totalPrice: 150000,
        },
      ],
      deliveryInfo: {
        fullName: "Nguyễn Văn A",
        streetName: "Số 10 Nguyễn Trãi",
        district: "Quận 1",
        ward: "Bến Thành",
        phoneNumber: "0901234567",
        note: "Giao vào giờ hành chính",
      },
    },
    {
      orderID: "ORDER7",
      totalAmount: 1040000,
      orderStatus: "PENDING",
      orderDate: "2024-12-04",
      orderDetails: [
        {
          productId: 1,
          productName: "Pizza hải sản",
          productQuantity: 4,
          productPrice: 200000,
          productImgPath: "/imgs/bakery-images/pizzab.png",
          toppings: ["Sốt caramel", "Kiwi", "Hạnh nhân"],
          totalPrice: 800000,
        },
        {
          productId: 9,
          productName: "Bánh táo",
          productQuantity: 3,
          productPrice: 80000,
          productImgPath: "/imgs/bakery-images/applepieb.png",
          toppings: ["Sốt caramel", "Kiwi", "Hạnh nhân"],
          totalPrice: 240000,
        },
      ],
      deliveryInfo: {
        fullName: "Lê Thị B",
        streetName: "Số 20 Lý Tự Trọng",
        district: "Quận 3",
        ward: "Phường 6",
        phoneNumber: "0932123456",
        note: "Gọi trước khi giao",
      },
    },
    {
      orderID: "ORDER8",
      totalAmount: 490000,
      orderStatus: "PROCESSING",
      orderDate: "2024-12-04",
      orderDetails: [
        {
          productId: 6,
          productName: "Bánh chuối",
          productQuantity: 5,
          productPrice: 80000,
          productImgPath: "/imgs/bakery-images/bananapieb.png",
          toppings: ["Sốt caramel", "Mứt đào"],
          totalPrice: 400000,
        },
        {
          productId: 13,
          productName: "Bánh waffle",
          productQuantity: 1,
          productPrice: 50000,
          productImgPath: "/imgs/bakery-images/waffleb.png",
          toppings: ["Mứt đào"],
          totalPrice: 50000,
        },
        {
          productId: 10,
          productName: "Bánh macaron",
          productQuantity: 2,
          productPrice: 20000,
          productImgPath: "/imgs/bakery-images/macaronb.png",
          toppings: ["Mứt đào", "Sốt socola"],
          totalPrice: 40000,
        },
      ],
      deliveryInfo: {
        fullName: "Trần Văn C",
        streetName: "Số 5 Đinh Tiên Hoàng",
        district: "Quận Bình Thạnh",
        ward: "Phường 2",
        phoneNumber: "0987654321",
        note: "Giao tối từ 6h - 8h",
      },
    },
    {
      orderID: "ORDER9",
      totalAmount: 190000,
      orderStatus: "PENDING",
      orderDate: "2024-12-04",
      orderDetails: [
        {
          productId: 13,
          productName: "Bánh waffle",
          productQuantity: 3,
          productPrice: 50000,
          productImgPath: "/imgs/bakery-images/waffleb.png",
          toppings: ["Dâu tươi", "Chuối", "Mứt đào", "Dừa khô"],
          totalPrice: 150000,
        },
        {
          productId: 7,
          productName: "Bánh su kem",
          productQuantity: 4,
          productPrice: 10000,
          productImgPath: "/imgs/bakery-images/chouxbb.png",
          toppings: ["Mứt việt quất", "Chuối", "Kiwi", "Sốt socola"],
          totalPrice: 40000,
        },
      ],
      deliveryInfo: {
        fullName: "Phạm Thị D",
        streetName: "Số 15 Pasteur",
        district: "Quận Phú Nhuận",
        ward: "Phường 8",
        phoneNumber: "0912123456",
        note: "Để tại bảo vệ",
      },
    },
    {
      orderID: "ORDER10",
      totalAmount: 160000,
      orderStatus: "COMPLETED",
      orderDate: "2024-12-04",
      orderDetails: [
        {
          productId: 9,
          productName: "Bánh táo",
          productQuantity: 2,
          productPrice: 80000,
          productImgPath: "/imgs/bakery-images/applepieb.png",
          toppings: ["Hạt vừng", "Dừa khô"],
          totalPrice: 160000,
        },
      ],
      deliveryInfo: {
        fullName: "Vũ Thị E",
        streetName: "Số 1 Điện Biên Phủ",
        district: "Quận 10",
        ward: "Phường 3",
        phoneNumber: "0962123456",
        note: "Không bấm chuông, chỉ gọi",
      },
    },
    {
      orderID: "ORDER11",
      totalAmount: 320000,
      orderStatus: "PENDING",
      orderDate: "2024-12-04",
      orderDetails: [
        {
          productId: 9,
          productName: "Bánh táo",
          productQuantity: 1,
          productPrice: 80000,
          productImgPath: "/imgs/bakery-images/applepieb.png",
          toppings: ["Sốt socola", "Mật ong", "Sốt caramel", "Phô mai"],
          totalPrice: 80000,
        },
        {
          productId: 3,
          productName: "Bánh muffin",
          productQuantity: 3,
          productPrice: 20000,
          productImgPath: "/imgs/bakery-images/muffinb.png",
          toppings: ["Kiwi", "Phô mai", "Mật ong"],
          totalPrice: 60000,
        },
        {
          productId: 8,
          productName: "Bánh cupcake",
          productQuantity: 5,
          productPrice: 20000,
          productImgPath: "/imgs/bakery-images/cupcakeb.png",
          toppings: ["Dâu tươi", "Chuối"],
          totalPrice: 100000,
        },
        {
          productId: 3,
          productName: "Bánh muffin",
          productQuantity: 4,
          productPrice: 20000,
          productImgPath: "/imgs/bakery-images/muffinb.png",
          toppings: ["Sốt socola"],
          totalPrice: 80000,
        },
      ],
      deliveryInfo: {
        fullName: "Nguyễn Văn A",
        streetName: "Số 10 Nguyễn Trãi",
        district: "Quận 1",
        ward: "Bến Thành",
        phoneNumber: "0901234567",
        note: "Giao vào giờ hành chính",
      },
    },
    {
      orderID: "ORDER12",
      totalAmount: 60000,
      orderStatus: "PENDING",
      orderDate: "2024-12-04",
      orderDetails: [
        {
          productId: 15,
          productName: "Bánh donut",
          productQuantity: 2,
          productPrice: 30000,
          productImgPath: "/imgs/bakery-images/donutb.png",
          toppings: ["Hạt vừng", "Dừa khô", "Kiwi", "Phô mai"],
          totalPrice: 60000,
        },
      ],
      deliveryInfo: {
        fullName: "Lê Thị B",
        streetName: "Số 20 Lý Tự Trọng",
        district: "Quận 3",
        ward: "Phường 6",
        phoneNumber: "0932123456",
        note: "Gọi trước khi giao",
      },
    },
    {
      orderID: "ORDER13",
      totalAmount: 1360000,
      orderStatus: "CANCEL",
      orderDate: "2024-12-04",
      orderDetails: [
        {
          productId: 10,
          productName: "Bánh macaron",
          productQuantity: 4,
          productPrice: 20000,
          productImgPath: "/imgs/bakery-images/macaronb.png",
          toppings: ["Dừa khô", "Mật ong", "Phô mai", "Kiwi"],
          totalPrice: 80000,
        },
        {
          productId: 5,
          productName: "Bánh brownies",
          productQuantity: 4,
          productPrice: 50000,
          productImgPath: "/imgs/bakery-images/browniesb.png",
          toppings: ["Mứt việt quất", "Dừa khô"],
          totalPrice: 200000,
        },
        {
          productId: 9,
          productName: "Bánh táo",
          productQuantity: 5,
          productPrice: 80000,
          productImgPath: "/imgs/bakery-images/applepieb.png",
          toppings: ["Sốt socola", "Kiwi", "Mật ong", "Phô mai"],
          totalPrice: 400000,
        },
        {
          productId: 1,
          productName: "Pizza hải sản",
          productQuantity: 3,
          productPrice: 200000,
          productImgPath: "/imgs/bakery-images/pizzab.png",
          toppings: ["Dừa khô", "Hạt vừng"],
          totalPrice: 600000,
        },
        {
          productId: 9,
          productName: "Bánh táo",
          productQuantity: 1,
          productPrice: 80000,
          productImgPath: "/imgs/bakery-images/applepieb.png",
          toppings: ["Hạt vừng", "Chuối", "Sốt caramel"],
          totalPrice: 80000,
        },
      ],
      deliveryInfo: {
        fullName: "Trần Văn C",
        streetName: "Số 5 Đinh Tiên Hoàng",
        district: "Quận Bình Thạnh",
        ward: "Phường 2",
        phoneNumber: "0987654321",
        note: "Giao tối từ 6h - 8h",
      },
    },
    {
      orderID: "ORDER14",
      totalAmount: 200000,
      orderStatus: "CANCEL",
      orderDate: "2024-12-04",
      orderDetails: [
        {
          productId: 6,
          productName: "Bánh chuối",
          productQuantity: 2,
          productPrice: 80000,
          productImgPath: "/imgs/bakery-images/bananapieb.png",
          toppings: ["Chuối"],
          totalPrice: 160000,
        },
        {
          productId: 8,
          productName: "Bánh cupcake",
          productQuantity: 2,
          productPrice: 20000,
          productImgPath: "/imgs/bakery-images/cupcakeb.png",
          toppings: ["Mứt đào", "Hạt vừng"],
          totalPrice: 40000,
        },
      ],
      deliveryInfo: {
        fullName: "Phạm Thị D",
        streetName: "Số 15 Pasteur",
        district: "Quận Phú Nhuận",
        ward: "Phường 8",
        phoneNumber: "0912123456",
        note: "Để tại bảo vệ",
      },
    },
    {
      orderID: "ORDER15",
      totalAmount: 890000,
      orderStatus: "PENDING",
      orderDate: "2024-12-04",
      orderDetails: [
        {
          productId: 1,
          productName: "Pizza hải sản",
          productQuantity: 4,
          productPrice: 200000,
          productImgPath: "/imgs/bakery-images/pizzab.png",
          toppings: ["Dừa khô", "Sốt caramel", "Phô mai"],
          totalPrice: 800000,
        },
        {
          productId: 10,
          productName: "Bánh macaron",
          productQuantity: 3,
          productPrice: 20000,
          productImgPath: "/imgs/bakery-images/macaronb.png",
          toppings: ["Kiwi", "Mứt việt quất", "Mật ong"],
          totalPrice: 60000,
        },
        {
          productId: 10,
          productName: "Bánh macaron",
          productQuantity: 1,
          productPrice: 20000,
          productImgPath: "/imgs/bakery-images/macaronb.png",
          toppings: ["Kiwi", "Dâu tươi"],
          totalPrice: 20000,
        },
        {
          productId: 7,
          productName: "Bánh su kem",
          productQuantity: 1,
          productPrice: 10000,
          productImgPath: "/imgs/bakery-images/chouxbb.png",
          toppings: ["Chuối", "Sốt socola", "Mật ong"],
          totalPrice: 10000,
        },
      ],
      deliveryInfo: {
        fullName: "Vũ Thị E",
        streetName: "Số 1 Điện Biên Phủ",
        district: "Quận 10",
        ward: "Phường 3",
        phoneNumber: "0962123456",
        note: "Không bấm chuông, chỉ gọi",
      },
    },
  ];

  const ovens = [
    {
      ovenID: 1,
      orderID: [],
      status: "Đang trống",
      cake_type: "Bánh mì",
    },
    {
      ovenID: 2,
      orderID: [],
      status: "Đang trống",
      cake_type: null,
    },
    {
      ovenID: 3,
      orderID: [],
      status: "Đang trống",
      cake_type: null,
    },
    {
      ovenID: 4,
      orderID: [],
      status: "Đang trống",
      cake_type: null,
    },
  ];

  // Lưu dữ liệu vào LocalStorage
  // // Kiểm tra sự tồn tại của biến "order"
  const existingOrders = localStorage.getItem("order");

  if (!existingOrders) {
    localStorage.setItem("order", JSON.stringify(orders));
    console.log("Orders đã được tạo và lưu vào localStorage!", orders);
  }

  const existingOvens = localStorage.getItem("ovens");

  if (!existingOvens) {
    localStorage.setItem("ovens", JSON.stringify(ovens));
    console.log("Orders đã được tạo và lưu vào localStorage!", ovens);
  }
};

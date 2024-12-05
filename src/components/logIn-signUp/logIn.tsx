import React, { useState } from "react";
import { StatusLogIn } from "./logIn-signUp"; // Import the StatusLogIn interface

// Define the statusSignUp function with StatusLogIn interface type
export const statuslogIn = (): StatusLogIn => ({
  status: "Đăng nhập",
  buttonstatus: "Đăng ký",
  question: "Chưa có tài khoản? ",
});

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate(); // Hook để điều hướng

  // Xử lý sự kiện submit của form
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Kiểm tra username và password
    if (username === "admin" && password === "admin") {
      // Nếu đúng, điều hướng đến trang admin
      window.location.href = "/admin/dashboard";
    } else {
      // Nếu sai, có thể hiển thị một thông báo lỗi
      alert("Tên đăng nhập hoặc mật khẩu không đúng.");
    }
  };

  return (
    <div>
      <form id="login w-[100%]" onSubmit={handleLogin}>
        <div className="flex flex-col justify-around gap-4">
          <input
            type="text"
            id="username"
            name="username"
            className="w-[450px] border border-black rounded-[15px] p-[6px] text-[20px] font-thin"
            placeholder="Tên Đặng nhập"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Lưu giá trị username
          />
          <input
            type="password" // Đổi thành type "password" để bảo mật mật khẩu
            id="password"
            name="password"
            className="w-[450px] border border-black rounded-[15px] p-[6px] text-[20px] font-thin mt-3"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Lưu giá trị password
          />
          <button
            type="submit"
            className="bg-[rgb(147,60,30)] m-5 block rounded-[20px] py-[3px] px-10 text-[20px] font-bold text-white"
          >
            Đăng nhập
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;

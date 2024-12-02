/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./sidebarAdmin.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SidebarAdmin = () => {
  const router = useRouter();
  return (
    <div>
      <div className="sidebar block">
        <img
          src="/imgs/real-logo-removebg-preview.png"
          className="Logo cursor-pointer"
          alt="Logo"
          onClick={() => (window.location.href = "/home")}
        />
        <div className="btnContainer">
          <a href="/admin/dashboard">
            <button type="button" className="btn">
              <img
                className="icon"
                src="/imgs/bakery-images/iconstatistic.png"
                alt="icon-statistic"
              />
              Thống kê
            </button>
          </a>

          <button
            onClick={() => (window.location.href = "/admin/manage-order")}
            type="button"
            className="btn"
          >
            <img
              className="icon"
              src="/imgs/bakery-images/icon-order.png"
              alt="icon-order"
            />
            Đơn hàng
          </button>

          <button
            type="button"
            className="btn"
            onClick={() => (window.location.href = "/admin/manage-oven")}
          >
            <svg
              className="icon"
              fill="#ffffff"
              width="30px"
              height="30px"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M12 2C10.906937 2 10 2.9069372 10 4L7 4C5.3550302 4 4 5.3550302 4 7L4 42C4 43.644459 5.3544268 45 7 45L9 45L9 46C9 47.093063 9.9069372 48 11 48L14 48C15.093063 48 16 47.093063 16 46L16 45L34 45L34 46C34 47.093063 34.906937 48 36 48L39 48C40.093063 48 41 47.093063 41 46L41 45L43 45C44.645063 45 46 43.645063 46 42L46 7C46 5.3544268 44.644459 4 43 4L40 4C40 2.9069372 39.093063 2 38 2L32 2C30.906937 2 30 2.9069372 30 4L21 4C21 2.9069372 20.093063 2 19 2L12 2 z M 7 6L10.832031 6 A 1.0001 1.0001 0 0 0 11.158203 6L19.832031 6 A 1.0001 1.0001 0 0 0 20.158203 6L30.832031 6 A 1.0001 1.0001 0 0 0 31.158203 6L38.832031 6 A 1.0001 1.0001 0 0 0 39.158203 6L43 6C43.563541 6 44 6.4355732 44 7L44 42C44 42.562937 43.562937 43 43 43L40.167969 43 A 1.0001 1.0001 0 0 0 39.841797 43L35.167969 43 A 1.0001 1.0001 0 0 0 34.841797 43L15.167969 43 A 1.0001 1.0001 0 0 0 14.841797 43L10.167969 43 A 1.0001 1.0001 0 0 0 9.8417969 43L7 43C6.4355732 43 6 42.563541 6 42L6 7C6 6.4349698 6.4349698 6 7 6 z M 10 8C8.895 8 8 8.895 8 10C8 11.105 8.895 12 10 12C11.105 12 12 11.105 12 10C12 8.895 11.105 8 10 8 z M 16 8C14.895 8 14 8.895 14 10C14 11.105 14.895 12 16 12C17.105 12 18 11.105 18 10C18 8.895 17.105 8 16 8 z M 22 8C20.895 8 20 8.895 20 10C20 11.105 20.895 12 22 12C23.105 12 24 11.105 24 10C24 8.895 23.105 8 22 8 z M 28 8C26.895 8 26 8.895 26 10C26 11.105 26.895 12 28 12C29.105 12 30 11.105 30 10C30 8.895 29.105 8 28 8 z M 40 8C38.895 8 38 8.895 38 10C38 11.105 38.895 12 40 12C41.105 12 42 11.105 42 10C42 8.895 41.105 8 40 8 z M 9 14L9 15L9 33.832031 A 1.0001 1.0001 0 0 0 9 34.158203L9 40L41 40L41 34.167969 A 1.0001 1.0001 0 0 0 41 33.841797L41 14L9 14 z M 11 16L39 16L39 33L35.791016 33C35.921094 32.660389 36 32.296958 36 31.914062C36 27.002683 31.997317 23 27.085938 23L22.912109 23C18.001606 23 14 27.002683 14 31.914062C14 32.296958 14.079025 32.660389 14.208984 33L11 33L11 16 z M 23 25L27 25L27 28 A 1.0001 1.0001 0 1 0 29 28L29 25.384766C31.872379 26.224275 34 28.763082 34 31.914062C34 32.525554 33.525069 33 32.912109 33L17.085938 33C16.474447 33 16 32.525554 16 31.914062C16 28.762888 18.127944 26.224105 21 25.384766L21 28 A 1.0001 1.0001 0 1 0 23 28L23 25 z M 11 35L17.085938 35L32.912109 35L39 35L39 38L11 38L11 35 z M 11 45L14 45L14 46L11 46L11 45 z M 36 45L39 45L39 46L36 46L36 45 z"></path>
              </g>
            </svg>
            Lò nướng{" "}
          </button>
          <button type="button" className="btn inventory ">
            <img
              className="icon"
              src="/imgs/bakery-images/icon-product.png"
              alt="icon-product"
            />
            Kho
            <ul className="list block">
              <li className="block w-[auto] h-[40px]  content-center">
                <span
                  onClick={() =>
                    (window.location.href = "/admin/manage-product")
                  }
                >
                  Bánh
                </span>
              </li>
              <li className="block w-[auto] h-[40px]  content-center">
                <span
                  onClick={() =>
                    (window.location.href = "/admin/manage-ingredient")
                  }
                >
                  Nguyên liệu
                </span>
              </li>
              <li className="block w-[auto] h-[40px]  content-center">
                <span
                  onClick={() =>
                    (window.location.href = "/admin/manage-topping")
                  }
                >
                  Toppings
                </span>
              </li>
            </ul>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarAdmin;
"use client";
import CardInfo from "@/components/dashboard/card-info";
import Chart from "@/components/dashboard/chart";
import SidebarAdmin from "@/components/sidebar-admin/sidebarAdmin";
import { Progress } from "@/components/ui/progress";
import { CalendarDays } from "lucide-react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

const Page = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  console.log(selectedDate);
  return (
    <div>
      <div className=" ml-[250px] mt-5 pl-[10px] ">
        <SidebarAdmin></SidebarAdmin>
        <div className="flex justify-end mr-[50px]">
          <DatePicker
            className="w-[220px] flex justify-center items-center"
            selected={selectedDate}
            onChange={handleDateChange}
            minDate={new Date()} // Chỉ cho phép chọn từ ngày hôm nay trở đi
            dateFormat="MM/yyyy" // Định dạng hiển thị: tháng/năm
            showMonthYearPicker // Chỉ hiển thị picker tháng/năm
            customInput={
              <button className="flex items-center space-x-2 bg-gray-200  border-2 border-black border-solid text-black font-bold px-4 py-2 rounded-xl">
                <CalendarDays size={20} />
                <span>
                  {selectedDate
                    ? selectedDate.toLocaleDateString("vi-VN", {
                        month: "long",
                      })
                    : "Chọn mốc thời gian"}
                </span>
              </button>
            }
          />
        </div>
        <div className="flex justify-around items-center ">
          <CardInfo title="Doanh thu" value={1000000000}></CardInfo>
          <CardInfo title="Chi phí" value={300000000}></CardInfo>
          <CardInfo title="Lợi nhuận" value={1000000000 - 300000000}></CardInfo>
        </div>
        <div className="flex justify-between mt-10">
          <div className="ml-3">
            <Chart></Chart>
          </div>
          <div className="w-[300px] mr-16 ">
            <div className="mb-5 text-xl font-bold text-center">
              Top 10 bánh bán chạy nhất
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <div>Bánh Cookies</div>
                <div>70%</div>
              </div>
              <Progress value={70} />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <div>Bánh Donut</div>
                <div>50%</div>
              </div>
              <Progress value={50} />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <div>Bánh Muffine</div>
                <div>40%</div>
              </div>
              <Progress value={40} />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <div>Bánh Tart Trứng</div>
                <div>25%</div>
              </div>
              <Progress value={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

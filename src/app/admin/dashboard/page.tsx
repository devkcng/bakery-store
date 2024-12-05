"use client";

import React, { useEffect, useState } from "react";
import CardInfo from "@/components/dashboard/card-info";
import Chart from "@/components/dashboard/chart";
import SidebarAdmin from "@/components/sidebar-admin/sidebarAdmin";
import { Progress } from "@/components/ui/progress";
import { CalendarDays } from "lucide-react";
import DatePicker from "react-datepicker";
import { fetchDashboardData } from "@/app/api/dashboard/route";

// Define the Dashboard type
interface Dashboard {
  revenue: number;
  cost: number;
  profit: number;
  chartData: {
    labels: string[];
    values: number[];
  };
  topSellingProducts: {
    name: string;
    percentage: number;
  }[];
}

const Page = () => {
  const [dashboardData, setDashboardData] = useState<Dashboard | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Dashboard = await fetchDashboardData(); // Use the Dashboard type here
        setDashboardData(data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  if (!dashboardData) {
    return <div>Loading...</div>; // Loading state while fetching data
  }

  const chartData = {
    labels: dashboardData.chartData.labels,
    values: dashboardData.chartData.values,
  };

  return (
    <div>
      <div className="ml-[250px] mt-5 pl-[10px]">
        <SidebarAdmin />
        <div className="flex justify-end mr-[50px]">
          <DatePicker
            className="w-[220px] flex justify-center items-center"
            selected={selectedDate}
            onChange={handleDateChange}
            minDate={new Date()}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            customInput={
              <button className="flex items-center space-x-2 bg-gray-200 border-2 border-black border-solid text-black font-bold px-4 py-2 rounded-xl">
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
        <div className="flex justify-around items-center">
          <CardInfo title="Doanh thu" value={dashboardData.revenue} />
          <CardInfo title="Chi phí" value={dashboardData.cost} />
          <CardInfo title="Lợi nhuận" value={dashboardData.profit} />
        </div>
        <div className="flex justify-between mt-10">
          <div className="ml-3">
            <Chart data={chartData} />
          </div>
          <div className="w-[300px] mr-16">
            <div className="mb-5 text-xl font-bold text-center">
              Top 10 bánh bán chạy nhất
            </div>
            {dashboardData.topSellingProducts.map((product, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <div>{product.name}</div>
                  <div>{product.percentage}%</div>
                </div>
                <Progress value={product.percentage} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

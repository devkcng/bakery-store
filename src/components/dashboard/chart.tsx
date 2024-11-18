import {
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import "react-datepicker/dist/react-datepicker.css";
import { Bar, BarChart, CartesianGrid, Label, XAxis, YAxis } from "recharts";
import { ChartConfig, ChartContainer } from "../ui/chart";
import { Progress } from "@/components/ui/progress";

const Chart = () => {
  const chartData = [
    { month: "January", profit: 186, revenue: 80 },
    { month: "February", profit: 305, revenue: 200 },
    { month: "March", profit: 237, revenue: 120 },
    { month: "April", profit: 73, revenue: 190 },
    { month: "May", profit: 209, revenue: 130 },
    { month: "June", profit: 214, revenue: 140 },
  ];
  const chartConfig = {
    profit: {
      label: "Lợi nhuận",
      color: "#f5ae5e",
    },
    revenue: {
      label: "revenue",
      color: "#e69c48",
    },
  } satisfies ChartConfig;
  return (
    <div className="h-[400px] ">
      <div className="m-auto text-center font-semibold text-xl  ">
        Lợi nhuận các tháng trong năm 2024
      </div>
      <div className="flex justify-between h-full">
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            {/* <ChartLegend content={<ChartLegendContent />} className="" /> */}
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis>
              {/* Tiêu đề cho trục Y */}
              <Label
                value="VNĐ"
                angle={-90}
                position="insideLeft"
                className="text-xl"
                x={2}
              />
            </YAxis>
            <ChartTooltip content={<ChartTooltipContent />} />

            <Bar
              dataKey="profit"
              fill="var(--color-profit)"
              radius={5}
              barSize={70}
            />
            {/* <Bar dataKey="revenue" fill="var(--color-revenue)" radius={5} /> */}
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default Chart;

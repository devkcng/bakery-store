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

interface ChartProps {
  data: {
    labels: string[];
    values: number[];
  };
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  const chartData = data.labels.map((label, index) => ({
    month: label,
    profit: data.values[index], // Example, adjust according to your data
    revenue: 0, // Example, you may not need this
  }));

  const chartConfig = {
    profit: {
      label: "Lợi nhuận",
      color: "#f5ae5e",
    },
    revenue: {
      label: "Doanh thu",
      color: "#e69c48",
    },
  };

  return (
    <div className="h-[400px]">
      <div className="m-auto text-center font-semibold text-xl">
        Lợi nhuận các tháng trong năm 2024
      </div>
      <div className="flex justify-between h-full">
        <ChartContainer config={chartConfig}>
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis>
              <Label
                value="VNĐ"
                angle={-90}
                position="insideLeft"
                className="text-xl"
                x={2}
              />
            </YAxis>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="profit" fill="var(--color-profit)" radius={5} barSize={70} />
            {/* You can add more bars if needed */}
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default Chart;

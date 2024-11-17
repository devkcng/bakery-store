import React, { FC, useState } from "react";
import DatePicker from "react-datepicker";
import { CalendarDays } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";

interface DateBoxProps {
  date: Date;
  onClick: (dayInfo: {
    day: string;
    date: number;
    month: string;
    year: number;
  }) => void;
}

interface DateSelectorProps {
  onDateSelect: (dayInfo: {
    day: string;
    date: number;
    month: string;
    year: number;
  }) => void;
}

const vietnameseDays = [
  "Chủ nhật",
  "Thứ 2",
  "Thứ 3",
  "Thứ 4",
  "Thứ 5",
  "Thứ 6",
  "Thứ 7",
];

const vietnameseMonths = [
  "Tháng 1",
  "Tháng 2",
  "Tháng 3",
  "Tháng 4",
  "Tháng 5",
  "Tháng 6",
  "Tháng 7",
  "Tháng 8",
  "Tháng 9",
  "Tháng 10",
  "Tháng 11",
  "Tháng 12",
];

const DateBox: FC<DateBoxProps> = ({ date, onClick }) => {
  const handleClick = () => {
    onClick({
      day: vietnameseDays[date.getDay()],
      date: date.getDate(),
      month: vietnameseMonths[date.getMonth()],
      year: date.getFullYear(),
    });
  };

  return (
    <div
      className="border border-gray-300 p-4 text-center w-32 cursor-pointer"
      onClick={handleClick}
    >
      <div className="text-lg font-semibold">
        {vietnameseDays[date.getDay()]}
      </div>
      <div className="text-3xl font-bold my-2">{date.getDate()}</div>
      <div>{vietnameseMonths[date.getMonth()]}</div>
    </div>
  );
};

const DateSelector: FC<DateSelectorProps> = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const getNextDays = (date: Date): Date[] => {
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    const dayAfterNext = new Date(date);
    dayAfterNext.setDate(dayAfterNext.getDate() + 2);
    return [date, nextDay, dayAfterNext];
  };

  return (
    <div className="font-sans">
      <div className="inline-block">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          minDate={new Date()} // Chỉ cho phép chọn từ ngày hôm nay trở đi
          dateFormat="yyyy-MM-dd"
          customInput={
            <button className="flex items-center space-x-2 bg-[#8B4513] text-white px-4 py-2 rounded-lg">
              <CalendarDays size={20} />
              <span>Chọn ngày</span>
            </button>
          }
        />
      </div>
      <div className="flex space-x-4 mb-4 mt-4">
        {selectedDate &&
          getNextDays(selectedDate).map((date, index) => (
            <DateBox key={index} date={date} onClick={onDateSelect} />
          ))}
      </div>
    </div>
  );
};

export default DateSelector;

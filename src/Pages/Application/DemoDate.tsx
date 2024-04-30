import React, { useState } from "react";
import Calendar, { CalendarTileProperties } from "react-calendar";
import "react-calendar/dist/Calendar.css";

const RangeDateCalendar: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date) => {
    if (!startDate) {
      setStartDate(date);
    } else if (!endDate) {
      setEndDate(date);
    } else {
      setStartDate(date);
      setEndDate(null);
    }
  };

  const tileClassName = ({ date, view }: CalendarTileProperties) => {
    if (!startDate || !endDate) return "";

    if (date >= startDate && date <= endDate) {
      return "selected-range";
    } else if (startDate && date.getTime() === startDate.getTime()) {
      return "selected-start-date";
    } else if (endDate && date.getTime() === endDate.getTime()) {
      return "selected-end-date";
    } else {
      return "";
    }
  };

  return (
    <div>
  
      <Calendar
        onChange={handleDateChange}
        value={startDate || endDate}
        selectRange
        tileClassName={tileClassName}
      />
    </div>
  );
};

export default RangeDateCalendar;

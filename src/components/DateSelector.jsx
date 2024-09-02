import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="container absolute left-[-15rem] min-w-[480px]">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
    </div>
  );
};

export default DateSelector;

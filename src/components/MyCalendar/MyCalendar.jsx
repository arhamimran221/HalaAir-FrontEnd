import React, { useState } from "react";
import Calendar from "react-calendar";
import "./MyCalendar.css";
import calendaricon from "../../assets/svg/calendaricon.svg";

const MyCalendar = ({
  selectedDate,
  setSelectedDate,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const formatSelectedDate = (date) => {
    const options = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };

    return date ? date.toLocaleString("en-US", options) : "Depart - Return";
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsOpen(false);
  };

  const toggleCalendar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="CalenderCard">
      <div className="">
        <div className='calendartag' onClick={toggleCalendar}>
        <div className="iconcalendar">
            <img src={calendaricon} alt="missing" />
          </div>
          <div>{formatSelectedDate(selectedDate)}</div>
         
        </div>
        {isOpen && (
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            onClickDay={toggleCalendar}
          />
        )}
      </div>
    </div>
  );
};

export default MyCalendar;

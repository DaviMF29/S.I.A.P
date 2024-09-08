import React, { useState, useEffect } from "react";
import './Calendar.css'

const months = [
  "Janeiro", "Fevereiro", "Março",
  "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro",
  "Outubro", "Novembro", "Dezembro",
];

const Calendar: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());

  const renderCalendar = () => {
    const start = new Date(year, month, 1).getDay();
    const endDate = new Date(year, month + 1, 0).getDate();
    const end = new Date(year, month, endDate).getDay();
    const endDatePrev = new Date(year, month, 0).getDate();

    const datesArray = [];

    for (let i = start; i > 0; i--) {
      datesArray.push(
        <li key={`prev-${i}`} className="inactive">
          {endDatePrev - i + 1}
        </li>
      );
    }

    for (let i = 1; i <= endDate; i++) {
      const isToday =
        i === date.getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear();
      datesArray.push(
        <li key={`current-${i}`} className={isToday ? "today" : ""}>
          {i}
        </li>
      );
    }

    for (let i = end; i < 6; i++) {
      datesArray.push(
        <li key={`next-${i}`} className="inactive">
          {i - end + 1}
        </li>
      );
    }

    return datesArray;
  };

  const handleNavClick = (direction: "prev" | "next") => {
    if (direction === "prev" && month === 0) {
      setYear((prev) => prev - 1);
      setMonth(11);
    } else if (direction === "next" && month === 11) {
      setYear((prev) => prev + 1);
      setMonth(0);
    } else {
      setMonth((prev) => (direction === "next" ? prev + 1 : prev - 1));
    }
    setDate(new Date(year, month, new Date().getDate()));
  };

  useEffect(() => {
    setDate(new Date(year, month, new Date().getDate()));
  }, [month, year]);

  return (
    <div className="calendar">
      <h3>{`${months[month]} ${year}`}</h3>
      <ul className="dates">{renderCalendar()}</ul>
      <button id="prev" onClick={() => handleNavClick("prev")}></button>
      <button id="next" onClick={() => handleNavClick("next")}></button>
    </div>
  );
};

export default Calendar;

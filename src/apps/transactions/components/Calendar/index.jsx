import React, { useState } from "react";
import { connect } from "react-redux";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

import { CalendarWrapper } from "./styles";
import { getWeekDays, getWeekRange, getCurrentWeekDays, toStringDate } from "utils";
import { setWeekDays } from "apps/transactions/actions";

const Calendar = ({ setWeekDays }) => {
  const [hoverRange, setHoverRange] = useState();
  const [selectedDays, setSelectedDays] = useState(getCurrentWeekDays());

  const handleDayChange = date => {
    const weekDays = getWeekDays(getWeekRange(date).from);
    setSelectedDays(weekDays);
    setWeekDays({
      weekDays: weekDays.map(toStringDate),
    });
  };

  const handleDayEnter = date => {
    setHoverRange(getWeekRange(date));
  };

  const handleDayLeave = () => {
    setHoverRange(null);
  };

  const handleWeekClick = (_, days) => {
    setSelectedDays(days);
  };

  const daysAreSelected = selectedDays.length > 0;

  const modifiers = {
    hoverRange,
    selectedRange: daysAreSelected && {
      from: selectedDays[0],
      to: selectedDays[6],
    },
    hoverRangeStart: hoverRange && hoverRange.from,
    hoverRangeEnd: hoverRange && hoverRange.to,
    selectedRangeStart: daysAreSelected && selectedDays[0],
    selectedRangeEnd: daysAreSelected && selectedDays[6],
  };

  return (
    <CalendarWrapper>
      <DayPicker
        showWeekNumbers
        showOutsideDays
        selectedDays={selectedDays}
        modifiers={modifiers}
        onDayClick={handleDayChange}
        onDayMouseEnter={handleDayEnter}
        onDayMouseLeave={handleDayLeave}
        onWeekClick={handleWeekClick}
      />
    </CalendarWrapper>
  );
};

export default connect(
  null,
  { setWeekDays },
)(Calendar);

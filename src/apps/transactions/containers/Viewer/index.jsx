import React from "react";

import DailyRecord from "../DailyRecord";
import ItemEditor from "../ItemEditor";
import Calendar from "../../components/Calendar";
import { getCurrentWeekDays } from "utils";

const Viewer = () => {
  const currentWeekDays = getCurrentWeekDays();

  return (
    <div>
      {currentWeekDays.map(day => (
        <DailyRecord key={day.getDay()} day={day} />
      ))}
      <Calendar />
      <ItemEditor />
    </div>
  );
};

export default Viewer;

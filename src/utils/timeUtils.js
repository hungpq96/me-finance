import moment from "moment";

export const getWeekDays = (weekStart) => {
  const days = [weekStart];

  for (let i = 1; i < 7; i += 1) {
    days.push(moment(weekStart).add(i, "days").toDate());
  }

  return days;
};

export const getWeekRange = (date) => ({
  from: moment(date).startOf("week").toDate(),
  to: moment(date).endOf("week").toDate(),
});

export const getCurrentWeekDays = () => {
  const currentWeek = getWeekRange(new Date()).from;
  return getWeekDays(currentWeek);
};

export const getDayName = (date) => moment(date).format("dddd");

export const isToday = (date) => moment(date).isSame(new Date(), "day");

export const isWithinDay = (date, comparingDate) =>
  moment(date).isSame(comparingDate, "day");

export const isCurrentWeek = (date) => moment(date).isSame(new Date(), "week");

export const isWithinWeek = (date, comparingDate) =>
  moment(date).isSame(comparingDate, "week");

export const getMonthlyDate = (date) => moment(date).format("DD/MM");

export const getMinimalDate = (date) => moment(date).format("YYYYMMDD");

export const toStringDate = (date) => moment(date).toString();

export const toDate = (date, format) => {
  return format ? moment(new Date(), format) : new Date(date);
};

export const getUnix = () => new Date().getTime();

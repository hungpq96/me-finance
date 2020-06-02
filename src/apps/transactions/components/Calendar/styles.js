import styled from "styled-components";

export const CalendarWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;

  .DayPicker-Day--today {
    color: black !important;
    font-weight: 900;
    text-decoration: underline;
  }

  .DayPicker-Day:hover {
    color: black;
    font-weight: bold;
  }
`;

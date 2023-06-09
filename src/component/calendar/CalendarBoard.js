import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Select } from "../../store/CalendarSlice";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { modalToggle } from "../../store/CalendarSlice";

const Body = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
`;

const Day = styled.div`
  border: 1px solid black;
  border-radius: 5%;
  flex-basis: 14%;
  font-weight: 500;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  > .has-todo {
    position: absolute;
    top: 3%;
    right: 3%;

    border-radius: 50%;
    background-color: orange;
    width: 9px;
    height: 9px;
  }

  &.selected {
    background-color: rgba(191, 208, 237, 0.88);
  }
  &.disavled {
    background-color: rgba(217, 217, 217, 0.85);
  }
  &.vaild {
    background-color: rgba(255, 255, 255, 0.85);
  }
  &.not-vaild {
    background-color: purple;
  }
  > .not-vaild {
    color: gray;
  }
`;

const Week = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  margin-top: 1px;
`;

export default function CalenderBoard() {
  const curM = useSelector((state) => state.calendar.value);
  const selD = useSelector((state) => state.selectedDate.value);

  const currentMonth = new Date(curM);
  const selectedDate = new Date(selD);
  const dispatch = useDispatch();

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const row = [];
  let days = [];
  let day = startDate;

  const [todoDates, setTodoDates] = useState([]);
  useEffect(() => {
    axios.get("/dates").then((res) => {
      setTodoDates(res.data);
    });
  }, []);

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      days.push(day);
      day = addDays(day, 1);
    }
    row.push(days);
    days = [];
  }
  return (
    <Body>
      {row.map((week, i) => (
        <Week key={week[0] + i}>
          {week.map((day) => (
            <Day
              className={
                !isSameMonth(day, monthStart)
                  ? "disavled"
                  : isSameDay(day, selectedDate)
                  ? "selected"
                  : format(currentMonth, "M") !== format(day, "M")
                  ? "not-vaild"
                  : "vaild"
              }
              key={day}
              onClick={() => {
                dispatch(modalToggle());
                dispatch(Select(addDays(day, 1).toISOString().slice(0, 10)));
              }}
            >
              <span
                className={
                  format(currentMonth, "M") !== format(day, "M")
                    ? "not-vaild"
                    : ""
                }
              >
                {format(day, "d")}
              </span>
              {todoDates.includes(
                addDays(day, 1).toISOString().slice(0, 10)
              ) && <div className="has-todo" />}
            </Day>
          ))}
        </Week>
      ))}
    </Body>
  );
}

import { createSlice } from "@reduxjs/toolkit";
import { subMonths, addMonths } from "date-fns";

export const CalendarSlice = createSlice({
  name: "calendar",
  initialState: { value: new Date().toISOString() },
  reducers: {
    prevMonth: (state) => {
      state.value = subMonths(new Date(state.value), 1).toDateString();
    },
    nextMonth: (state) => {
      state.value = addMonths(new Date(state.value), 1).toDateString();
    },
  },
});

export const CalendarSelecteSlice = createSlice({
  name: "selectedDate",
  initialState: { value: new Date().toISOString().slice(0, 10) },
  reducers: {
    Select: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const ModalOpenSlice = createSlice({
  name: "modal",
  initialState: { value: false },
  reducers: {
    modalToggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { prevMonth, nextMonth } = CalendarSlice.actions;
export const { Select } = CalendarSelecteSlice.actions;
export const { modalToggle } = ModalOpenSlice.actions;

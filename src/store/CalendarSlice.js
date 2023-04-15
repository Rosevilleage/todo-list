import { createSlice } from "@reduxjs/toolkit";
import { subMonths, addMonths } from "date-fns";

export const CalendarSlice = createSlice({
	name: 'calendar',
	initialState: {value: new Date().toISOString()},
	reducers: {
		prevMonth: (state, action) => {
			state.value = subMonths(new Date(state.value), 1).toDateString()
		},
		nextMonth: (state, action) => {
			state.value = addMonths(new Date(state.value), 1).toDateString()
		}
	}
})

export const CalendarSelecteSlice = createSlice({
	name: 'selectedDate',
	initialState: {value: new Date().toISOString()},
	reducers: {
		Select: (state, action) => {state.value = action.payload}
	}
})

export const {prevMonth, nextMonth} = CalendarSlice.actions
export const {Select} = CalendarSelecteSlice.actions
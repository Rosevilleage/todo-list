import { createSlice } from "@reduxjs/toolkit";
import { subMonths, addMonths } from "date-fns";

export const CalendarSlice = createSlice({
	name: 'calendar',
	initialState: {value: new Date()},
	reducers: {
		prevMonth: (state, action) => {
			state.value = subMonths(state.value, 1)
		},
		nextMonth: (state, action) => {
			state.value = addMonths(state.value, 1)
		}
	}
})

export const CalendarSelecteSlice = createSlice({
	name: 'selectedDate',
	initialState: {value: new Date()},
	reducers: {
		Select: (state, action) => {state.value = action.payload}
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
})

export const {prevMonth, nextMonth} = CalendarSlice.actions
export const {Select} = CalendarSelecteSlice.actions
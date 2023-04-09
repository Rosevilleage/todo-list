import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
	name: 'todos',
	initialState: {value: []},
	reducers: {
		fill: (state,action) => {
			state.value = action.payload;
		}
	}
});

export default todoSlice;
export const {fill} = todoSlice.actions;
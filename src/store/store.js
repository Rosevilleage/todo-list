import { configureStore, createSlice } from "@reduxjs/toolkit";
import {
  CalendarSlice,
  CalendarSelecteSlice,
  ModalOpenSlice,
} from "./CalendarSlice";

const todoSlice = createSlice({
  name: "todos",
  initialState: { value: [] },
  reducers: {
    fill: (state, action) => {
      state.value = action.payload;
    },
  },
});

const deleteSlice = createSlice({
  name: "isDelete",
  initialState: { value: false },
  reducers: {
    deleteTrigger: (state, action) => {
      state.value = action.payload;
    },
  },
});

const loadSlice = createSlice({
  name: "load",
  initialState: { value: false },
  reducers: {
    trigger: (state, action) => {
      state.value = !state.value;
    },
  },
});

const isAddSlice = createSlice({
  name: "isAdd",
  initialState: { value: false },
  reducers: {
    addOn: (state, action) => {
      state.value = true;
    },
    addOff: (state, action) => {
      state.value = false;
    },
  },
});

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    isDelete: deleteSlice.reducer,
    load: loadSlice.reducer,
    isAdd: isAddSlice.reducer,
    calendar: CalendarSlice.reducer,
    selectedDate: CalendarSelecteSlice.reducer,
    modal: ModalOpenSlice.reducer,
  },
});
export const { fill } = todoSlice.actions;
export const { deleteTrigger } = deleteSlice.actions;
export const { trigger } = loadSlice.actions;
export const { addOn, addOff } = isAddSlice.actions;
export default store;

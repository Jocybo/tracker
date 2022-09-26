import { createSlice } from "@reduxjs/toolkit";

const expenseTracker = createSlice({

  name: "expense",
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
    },
    deleteExpense: (state, action) => {
      return state = state.filter((v,index) => index !== action.payload)
    },
  },
});

export const { addExpense, deleteExpense } = expenseTracker.actions;

export default expenseTracker;

import { createSlice } from "@reduxjs/toolkit";

const expenseTracker = createSlice({

  name: "expense",
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
    },
    deleteExpense: (state, action) => {
      return state = state.filter((e, index) => index !== action.payload)
    },
    editExpense: (state, action) => {
     return state = state.findIndex((e,index)=> index === action.payload)
    }
  },
});

export const { addExpense, deleteExpense, editExpense } = expenseTracker.actions;

export default expenseTracker;


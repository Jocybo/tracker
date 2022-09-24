import { createSlice } from "@reduxjs/toolkit";

const expenseTracker = createSlice({

  name: "expense",
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
    },
    deleteExpense: (state,action) => {
      state = state.filter((e,index)=>index !== action.payload.id)
    }
  },
});

export const { addExpense,deleteExpense } = expenseTracker.actions;

export default expenseTracker;

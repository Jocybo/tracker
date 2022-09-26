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
      state = state.findIndex((e, index) => {
        if (index === action.payload) {
          return state = {
            category: action.payload.category,
            expensename: action.payload.expensename,
            amount: action.payload.amount,
            dateoftransaction: action.payload.dateoftransaction,
            description: action.payload.description,
          }
        }
      })
    }
  },
});

export const { addExpense, deleteExpense, editExpense } = expenseTracker.actions;

export default expenseTracker;


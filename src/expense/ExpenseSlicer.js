import { createSlice } from "@reduxjs/toolkit";

const expenseTracker = createSlice({
  
  name: "expenses",
  initialState: [],
  reducers: {
    category: (state) => {
      return state.category ;
    },
    expensename: (state) => {
      return state.expensename;
    },
    amount: (state) => {
      return state.amount;
    },
    dateoftransaction: (state) => {
      return state.dateoftransaction;
    },
    description: (state) => {
      return state.description;
    },
  },
});

export const {category,expensename,amount,dateoftransaction,description } = expenseTracker.actions;

export default expenseTracker;

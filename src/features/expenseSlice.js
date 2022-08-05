import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenseList: [],
};

const ExpenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    saveExpense: (state, action) => {
      state.expenseList.push(action.payload);
    },
  },
});

export const { saveExpense } = ExpenseSlice.actions;

export const selectExpenseList = (state) => state.expenses.expenseList;
export default ExpenseSlice.reducer;

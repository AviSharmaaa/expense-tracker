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
    deleteExpense: (state, action) => {
      const result = [];
      state.expenseList.map((item) => {
        if (item.id !== action.payload) {
          result.push(item);
        }
      });
      state.expenseList = result;
    },
  },
});

export const { saveExpense, deleteExpense } = ExpenseSlice.actions;

export const selectExpenseList = (state) => state.expenses.expenseList;
export default ExpenseSlice.reducer;

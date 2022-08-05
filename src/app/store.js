import { configureStore } from "@reduxjs/toolkit";
import ExpenseReducer from "../features/expenseSlice";

//Middleware
const saveStateToLocalStorage = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem("expenses", JSON.stringify(getState()));
    return result;
  };
};

const loadDataFromLocalStorage = () => {
  const expensesList = localStorage.getItem("expenses");
  if (expensesList !== null) {
    return JSON.parse(expensesList);
  }
};

export const store = configureStore({
  reducer: {
    expenses: ExpenseReducer,
  },
  preloadedState: loadDataFromLocalStorage(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveStateToLocalStorage),
});

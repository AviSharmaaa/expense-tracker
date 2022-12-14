import React from "react";
import "./App.css";
import Input from "./components/input/input";
import ExpenseItem from "./components/expense_item/ExpenseItem";
import { useSelector } from "react-redux";
import { selectExpenseList } from "./features/expenseSlice";
import Info from "./components/info/info";

function App() {
  const expenseList = useSelector(selectExpenseList);
  let debit = 0;
  let credit = 0;
  expenseList.forEach((e) => {
    e.positive ? (credit += Number(e.cost)) : (debit += Number(e.cost));
  });

  return (
    <>
      <div className="header">
        <h1 className="headline">
          Expense Tracker App built using React and Redux
        </h1>
        <p className="note">
          Note: Add a minu sign before cost to show debit amount
        </p>
      </div>
      <div className="App">
        <Input />
        {expenseList.map((item) => (
          <ExpenseItem
            id={item.id}
            name={item.name}
            cost={item.cost}
            positive={item.positive}
          />
        ))}

        <Info credit={credit} debit={debit} />
      </div>
    </>
  );
}

export default App;

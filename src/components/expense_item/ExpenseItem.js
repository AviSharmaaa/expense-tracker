import React from "react";
import "./ExpenseItem.css";
import { useDispatch } from "react-redux/es/exports";
import { deleteExpense } from "../../features/expenseSlice";

const ExpenseItem = ({ id, name, cost, positive }) => {
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(deleteExpense(id));
  }
  return (
    <div
      className={
        positive ? "bg-aquamarine container" : "bg-rosybrown container"
      }
      key={id}
    >
      <p className="item_name">{name}</p>
      <p className="item_cost">{cost}</p>
      <i className="fa fa-trash-alt" onClick={deleteItem}></i>
    </div>
  );
};

export default ExpenseItem;

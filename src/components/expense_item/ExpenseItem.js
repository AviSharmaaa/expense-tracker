import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = ({ id, name, cost, positive }) => {
  return (
    <div
      className={positive ? "bg-green container" : "bg-red container"}
      key={id}
    >
      <p className="item_name">{name}</p>
      <p className="item_cost">{cost}</p>
    </div>
  );
};

export default ExpenseItem;

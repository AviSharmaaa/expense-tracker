import React, { useState } from "react";
import "./input.css";
import { useDispatch } from "react-redux";
import { saveExpense } from "../../features/expenseSlice";

const Input = () => {
  const [item, setItem] = useState("");
  const [expense, setExpense] = useState(0);
  const dispatch = useDispatch();

  const addExpense = () => {
    const newExpense = {
      id: Date.now(),
      name: item,
      cost: expense,
      positive: expense >= 0 ? true : false,
    };

    dispatch(saveExpense(newExpense));
  };
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="input_field"
        />
        <input
          type="number"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
          className="input_field"
        />
        <button onClick={addExpense} className="input_btn">
          ADD
        </button>
      </div>
    </>
  );
};

export default Input;

import React, { useState } from "react";
import "./input.css";
import { useDispatch } from "react-redux";
import { saveExpense } from "../../features/expenseSlice";

const Input = () => {
  const [item, setItem] = useState("");
  const [expense, setExpense] = useState(0);
  const dispatch = useDispatch();

  const addExpense = () => {
    if (item.length === 0) {
      alert("Item name cannot be empty");
    } else if (expense === 0) {
      alert("Cost cannnot be zero");
    } else {
      const newExpense = {
        id: Date.now(),
        name: item,
        cost: expense,
        positive: expense >= 0 ? true : false,
      };

      dispatch(saveExpense(newExpense));
      setItem("");
      setExpense(0);
    }
  };
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="input_field"
          placeholder="Item Name"
        />
        <input
          type="number"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
          className="input_field"
          placeholder="Cost"
        />
        <button onClick={addExpense} className="input_btn">
          ADD
        </button>
      </div>
    </>
  );
};

export default Input;

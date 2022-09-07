import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "./Cards";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseItem = "Car insurance";
  const expenseAmount = 294.67;
  const [title, setTitle] = useState(expenseItem);
  

  return (
    <Card className="expense-item">
      <ExpenseDate />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>&nbsp;&nbsp;
      <Button onClick={() => setTitle("event changed")}>Change Title</Button>
    </Card>
  );
}

export default ExpenseItem;

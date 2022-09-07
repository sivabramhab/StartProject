import "./ExpenseItem.css";

function ExpenseDate(props) {
  const expenseDate = new Date();

  return (
    <div>
      <div className="expense-item__price">{expenseDate.toLocaleString()}</div>
      {/* <div className='expense-item__description'>{expenseDate.getMonth()}</div> */}
    </div>
  );
}

export default ExpenseDate;

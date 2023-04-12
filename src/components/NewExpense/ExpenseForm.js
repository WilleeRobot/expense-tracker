import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData, cancelClickHandler }) => {
  // #### MANAGED STATES ####
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // ##### FORM HANDLER FUNCTIONS #####
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    cancelClickHandler();
  };

  // ##### UTILITY FUNCTIONS #####
  // Function to ensure expense dates are never beyond today -> used in upper bound of date picker in form
  const getTodaysDate = () => {
    const today = new Date();
    let year = today.getUTCFullYear();
    let month = today.getUTCMonth();
    if (month < 10) {
      month = `0${month}`;
    }
    let date = today.getUTCDate();

    return `${year}-${month}-${date}`;
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max={getTodaysDate()}
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="buttons-wrapper">
        <div>
          <button onClick={cancelClickHandler}>Cancel</button>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;

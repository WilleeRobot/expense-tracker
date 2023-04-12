import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  // #### MANAGED STATES ####
  const [showForm, setShowForm] = useState(false);

  // ##### HANDLER FUNCTIONS #####
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const toggleClickHandler = () => {
    !!showForm ? setShowForm(false) : setShowForm(true);
  };

  // ##### CONDITIONALLY RENDER VIEW BASED ON CLICK STATE #####
  return (
    <div className="new-expense">
      {!!showForm ? (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          cancelClickHandler={toggleClickHandler}
        />
      ) : (
        <button onClick={toggleClickHandler}>Add new expense</button>
      )}
    </div>
  );
};

export default NewExpense;

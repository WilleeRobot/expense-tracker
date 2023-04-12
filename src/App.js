import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Dining Out",
    amount: 32.35,
    date: new Date(2023, 1, 8),
  },
  { id: "e2", title: "Insurance", amount: 1500, date: new Date(2023, 2, 28) },
  {
    id: "e3",
    title: "Utilities",
    amount: 300.5,
    date: new Date(2023, 2, 15),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenseData={expenses} />
    </div>
  );
};

export default App;

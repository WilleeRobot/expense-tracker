import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenseData }) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const yearFilterSelectHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredData = expenseData.filter(
    (expenseItem) => expenseItem.date.getFullYear().toString() === filteredYear
  );

  let expensesContent = <p>No expenses found.</p>;

  if (filteredData.length > 0) {
    expensesContent = filteredData.map((expense) => (
      <ExpenseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        onYearFilterSelect={yearFilterSelectHandler}
        selected={filteredYear}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;

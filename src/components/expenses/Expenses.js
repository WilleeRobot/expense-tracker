import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenseData }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const yearFilterSelectHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onYearFilterSelect={yearFilterSelectHandler}
        selected={filteredYear}
      />
      {expenseData.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
};

export default Expenses;

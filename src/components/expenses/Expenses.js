import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenseData }) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const yearFilterSelectHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredData = expenseData.filter(
    (expenseItem) => expenseItem.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        onYearFilterSelect={yearFilterSelectHandler}
        selected={filteredYear}
      />
      <ExpensesChart expenses={filteredData} />
      <ExpensesList expenseItems={filteredData} />
    </Card>
  );
};

export default Expenses;

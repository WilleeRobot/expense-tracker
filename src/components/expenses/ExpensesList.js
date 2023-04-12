import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenseItems }) => {
  if (expenseItems.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        No expenses found for this year
      </h2>
    );
  }
  return (
    <ul className="expenses-list">
      {expenseItems.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;

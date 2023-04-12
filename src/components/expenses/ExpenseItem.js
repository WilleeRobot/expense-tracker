import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, amount }) => {
  return (
    <li>
      <Card className="expense-item-wrapper">
        <ExpenseDate date={date} />
        <div className="expense-item_description">
          <h2>{title}</h2>
          <p className="expense-item_price">{amount}</p>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

import "./App.css";
import Expenses from "./components/expenses/Expenses";

const App = () => {
  const expenses = [
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

  return (
    <div>
      <h2>Let's get started</h2>
      <Expenses expenseData={expenses} />
    </div>
  );
};

export default App;

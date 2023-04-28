import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2020, 11, 23),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 547.23,
    date: new Date(2021, 1, 10),
  },
  { id: "e3", title: "Travelling", amount: 300, date: new Date(2022, 5, 9) },
  { id: "e4", title: "Shopping", amount: 456.18, date: new Date(2020, 1, 23) },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };
  //before jsx we can write like this
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets get started"),
  //   React.createElement(Expenses,{items:expenses})
  // );
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

import type { NextPage } from "next";
import { ChangeEvent, EventHandler, FormEvent, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import Alert from "../components/Alert";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import { Expense, reduceExpensesAmounts } from "../data/data";

const Home: NextPage = () => {
  const initialExpenses: Expense[] = [
    { id: uuidv4(), charge: "rent", amount: 1600 },
    { id: uuidv4(), charge: "car payment", amount: 1500 },
    { id: uuidv4(), charge: "credit card bills", amount: 1400 },
  ];

  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");

  function handleCharge(event: ChangeEvent<HTMLInputElement>) {
    setCharge(event.target.value);
  }

  function handleAmount(event: ChangeEvent<HTMLInputElement>) {
    setAmount(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }
  const totalAmounts = reduceExpensesAmounts(expenses);

  return (
    <Fragment>
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
        <ExpenseList expenses={expenses} />
      </main>
      <footer>
        <h2>
          Total spending: €<span className="total">{totalAmounts}</span>
        </h2>
      </footer>
    </Fragment>
  );
};

export default Home;

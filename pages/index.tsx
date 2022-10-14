import type { NextPage } from "next";
import { Fragment, useState } from "react";

import Alert from "../components/Alert";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import {
  getExpenses,
  reduceExpensesAmounts,
} from "../data/data";

const Home: NextPage = () => {
  const initialExpenses = getExpenses();
  const [expenses, setExpenses] = useState(initialExpenses);
  const totalAmounts = reduceExpensesAmounts(expenses);

  return (
    <Fragment>
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm />
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

import type { NextPage } from "next";
import { Fragment, useState } from "react";

import Alert from "../components/Alert";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import { initialExpenses } from "../data/data";

const Home: NextPage = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  console.log(expenses);
  
  return (
    <Fragment>
      <Alert />
      <ExpenseForm />
      <ExpenseList />
    </Fragment>
  );
};

export default Home;

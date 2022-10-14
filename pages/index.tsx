import type { NextPage } from "next";
import { Fragment } from "react";
import Alert from "../components/Alert";
import ExpenseForm from "../components/ExpenseForm";

import ExpenseList from "../components/ExpenseList";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Alert />
      <ExpenseForm />
      <ExpenseList />
    </Fragment>
  );
};

export default Home;

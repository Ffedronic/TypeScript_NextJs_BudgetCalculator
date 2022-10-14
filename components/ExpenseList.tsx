import { Fragment } from "react";
import { MdDelete } from "react-icons/md";
import { ExpensesProps } from "../data/data";
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props: ExpensesProps) {
  const { expenses } = props;

  return (
    <Fragment>
      <ul className="list">
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </ul>
      {expenses.length > 0 && (
        <button className="btn">
          Clear Expenses <MdDelete className="btn-icon" />
        </button>
      )}
    </Fragment>
  );
}

export default ExpenseList;

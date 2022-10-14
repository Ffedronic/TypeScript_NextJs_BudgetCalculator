import { MdDelete, MdEdit } from "react-icons/md";
import { Expense } from "../data/data";

interface ExpenseItemProps {
  expense: Expense;
}

function ExpenseItem(props: ExpenseItemProps) {
  const { expense } = props;

  return (
    <li className="item">
      <div className="info">
        <span className="expense">{expense.charge}</span>
        <span className="amount">€{expense.amount}</span>
      </div>
      <div>
        <button className="edit-btn" aria-label="edit button">
          <MdEdit />
        </button>
        <button className="clear-btn" aria-label="delete button">
          <MdDelete />
        </button>
      </div>
    </li>
  );
}

export default ExpenseItem;

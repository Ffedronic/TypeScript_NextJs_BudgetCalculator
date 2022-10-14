import { ChangeEventHandler, FormEventHandler } from "react";
import { MdSend } from "react-icons/md";

interface ExpenseFormProps {
  charge: string;
  amount: string;
  handleCharge: ChangeEventHandler;
  handleAmount: ChangeEventHandler;
  handleSubmit: FormEventHandler
}
function ExpenseForm(props: ExpenseFormProps) {
  const { charge, amount, handleAmount, handleCharge, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">Charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="e.g. rent"
            value={charge}
            onChange={handleCharge}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="e.g. 100"
            value={amount}
            onChange={handleAmount}
            required
          />
        </div>
      </div>
      <button type="submit" className="btn">
        Submit <MdSend className="btn-icon" />{" "}
      </button>
    </form>
  );
}

export default ExpenseForm;

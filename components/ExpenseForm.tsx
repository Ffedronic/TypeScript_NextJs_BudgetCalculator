import { MdSend } from "react-icons/md";

function ExpenseForm() {
  return (
    <form>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">Charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="e.g. rent"
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

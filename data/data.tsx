export interface Expense {
  id: string;
  charge: string;
  amount: number;
}

export interface ExpensesProps {
  expenses: Expense[];
}

export function reduceExpensesAmounts(expenses:Expense[]) {
  const expensesAmounts: number[] = [];

  let totalAmounts: number = 0;

  for (let expense of expenses) {
    expensesAmounts.push(expense.amount);
    totalAmounts = expensesAmounts.reduce((a, b) => {
      return a + b;
    });
  }

  return totalAmounts;
}

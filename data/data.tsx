import { v4 as uuidv4 } from "uuid";

export interface Expense {
  id: string;
  charge: string;
  amount: number;
}

export interface ExpensesProps {
  expenses: Expense[];
}

export const initialExpenses: Expense[] = [
  { id: uuidv4(), charge: "rent", amount: 1600 },
  { id: uuidv4(), charge: "car payment", amount: 1500 },
  { id: uuidv4(), charge: "credit card bills", amount: 1400 },
];

export function getExpenses() {
  return initialExpenses;
}

export function reduceExpensesAmounts(expenses: Expense[]) {
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

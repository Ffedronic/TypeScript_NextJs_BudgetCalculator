import { v4 as uuidv4 } from "uuid";

interface Expense {
  id: string;
  charge: string;
  amount: number;
}
export const initialExpenses: Expense[] = [
  { id: uuidv4(), charge: "rent", amount: 1600 },
  { id: uuidv4(), charge: "car payment", amount: 1500 },
  { id: uuidv4(), charge: "credit card bills", amount: 1400 },
];

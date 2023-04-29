import { ExpensesCard } from "../expensesCard/ExpensesCard";

export const Expenses = ({ dataProduct, onDelete }) => {
  return (
    <div>
      {dataProduct.map((item) => {
        return <ExpensesCard onDelete={onDelete} el={item} />;
      })}
    </div>
  );
};

import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item));

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item));
  return (
    <div className="tracker__inc__exp">
      <div className="tracker__income">
        <h4>Income</h4>
        <span>
          <i className="fas fa-rupee-sign"></i> +{income}
        </span>
      </div>
      <div className="tracker__expense">
        <h4>Expense</h4>
        <span>
          {" "}
          <i className="fas fa-rupee-sign"></i> {expense}
        </span>
      </div>
    </div>
  );
};

export default IncomeExpense;

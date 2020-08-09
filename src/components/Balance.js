import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item));
  return (
    <div className="tracker__balance">
      <h2>
        <i className="fas fa-rupee-sign"></i> {total}
      </h2>
      <span>Balance</span>
    </div>
  );
};

export default Balance;

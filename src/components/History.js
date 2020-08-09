import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import Transaction from "./Transaction";

const History = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className="transaction__history">
      <p>History</p>
      <div className="transaction__lists">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </div>
    </div>
  );
};

export default History;

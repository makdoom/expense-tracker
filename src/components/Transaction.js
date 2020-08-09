import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount > 0 ? "+" : "-";
  return (
    <li
      className={`transaction__item ${
        transaction.amount > 0 ? "plus" : "minus"
      }`}
      key={transaction.id}
      onClick={() => deleteTransaction(transaction.text)}
    >
      <span className="name">{transaction.text} </span>
      <span className="amount">
        <i className="fas fa-rupee-sign"></i>&nbsp;
        {sign}
        {Math.abs(transaction.amount)}
      </span>
    </li>
  );
};

export default Transaction;

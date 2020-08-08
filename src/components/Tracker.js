import React from "react";
import "./css/Tracker.css";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import History from "./History";

const Tracker = () => {
  return (
    <div className="tracker">
      <div className="tracker__bg">
        <h1 className="tracker__heading">Expense Tracker</h1>
      </div>
      <Balance />
      <IncomeExpense />
      <History />
    </div>
  );
};

export default Tracker;

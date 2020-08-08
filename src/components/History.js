import React from "react";

const History = () => {
  return (
    <div className="transaction__history">
      <h4>History</h4>
      <li className="transaction__item">
        <span className="name">Food</span>
        <span className="amount">-400</span>
      </li>
    </div>
  );
};

export default History;

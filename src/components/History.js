import React from "react";

const History = () => {
  return (
    <div className="transaction__history">
      <p>History</p>
      <div className="transaction__lists">
        <li className="transaction__item">
          <span className="name">Food</span>
          <span className="amount">
            <i class="fas fa-rupee-sign"></i> -400
          </span>
        </li>
      </div>
    </div>
  );
};

export default History;

import React from "react";

const IncomeExpense = () => {
  return (
    <div className="tracker__inc__exp">
      <div className="tracker__income">
        <h4>Income</h4>
        <i class="fas fa-rupee-sign"></i>
        <span> 400</span>
      </div>
      <div className="tracker__expense">
        <h4>Expense</h4>
        <i class="fas fa-rupee-sign"></i>
        <span> 400</span>
      </div>
    </div>
  );
};

export default IncomeExpense;

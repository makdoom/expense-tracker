import React from "react";

const AddTransaction = () => {
  return (
    <div className="add__transaction">
      <p>New Transaction</p>
      <form className="form__control">
        <div className="input">
          <input className="text" type="text" placeholder="New Transaction" />
          <input className="amount" type="numbers" placeholder="Amount" />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddTransaction;

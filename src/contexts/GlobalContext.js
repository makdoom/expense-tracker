import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

// Initialvalue
const initialState = {
  transactions: [
    { id: 1, text: "Food", amount: +60 },
    { id: 2, text: "Keyboard", amount: -200 },
    { id: 3, text: "Mouse", amount: +40 },
    { id: 4, text: "Mom", amount: +500 },
  ],
};
// Creating a Context
export const GlobalContext = createContext(initialState);

//Provider Component
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Delete Action
  function deleteTransaction(id) {
    dispatch({
      type: "delete_transaction",
      payload: id,
    });
  }
  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

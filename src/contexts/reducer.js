export const reducer = (state, action) => {
  switch (action.type) {
    case "delete_transaction":
      return {
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

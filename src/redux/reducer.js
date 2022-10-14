const initialValue = {
    balance: 20000,
    expenses: 0,
    expList: [],
    expItem: {}
}

const Reducer = (state = initialValue, action) => {
  switch (action.type) {
      case "ADD_EXPENSES_ITEM":
          state.expItem = {...action.payload}
          state.balance = state.balance - +state.expItem.spent
          state.expenses = state.expenses + +state.expItem.spent
          return {...state, expList: [...state.expList, state.expItem]}

      case "DELETE_EXPENSES_ITEM":
          state.balance = state.balance +  +state.expItem.spent
          state.expenses = state.expenses - +state.expItem.spent
          return {...state, expList: state.expList.filter((el,idx) => idx !== action.payload)}

      case "CLEAR":
          return {...initialValue, balance: state.balance + +state.expenses, expenses: 0}
      default :
          return state;
  }
}

export default Reducer
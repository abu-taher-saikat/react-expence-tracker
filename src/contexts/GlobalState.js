import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


// Initial state
const initalState = {
   transaction : []
}

// Create context
export const GlobalContext = createContext(initalState);
// Provider component
export const GlobalProvider = ({ children }) => {
        const [state, dispatch] = useReducer(AppReducer, initalState);



  // Actions
  function deleteTransaction(id) {
        dispatch({
          type: 'DELETE_TRANSACTION',
          payload: id
        });
      }
  function addTransaction(transaction) {
        dispatch({
          type: 'ADD_TRANSACTION',
          payload: transaction
        });
      }

// Create Provide component
return (<GlobalContext.Provider value={{
        transaction: state.transaction,
        deleteTransaction,
        addTransaction
        
      }}>
        {children}
      </GlobalContext.Provider>);
}
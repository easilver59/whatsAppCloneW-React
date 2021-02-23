import React, { createContext, useContext, useReducer } from "react";

// prepare data layer
export const StateContext = createContext();

// Higher order component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// export/ pull information from the data layer
export const useStateValue = () => useContext(StateContext);

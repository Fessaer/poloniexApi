import React, { useState } from 'react';




let initialState = {}

export const Context = React.createContext();

const Store = ({children}) => {
  
  const [globalState, inSetState] = useState(initialState);
  
  return (
    <Context.Provider value={[globalState, inSetState]}>{children}</Context.Provider>
  )
}
export default Store;

import React, { useState } from 'react';



  // console.log(defaultDateStart)

    let initialState = {}

export const Context = React.createContext();

const Store = ({children}) => {
  
  // const {SessionID, ChangePasswordAtNextLogin, validate} = children[0];
  const [globalState, inSetState] = useState(initialState);
  
  return (
    <Context.Provider value={[globalState, inSetState]}>{children}</Context.Provider>
  )
}
export default Store;

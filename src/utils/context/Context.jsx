
import React,{createContext, useEffect, useState} from 'react'

export const DataContext = createContext();
const DataContextProvider = ({children}) => {

  const [isOpen,setIsOpen]=useState(false);
  return (
    <>
      <DataContext.Provider value={{setIsOpen,isOpen}}>
        {children}
      </DataContext.Provider>
    </>
  )
}

export default DataContextProvider;
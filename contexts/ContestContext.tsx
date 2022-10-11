import React, { createContext } from 'react'
import { ContestProps } from '../types';

export const ContestContext = createContext(null);

const ContestContextProvider: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }: ContestProps) => {
  const options = {}
  return (
    <ContestContext.Provider value={options}>
      {children}
    </ContestContext.Provider>
  )
}

export default ContestContextProvider;
import React, { createContext, useState, useContext } from 'react';

const RateContext = createContext();

export const RateProvider = ({ children }) => {
  const [selectedRate, setSelectedRate] = useState(null);

  return (
    <RateContext.Provider value={{ selectedRate, setSelectedRate }}>
      {children}
    </RateContext.Provider>
  );
};

export const useRate = () => useContext(RateContext);

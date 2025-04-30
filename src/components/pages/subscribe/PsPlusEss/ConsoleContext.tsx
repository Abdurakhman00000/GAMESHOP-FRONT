"use client";

import { createContext, useState, useContext, ReactNode } from 'react';

type ConsoleType = 'PS4' | 'PS5' | null;

interface ConsoleContextType {
  selectedConsole: ConsoleType;
  setSelectedConsole: (console: ConsoleType) => void;
  getConsoleTypeId: () => number;
}

const ConsoleContext = createContext<ConsoleContextType | undefined>(undefined);

export const ConsoleProvider = ({ children }: { children: ReactNode }) => {
  const [selectedConsole, setSelectedConsole] = useState<ConsoleType>(null);

  const getConsoleTypeId = (): number => {
    switch (selectedConsole) {
      case 'PS5':
        return 1;
      case 'PS4':
        return 2;
      default:
        return 1; // Default to PS5 if nothing selected
    }
  };

  return (
    <ConsoleContext.Provider value={{ selectedConsole, setSelectedConsole, getConsoleTypeId }}>
      {children}
    </ConsoleContext.Provider>
  );
};

export const useConsole = (): ConsoleContextType => {
  const context = useContext(ConsoleContext);
  if (context === undefined) {
    throw new Error('useConsole must be used within a ConsoleProvider');
  }
  return context;
};

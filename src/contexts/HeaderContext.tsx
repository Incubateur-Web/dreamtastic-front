import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from "react";

type UserContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const HeaderContext = createContext<UserContextType>(undefined!);

export const HeaderContextProvider: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </HeaderContext.Provider>
  );
};

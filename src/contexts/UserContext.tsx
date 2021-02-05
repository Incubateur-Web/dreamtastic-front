import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from "react";

type UserContextType = {
  user: { username: string };
  setUser: Dispatch<SetStateAction<{ username: string }>>;
};

export const UserContext = createContext<UserContextType>(undefined!);

export const UserContextProvider: FC = ({ children }) => {
  const [user, setUser] = useState<{ username: string }>(undefined!);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

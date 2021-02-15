import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type UserContextType = {
  user: { username: string };
  setUser: Dispatch<SetStateAction<{ username: string }>>;
  setTokens: React.Dispatch<React.SetStateAction<LocalStorageTokens>>;
};

export type TokensType = {
  access_token?: string;
  refresh_token?: string;
};

export type LocalStorageTokens = { expires?: Date } & TokensType;

const LOCALSTORAGE_TOKEN_KEY = "session_token";

export const UserContext = createContext<UserContextType>(undefined!);

export const UserContextProvider: FC = ({ children }) => {
  const [user, setUser] = useState<{ username: string }>(undefined!);

  const [tokens, setTokens] = useState<LocalStorageTokens>(() => {
    const tokens = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);

    if (!tokens) return {};
    return JSON.parse(tokens) as LocalStorageTokens;
  });

  useEffect(() => {
    console.log("UseEffect");
    console.log(tokens);

    if (tokens.access_token) {
      // fetchUser
    }
    localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, JSON.stringify(tokens));
  }, [tokens]);

  return (
    <UserContext.Provider value={{ user, setUser, setTokens }}>
      {children}
    </UserContext.Provider>
  );
};

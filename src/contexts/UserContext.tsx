import axios from "axios";
import { addMinutes, differenceInMinutes, isBefore } from "date-fns";
import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
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

  const getNewAccessToken = useCallback(async () => {
    try {
      console.log("get new AccessToekn");

      const { data } = await axios.post("/auth/accessToken", {
        refresh_token: tokens.refresh_token,
      });
      setTokens((token) => ({
        ...token,
        access_token: data.access_token,
        expires: addMinutes(new Date(), 58),
      }));
    } catch (error) {
      console.error(error);
    }
  }, [tokens.refresh_token]);

  useEffect(() => {
    const expireDate = new Date(tokens.expires || new Date());
    const currentDate = new Date();
    if (isBefore(expireDate, currentDate)) {
      getNewAccessToken();
      return;
    }
    const diffMinutes = Math.abs(differenceInMinutes(new Date(), expireDate));

    const timeout = setTimeout(() => {
      console.log("timeout");

      getNewAccessToken();
    }, diffMinutes * 60 * 1000);

    if (tokens.access_token) {
      // fetchUser
    }
    localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, JSON.stringify(tokens));

    return () => {
      clearTimeout(timeout);
    };
  }, [tokens, getNewAccessToken]);

  return (
    <UserContext.Provider value={{ user, setUser, setTokens }}>
      {children}
    </UserContext.Provider>
  );
};

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

type UserType = {
  createdAt: string | Date;
  email: string;
  id: string;
  lastConnection: string | Date;
  name: string;
  updatedAt: string | Date;
  _id: string;
};

type UserContextType = {
  user?: UserType;
  setUser: Dispatch<SetStateAction<UserType>>;
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
  const [user, setUser] = useState<UserType>(undefined!);

  const [tokens, setTokens] = useState<LocalStorageTokens>(() => {
    const tokens = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);

    if (!tokens) return {};
    return JSON.parse(tokens) as LocalStorageTokens;
  });

  const getNewAccessToken = useCallback(async () => {
    try {
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

  const fetchUser = useCallback(async () => {
    if (tokens.access_token) {
      try {
        const { data } = await axios.get<{ user: UserType }>("/users/info", {
          headers: { "x-access-token": tokens.access_token },
        });

        setUser(data.user);
      } catch (error) {
        await getNewAccessToken();
      }
    }
  }, [tokens.access_token, getNewAccessToken]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    const expireDate = new Date(tokens.expires || new Date());
    const currentDate = new Date();

    if (!tokens.access_token) return;
    if (isBefore(expireDate, currentDate)) {
      getNewAccessToken();
      return;
    }
    const diffMinutes = Math.abs(differenceInMinutes(new Date(), expireDate));

    const timeout = setTimeout(() => {
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

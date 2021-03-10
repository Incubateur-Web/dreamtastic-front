import axios from "axios";
import { createContext, useState, useEffect, FC } from "react";
import { ApiType } from "../types/API/TypeType";

type Context = { types: ApiType[] };

export const TypeContext = createContext<Context>(undefined!);

export const TypeContextProvider: FC = ({ children }) => {
  const [types, setTypes] = useState<ApiType[]>([]);

  useEffect(() => {
    axios
      .get<{ types: ApiType[] }>("/types")
      .then(({ data }) => {
        setTypes(data.types);
      })
      .catch(console.error);
  }, []);

  return (
    <TypeContext.Provider value={{ types }}> {children}</TypeContext.Provider>
  );
};

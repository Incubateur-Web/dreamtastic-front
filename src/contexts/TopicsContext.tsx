import axios from "axios";
import { createContext, FC, useEffect, useState } from "react";
import { ApiType } from "../types/API/TypeType";

type Context = { topics: ApiType[] };

export const TopicsContext = createContext<Context>(undefined!);

export const TopicsContextProvider: FC = ({ children }) => {
  const [topics, setTopics] = useState<ApiType[]>([]);

  useEffect(() => {
    axios
      .get<{ topics: ApiType[] }>("/topics")
      .then(({ data }) => {
        setTopics(data.topics);
      })
      .catch(console.error);
  }, []);
  return (
    <TopicsContext.Provider value={{ topics }}>
      {children}
    </TopicsContext.Provider>
  );
};

import { FC } from "react";
import { TopicsContextProvider } from "./TopicsContext";
import { TypeContextProvider } from "./TypeContext";
import { UserContextProvider } from "./UserContext";

export const ApplicationContextProvider: FC = ({ children }) => {
  return (
    <UserContextProvider>
      <TopicsContextProvider>
        <TypeContextProvider>{children}</TypeContextProvider>
      </TopicsContextProvider>
    </UserContextProvider>
  );
};

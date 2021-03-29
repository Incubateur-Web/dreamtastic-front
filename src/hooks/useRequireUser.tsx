import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export const useRequireUser = () => {
  const { isFetching, user } = useContext(UserContext);
  const { push } = useHistory();

  useEffect(() => {
    if (!isFetching && !user) {
      push("/auth/signin");
    }
  }, [isFetching, user, push]);
};

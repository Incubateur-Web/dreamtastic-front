import { random } from "faker";
import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

//Bind with the login page link when authentication done
export const HeaderSignIn = () => {
  const { setUser } = useContext(UserContext);
  return (
    <div
      role="button"
      className="border rounded-lg px-3 py-1"
      onClick={() => setUser({ username: random.word() })}
    >
      Connexion
    </div>
  );
};

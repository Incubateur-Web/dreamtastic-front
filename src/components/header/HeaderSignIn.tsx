import { Link } from "react-router-dom";

export const HeaderSignIn = () => {
  return (
    <Link to="/auth/signin">
      <button className="border rounded-lg px-3 py-1">Connexion</button>
    </Link>
  );
};

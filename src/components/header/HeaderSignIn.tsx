import { Link } from "react-router-dom";

export const HeaderSignIn = () => {
  return (
    <Link to="/auth/signin">
      <button className="border rounded-md px-3 py-1 transition duration-200 hover:bg-white hover:text-violet">
        Connexion
      </button>
    </Link>
  );
};

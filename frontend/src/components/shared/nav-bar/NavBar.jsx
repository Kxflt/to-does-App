import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import { useAuth } from "../../../context/authContext";

import "./nav-bar.css";

function NavBar() {
  const { isAuthenticated, user, logOut } = useAuth();

  return (
    <nav className="header-container">
      {isAuthenticated ? (
        <>
          <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="paginated">Paginación</NavLink>
          </div>
          <div>
            <span>{`Hola, ${user.name}`}</span>
            <Button text="Log out" onClick={logOut} error />
          </div>
        </>
      ) : (
        <div>
          <NavLink to="login">Login</NavLink>
          <NavLink to="signup">Registro</NavLink>
        </div>
      )}
    </nav>
  );
}

export default NavBar;

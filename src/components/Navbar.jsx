import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Navbar = () => {
  const { user, logout } = useContext(UserContext);

  const handleLogOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav>
      <h1>Navegacion</h1>

      {user ? (
        <>
          <NavLink to="/">Inicio</NavLink>
          <button onClick={handleLogOut}> Cerrar Sesion</button>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Registrar</NavLink>
        </>
      )}
    </nav>
  );
};

export default Navbar;

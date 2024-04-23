import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Navigate } from "react-router-dom";

import PropTypes from "prop-types";

const RequireAuth = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user) return <Navigate to="/login" />;

  return children;
};

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RequireAuth;

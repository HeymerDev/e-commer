import PropTypes from "prop-types";

const ErrorForm = ({ error }) => {
  return <>{error && <span>{error.message}</span>}</>;
};

ErrorForm.propTypes = {
  error: PropTypes.object.isRequired,
};

export default ErrorForm;

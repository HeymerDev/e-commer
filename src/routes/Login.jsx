import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-email") return alert("Email inavlido");
      if (error.code === "auth/invalid-credential")
        return alert("email o Contraseña incorrecta");
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ingrese email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="ingrese la contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">iNGRESAR</button>
      </form>
    </>
  );
};

export default Login;

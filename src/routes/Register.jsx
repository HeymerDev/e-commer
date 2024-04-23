import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { firebaseErrors } from "../utils/firebaseErrors";

import ErrorForm from "../components/ErrorForm";

const Register = () => {
  const navigate = useNavigate();

  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      await registerUser(email, password);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError("firebase", { message: firebaseErrors(error.code) });
    }
  };

  return (
    <>
      <h1>Register</h1>

      <ErrorForm error={errors.firebase} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="ingrese email"
          {...register("email", {
            required: {
              value: true,
              message: "Este campo es Obligatorio",
            },
            pattern: {
              value:
                /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
              message: "Formato de correo invalido",
            },
          })}
        />

        <ErrorForm error={errors.email} />

        <input
          type="password"
          placeholder="ingrese la contraseña"
          {...register("password", {
            minLength: {
              value: 6,
              message: "Minimo 6 caracteres",
            },
            required: true,
            validate: {
              trim: (value) => {
                if (!value.trim()) return "No se permiten espacios en blanco";
                true;
              },
            },
          })}
        />
        <ErrorForm error={errors.password} />

        <input
          type="password"
          placeholder="repita la contraseña"
          {...register("repassword", {
            validate: {
              equals: (value) =>
                value === getValues("password") ||
                "Las contraseñas no coinciden",
            },
          })}
        />
        <ErrorForm error={errors.repassword} />

        <button type="submit"> Registrar</button>
      </form>
    </>
  );
};

export default Register;

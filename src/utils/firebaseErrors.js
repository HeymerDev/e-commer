export const firebaseErrors = (code) => {
  switch (code) {
    case "auth/email-already-in-use":
      return "Este correo ya esta en uso";
    case "auth/invalid-email":
      return "Correo invalido";
    default:
      return "Ocurrio un error";
  }
};

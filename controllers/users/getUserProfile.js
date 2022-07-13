const { selectUserById } = require("../../repositories/users");

const getUserProfile = async (req, res, next) => {
  try {
    const { id } = req.auth; // Declaramos para recibir el ID de usuario
    const user = await selectUserById(id); // Paso barrioID al repositorio que habla con la base de datos.
    res.status(200).send({ status: "ok", data: user }); //Envío al cliente lo que he recogido de la base de datos. Le damos esta estructura para tener coherencia con otros envíos de datos al cliente. Funcionaría igual simplemente con enviar (entries).
  } catch (error) {
    next(error);
  }
};

module.exports = getUserProfile;

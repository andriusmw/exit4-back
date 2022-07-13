const { generateError } = require("../../helpers/generateError");
const { selectUserByEmail } = require("../../repositories/users");

const getUserByEmail = async (req, res, next) => {
  try {
    const { email } = req.params; // Declaramos para recibir el barrioID

    const user = await selectUserByEmail(email); // Paso barrioID al repositorio que habla con la base de datos.
    if (!user) {
      throw generateError("e-mail does not exist", 404);
    }
    res.status(200).send({ status: "ok", data: user }); //Envío al cliente lo que he recogido de la base de datos. Le damos esta estructura para tener coherencia con otros envíos de datos al cliente. Funcionaría igual simplemente con enviar (entries).
  } catch (error) {
    next(error);
  }
};

module.exports = getUserByEmail;

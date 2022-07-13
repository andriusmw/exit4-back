const {
    selectUserByActivationCode,
    deleteRegistrationCode,
  } = require("../../repositories/users");
  const { generateError } = require("../../helpers/generateError");
  
  const activateUser = async (req, res, next) => {
    try {
      const { registrationCode } = req.params;
      //coge el resistration code de los params de la request
  
      const user = await selectUserByActivationCode(registrationCode);
                    //llama a esta función pasándole el registrationcode
  
      if (!user) {
        throw generateError("Invalid registration code or already activated", 404);
        //Si el codigo de registro es nulo significa que no hay porque es inválido o usuario ya activado
      }
  
      await deleteRegistrationCode(user.id);
        //borra el codigo de reistro si lo hay para activar al usuario
  
      res.status(200).send({ status: "ok", message: "User activated" });
    } catch (error) {
      next(error);
    }
  };
  
  module.exports = activateUser;
  
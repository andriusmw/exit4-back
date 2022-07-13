const { selectEntryByBarrio } = require("../../repositories/entries");

const getEntryByBarrio = async (req, res, next) => {
  try {
    const { barrioID } = req.params; // Declaramos para recibir el barrioID

    const entries = await selectEntryByBarrio(barrioID); // Paso barrioID al repositorio que habla con la base de datos.

    res.status(200).send({ status: "ok", data: entries }); //Envío al cliente lo que he recogido de la base de datos. Le damos esta estructura para tener coherencia con otros envíos de datos al cliente. Funcionaría igual simplemente con enviar (entries).
  } catch (error) {
    next(error);
  }
};

module.exports = getEntryByBarrio;

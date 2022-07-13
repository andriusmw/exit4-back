const { selectEntryByIdWVotes} = require("../../repositories/entries");

const getEntryById = async (req, res, next) => {
  try {
    const { id } = req.params; // Declaramos para recibir el barrioID

    const entry = await selectEntryByIdWVotes(id); // Paso barrioID al repositorio que habla con la base de datos.
    console.log(entry)
   

    res.status(200).send({ status: "ok", data: entry }); //Envío al cliente lo que he recogido de la base de datos. Le damos esta estructura para tener coherencia con otros envíos de datos al cliente. Funcionaría igual simplemente con enviar (entries).
  } catch (error) {
    next(error);
  }
};

module.exports = getEntryById;

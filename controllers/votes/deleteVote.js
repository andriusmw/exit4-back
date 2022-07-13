const { removeVote} = require("../../repositories/votes");
const { generateError } = require("../../helpers/generateError");

const deleteVote = async (req, res, next) => {
  try {
    const { idEntry } = req.params;

    const affectedRows = await removeVote(idEntry);
    //Necesitamos el idEntry para borrar todos los votos que tenga esa entrada primero.

    if (affectedRows === 0) {
      //throw generateError("Vote does not exist", 404);
      res.status(200).send({ status: "ok", message: "No vote to delete" });
      next()
    }

    res.status(200).send({ status: "ok", message: "Vote deleted" });
    next()
  } catch (error) {
    next(error);
  }
};

module.exports = deleteVote;

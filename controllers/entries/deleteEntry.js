const { removeEntry } = require("../../repositories/entries");
const { generateError } = require("../../helpers/generateError");

const deleteEntry = async (req, res, next) => {
  try {
    const { idEntry } = req.params;

    const affectedRows = await removeEntry(idEntry);

    if (affectedRows === 0) {
      throw generateError("Entry does not exist", 404);
    }

    res.status(200).send({ status: "ok", message: "Entry deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteEntry;

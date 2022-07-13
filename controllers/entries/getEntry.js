const { selectEntry } = require("../../repositories/entries");

const getEntry = async (req, res, next) => {
  try {
    const entries = await selectEntry();
    res.status(200).send({ status: "ok", data: entries });
  } catch (error) {
    next(error);
  }
};

module.exports = getEntry;

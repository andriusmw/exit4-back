const { selectEntriesWithVotes } = require("../../repositories/votes");

const getEntriesWitchVotes = async (req, res, next) => {
  try {
    const entrieswithVotes = await selectEntriesWithVotes();
    res.status(200).send({ status: "ok", data: entrieswithVotes });
  } catch (error) {
    next(error);
  }
};

module.exports = getEntriesWitchVotes;

const getPool = require("../../database/getPool");

const selectVoteByUserId = async (userId, entryId) => {
  const pool = getPool();

  const [[vote]] = await pool.query("SELECT * FROM votes WHERE user_id = ? AND entry_id = ?", [
    userId, entryId,
  ]);

  return vote;
};

module.exports = selectVoteByUserId;



const getPool = require("../../database/getPool");

const insertVoteRepositories = async ({  userId, entryId }) => {
  const pool = getPool();

  const [{ insertVote }] = await pool.query(
    "INSERT INTO votes ( entry_id, user_id) VALUES (?, ?)",
    [entryId, userId]
  );

  return insertVote;
};

module.exports = insertVoteRepositories;

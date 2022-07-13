const getPool = require("../../database/getPool");

const removeVote = async (idEntry) => {
  const pool = getPool();

  const [{ affectedRows }] = await pool.query(
    "DELETE FROM entries WHERE id = ?",
    [idEntry]
  );

  return affectedRows;
};

module.exports = removeVote;

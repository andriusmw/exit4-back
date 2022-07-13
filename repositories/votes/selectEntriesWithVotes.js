const getPool = require("../../database/getPool");

const selectEntriesWithVotes = async () => {
  const pool = getPool();
  const [entrieswithVotes] = await pool.query("SELECT e.*, COUNT(v.id) as votes FROM entries e LEFT JOIN votes v ON e.id = v.entry_id GROUP BY e.id");
  return entrieswithVotes;
};

module.exports = selectEntriesWithVotes;

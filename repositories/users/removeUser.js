const getPool = require("../../database/getPool");

const removeUser = async (id) => {
  const pool = getPool();

  const [{ affectedRows }] = await pool.query(
    "DELETE FROM users WHERE id = ?",
    [id]
  );

  return affectedRows;
};

module.exports = removeUser;

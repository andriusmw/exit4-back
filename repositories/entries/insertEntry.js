const getPool = require("../../database/getPool");

const insertEntry = async ({ title, description, imageFileName, city, neighborhood, status, userId }) => {
  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO entries (title, description, photo, city, neighborhood, status, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [title, description, imageFileName, city, neighborhood, status, userId]
  );

  return insertId;
};

module.exports = insertEntry;

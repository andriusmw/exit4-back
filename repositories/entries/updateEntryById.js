const getPool = require("../../database/getPool");

const updateEntryById = async ({
  title,
  description,
  imageFileName,
  city,
  neighborhood,
  status,
  id,
}) => {
  const pool = getPool();

  const [{ affectedRows }] = await pool.query(
    "UPDATE entries SET title = ?, description = ?, photo = ?, city = ?, neighborhood = ?, status = ? WHERE id = ?",
    [title, description, imageFileName, city, neighborhood, status, id]
  );

  return affectedRows;
};

module.exports = updateEntryById;

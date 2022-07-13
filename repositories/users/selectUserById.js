const getPool = require("../../database/getPool");

const selectUserById = async (id) => {
  const pool = getPool();

  const [[user]] = await pool.query(
    "SELECT id, email, role, name  FROM users WHERE id = ?",
    [id]
  );

  return user;
};

module.exports = selectUserById;

//Esta función se llama desde registerUser.js en la carpeta controllers/users para comprobar que exista
//un usuario con ese id.

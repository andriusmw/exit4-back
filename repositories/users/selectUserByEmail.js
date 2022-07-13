const getPool = require("../../database/getPool");

const selectUserByEmail = async (email) => {
  const pool = getPool();

  const [[user]] = await pool.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  return user;
};

module.exports = selectUserByEmail;


//Esta función se llama desde registerUser.js en la carpeta controllers/users para comprobar que exista
//un usuario con ese email.
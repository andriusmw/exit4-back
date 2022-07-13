const getPool = require("../../database/getPool");

const selectUserByActivationCode = async (registrationCode) => {
  const pool = getPool();

  const [[user]] = await pool.query(
    "SELECT * FROM users WHERE registrationCode = ?",
    [registrationCode]
  );

  return user;
};

module.exports = selectUserByActivationCode;

//busca en la tabla usuarios un usuario con ese codigodeactivacion, si lo encuentra devuelve true y el programa de controllers/users/registerUser.js continuará para borrarle el código y activar el user. Sino lo encuentra devolverá false y eso significa que ya está activado o que no ha encontrado al usuario porque no existe.

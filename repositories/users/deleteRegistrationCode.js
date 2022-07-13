const getPool = require("../../database/getPool");

const deleteRegistrationCode = async (userId) => {
  const pool = getPool();

  const [{ affectedRows }] = await pool.query(
    "UPDATE users SET registrationCode = NULL WHERE id = ?",
    [userId]
  );

  return affectedRows;
};

module.exports = deleteRegistrationCode;


//Esto lo llamamaos desde controllers/users/registerUser.js Tras haber comprobado si existe el usuario
//con ese código de activación, procedemos a borrar dicho código.
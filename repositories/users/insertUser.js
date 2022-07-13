const getPool = require("../../database/getPool");

const insertUser = async ({
  email,
  encryptedPassword,
  name,
  registrationCode,
}) => {
  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO users (email, password, name, registrationCode) VALUES (?, ?, ?, ?)",
    [email, encryptedPassword, name, registrationCode]
  );

  return insertId;
};

module.exports = insertUser;


//La función inserUser de la carpeta repositories es llamada desde el archivo reisterUser.js en controllers/users.
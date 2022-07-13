const getPool = require("../../database/getPool");

const selectEntryById = async (entryID) => {
  const pool = getPool();
  // Ahora recogemos la respuesta de la base de datos en la constante entries.
  const [[entry]] = await pool.query("SELECT * FROM entries WHERE id = ?", [
    entryID,
  ]);
  return entry; // Nos retorna un array de objetos. Si no lo ponemos al controller le llegará undefined.
};

module.exports = selectEntryById;

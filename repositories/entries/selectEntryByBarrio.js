const getPool = require("../../database/getPool");

const selectEntryByBarrio = async (barrioID) => {
  const pool = getPool();
  // Ahora recogemos la respuesta de la base de datos en la constante entries.

  const [entries] = await pool.query(
    "SELECT * FROM entries WHERE neighborhood = ?",
    [barrioID]
  );

  return entries; // Nos retorna un array de objetos. Si no lo ponemos al controller le llegará undefined.
};

module.exports = selectEntryByBarrio;

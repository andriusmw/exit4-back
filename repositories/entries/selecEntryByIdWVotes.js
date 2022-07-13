const getPool = require("../../database/getPool");

const selectEntryByIdWVotes = async (id) => {
  const pool = getPool();
  // Ahora recogemos la respuesta de la base de datos en la constante entries.
  const [[entry]] = await pool.query(" SELECT e.*, COUNT(v.id) as votes FROM entries e LEFT JOIN votes v ON e.id = v.entry_id WHERE e.id = ?", [
    id,
  ]);
  return entry; // Nos retorna un array de objetos. Si no lo ponemos al controller le llegará undefined.
};

module.exports = selectEntryByIdWVotes ;

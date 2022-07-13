require("dotenv").config();
const getPool = require("./getPool");

const initDB = async () => {
  try {
    const pool = getPool();

    console.log("Deleting tables...");

    await pool.query("DROP TABLE IF EXISTS entries;");
    await pool.query("DROP TABLE IF EXISTS users;");
    await pool.query("DROP TABLE IF EXISTS votes;");

    console.log("Creating users table...");

    await pool.query(`
      CREATE TABLE users (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL,
        role ENUM("normal", "admin") DEFAULT "normal",
        name VARCHAR(100),
        registrationCode VARCHAR(100)
      );
      `);

    console.log("Creating entries table...");

    await pool.query(`
      CREATE TABLE entries (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        description VARCHAR(500) NOT NULL,
        photo VARCHAR(200),
        city VARCHAR(100) NOT NULL,
        neighborhood VARCHAR(100) NOT NULL,
        status ENUM("open", "closed") DEFAULT "open",
        user_id INT UNSIGNED,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
      );
      `);

      console.log("Creating votes table...");

    await pool.query(`
      CREATE TABLE votes (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        entry_id INT UNSIGNED,
        user_id INT UNSIGNED,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
        FOREIGN KEY (entry_id) REFERENCES entries (id) ON DELETE CASCADE
      );
      `);

    console.log("¡All done!");
  } catch (error) {
    console.error(error);
  } finally {
    process.exit();
  }
};

initDB();

const fs = require('fs/promises');

const generateError = (message, status) => {
  const error = new Error(message);
  error.httpStatus = status;
  return error;
};

const createPathIfNotExists = async (path) => {
  console.log("entra create path")
  try {
    await fs.access(path);
    console.log("entra try")
  } catch {
    await fs.mkdir(path);
    console.log("entra catch")
  }
};

module.exports = {
  generateError,
  createPathIfNotExists,
};

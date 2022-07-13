const insertUser = require("./insertUser");
const selectUserByActivationCode = require("./selectUserByActivationCode");
const deleteRegistrationCode = require("./deleteRegistrationCode");
const selectUserByEmail = require("./selectUserByEmail");
const selectUserById = require("./selectUserById");
const removeUser = require("./removeUser");

module.exports = {
  insertUser,
  selectUserByActivationCode,
  deleteRegistrationCode,
  selectUserByEmail,
  selectUserById,
  removeUser,
};

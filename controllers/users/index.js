const registerUser = require("./registerUser");
const activateUser = require("./activateUser");
const loginUser = require("./loginUser");
const deleteUser = require("./deleteUser");
const getUserByEmail = require("./getUserByEmail");
const getUserProfile = require("./getUserProfile");

module.exports = {
  registerUser,
  activateUser,
  loginUser,
  deleteUser,
  getUserByEmail,
  getUserProfile,
};

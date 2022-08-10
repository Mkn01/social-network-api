const { Users } = require("../../models");

const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find({});

    return res.json({ data: users });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all users | ${error.message}`);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Users.findById(id);

    if (!user) {
      return res.status(404).json({ success: false });
    }

    return res.json({ data: user });
  } catch (error) {
    console.log(`[ERROR]: Failed to get user by id | ${error.message}`);
  }
};

const createNewUser = (req, res) => {
  try {
    return res.send("createThought");
  } catch (error) {
    console.log(`[ERROR]: Failed to create new user | ${error.message}`);
  }
};
const updateUserById = (req, res) => {
  return res.send("updateUserById");
};

const deleteUserById = (req, res) => {
  return res.send("deleteUserById");
};

module.exports = {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUserById,
  deleteUserById,
};

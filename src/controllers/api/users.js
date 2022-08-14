const { Users, User } = require("../../models");

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

const createNewUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    if (username && email) {
      await User.create({ username, email });
      return res.json({ success: true });
    } else {
      return res.status(400).json({
        success: false,
        error: `Please enter valid username and email`,
      });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create new user | ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const updateUserById = (req, res) => {
  try {
    const {id} = req.params;
    const {username, email} = req.body;
    if (username || email) {
      await User.findByIdAndUpdate(id,{
        username, email
      });
      return res.json({success:true});
      
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to update user | ${error.message}`);
  }
};

const deleteUserById = (req, res) => {
  try {
    return res.send("deleteUserById");
  } catch (error) {
    console.log(`[ERROR]: Failed to delete user | ${error.message}`);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUserById,
  deleteUserById,
};

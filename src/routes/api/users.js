const { Router } = require("express");

const {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById,
  createNewUser,
} = require("../../controllers/api/users");

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.get("/:id", createNewUser);
router.get("/:id", updateUserById);
router.get("/:id", deleteUserById);

module.exports = router;

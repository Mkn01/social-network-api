const { Router } = require("express");

const { getAllUsers, getUsersById } = require("../../controllers/api/users");

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUsersById);

module.exports = router;

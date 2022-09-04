const { Router } = require("express");

const users = require("./users");
const reactions = require("./reactions");
const thoughts = require("./thoughts");

const router = Router();

router.use("/users", users);
router.use("/reactions", reactions);
router.use("/thoughts", thoughts);

module.exports = router;

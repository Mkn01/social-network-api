const { Router } = require("express");

const {
  createFriendFromUser,
  removeFriendFromUser,
} = require("../../controllers/api/friends");

const router = Router({ mergeParams: true });

router.post("/", createFriendFromUser);
router.delete("/:id", removeFriendFromUser);

module.exports = router;

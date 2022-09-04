const { Router } = require("express");

const {
  createFriendFromUser,
  removeFriendFromUser,
} = require("../../controllers/api/friends");

const router = Router({ mergeParams: true });

router.post("/friends", createFriendFromUser);
router.delete("/friends/:friendId", removeFriendFromUser);

module.exports = router;

module.exports = router;

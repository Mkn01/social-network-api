const { Router } = require("express");

const {
  getAllReactions,
  getReactionById,
} = require("../../controllers/api/reactions");

const router = Router();

router.get("/", getAllReactions);
router.get("/:id", getReactionById);

module.exports = router;

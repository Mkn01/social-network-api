//to do
const { Router } = require("express");

const {
  getAllReactions,
  getReactionById,
  getAllThoughts,
} = require("../../controllers/api/thoughts");

const router = Router();

router.get("/", getAllThoughts);
router.get("/:id", getThoughtsById);

module.exports = router;

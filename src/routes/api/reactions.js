const { Router } = require("express");

const {
  getAllReactions,
  getReactionsById,
} = require("../../controllers/api/reactions");

const router = Router();

router.get("/", getAllReactions);
router.get("/:id", getReactionsById);

module.exports = router;

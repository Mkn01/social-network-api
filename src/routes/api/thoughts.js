const { Router } = require("express");

const {
  getAllThoughts,
  getThoughtsById,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/api/thoughts");

const router = Router();

router.get("/", getAllThoughts);
router.get("/:id", getThoughtsById);
router.get("/:id", createThought);
router.get("/:id", updateThought);
router.get("/:id", deleteThought);

module.exports = router;

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
router.post("/", createThought);
router.put("/:id", updateThought);
router.delete("/:id", deleteThought);

module.exports = router;

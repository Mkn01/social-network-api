const { Router } = require("express");

const {
  getAllThoughts,
  getThoughtsById,
} = require("../../controllers/api/thoughts");

const router = Router();

router.get("/", getAllThoughts);
router.get("/:id", getThoughtsById);

module.exports = router;

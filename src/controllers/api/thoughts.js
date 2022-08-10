const { Thought } = require("../../models");

const getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find({});

    return res.json({ data: thoughts });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all Thoughts | ${error.message}`);
  }
};

const getThoughtsById = async (req, res) => {
  try {
    const { id } = req.params;

    const thought = await Thoughts.findById(id);

    if (!thought) {
      return res.status(404).json({ success: false });
    }

    return res.json({ data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to get thought by id | ${error.message}`);
  }
};

const createThought = (req, res) => {
  try {
    return res.send("createThought");
  } catch (error) {
    console.log(`[ERROR]: Failed to create new Thought | ${error.message}`);
  }
};
module.exports = {
  getAllThoughts,
  getThoughtsById,
  createThought,
};

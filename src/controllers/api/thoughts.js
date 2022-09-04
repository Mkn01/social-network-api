const { Thought, User } = require("../../models");

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

    const thought = await Thought.findById(id);

    if (!thought) {
      return res
        .status(404)
        .json({ success: false, message: "No thought found" });
    }

    return res.json({ data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to get thought | ${error.message}`);

    return res.status(500).json({
      success: false,
      error: "Failed to get thought",
    });
  }
};

const createThought = async (req, res) => {
  try {
    const { thoughtText, username, userId } = req.body;

    if (thoughtText && username && userId) {
      const newThought = await Thought.create({
        thoughtText,
        username,
        userId,
      });

      await User.findByIdAndUpdate(
        { _id: userId },
        { $push: { thoughts: newThought._id } }
      );

      return res.status(201).json({
        success: true,
        data: newThought,
      });
    }

    return res.status(400).json({
      success: false,
      error: "Please enter username, user ID and thought",
    });
  } catch (error) {
    console.log(`[ERROR: Failed to create thought | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to create thought",
    });
  }
};

const updateThought = async (req, res) => {
  try {
    const { thoughtText } = req.body;
    const { id } = req.params;

    const updatedThought = await Thought.findByIdAndUpdate(
      id,
      { thoughtText },
      { new: true }
    );

    if (!updatedThought) {
      console.log(
        `[ERROR]: Failed to find thought | No thought with id of ${id}`
      );

      return res.status(404).json({ error: "Failed to find thought" });
    }

    return res.json({
      success: true,
      data: updatedThought,
    });
  } catch (error) {
    console.log(`[ERROR: Failed to update thought | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to update thought",
    });
  }
};

const deleteThought = async (req, res) => {
  try {
    const { id } = req.params;

    const thought = await Thought.findByIdAndRemove(id);

    if (!thought) {
      console.log(
        `[ERROR]: Failed to find thought | No thought with id of ${id}`
      );

      return res.status(404).json({ error: "Failed to find thought" });
    }

    return res.json({
      success: true,
      message: "Successfully deleted thought",
    });
  } catch (error) {
    console.log(`[ERROR: Failed to delete thought | ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to delete thought",
    });
  }
};

module.exports = {
  getAllThoughts,
  getThoughtsById,
  createThought,
  updateThought,
  deleteThought,
};

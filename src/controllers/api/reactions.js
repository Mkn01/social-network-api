const { Thought } = require("../../models");

const getAllReactions = () => {
  try {
    res.json({ message: "To do: retrieve all reactions" });
  } catch (error) {
    console.error(error.message);
  }
};

const getReactionById = () => {
  try {
    res.json({ message: "To do: retrieve a reaction by id" });
  } catch (error) {
    console.error(error.message);
  }
};

const createReactionFromThought = async (req, res) => {
  const { id } = req.params;
  const { reactionBody, username } = req.body;

  try {
    if (reactionBody && username) {
      await Thought.findOneAndUpdate(
        { _id: id },
        { $addToSet: { reactions: { reactionBody, username } } },
        { new: true, runValidators: true }
      );
      return res.json({ success: true });
    } else {
      res.status(500).json({ success: false });
    }
  } catch (error) {
    console.log(
      `[ERROR]: could not add a new reaction at this time | ${error.message}`
    );
    return res.status(500).json({ success: false, error: error.message });
  }
};
const removeReactionFromThought = async (req, res) => {
  const { thoughtId, reactionId } = req.params;

  try {
    if (thoughtId && reactionId) {
      await Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $pull: { reactions: { _id: reactionId } } },
        { new: true, runValidators: true }
      );

      return res.json({ success: true });
    } else res.status(500).json({ success: false });
  } catch (error) {
    console.log(
      `[ERROR]: could not delete the reaction at this time | ${error.message}`
    );
    return res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createReactionFromThought,
  removeReactionFromThought,
  getAllReactions,
  getReactionById,
};

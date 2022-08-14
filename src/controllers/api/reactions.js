const { User, Thought } = require("../../models");

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

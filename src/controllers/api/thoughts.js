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

const createThought = () => {
  // get all thought fields from payload
  // get user id from payload
  // create thought and get id of new thought
  // find user by user id
  // push thought id to thoughts
  // return res
};
//`PUT` to update a thought by its `_id`

//`DELETE` to remove a thought by its `_id`

//`/api/thoughts/:thoughtId/reactions`**

//`POST` to create a reaction stored in a single thought's `reactions` array field

// `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

module.exports = {
  getAllThoughts,
  getThoughtsById,
  createThought,
};

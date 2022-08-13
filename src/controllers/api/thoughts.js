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
  try {
    const {username,thoughtMessage} = req.body;
    if (username && thoughtMessage) {
      await Thought.create({username, thoughtMessage});
      return res.json({success:true});
    }else {
      return res.status(400).json({
        success:false,
        error:`Please enter a valid message`
      });

    }
      } catch (error) {
        console.log(`[ERROR]: could not create new thought at this time | ${error.message} `);
        return res.status(500).json({success:false, error: error.message})
      }

    }

    const updateThought = () => {
      try{
        const {id} = req.params;
        const {username, thoughtText} = req.body;
        if (username || thoughtText) {
          await Thought.findByIdAndUpdate(id, {
            username, thoughtMessage
          });
          return res.json({success:true});
        }else res.status(500).json({success:false});
      } catch (error) {
        console.log(`[ERROR]: could not update thought at this time | ${error.message} `)
        return res.status(500).json({success:false, error: error.message});
      }
      };

      const deleteThought = async (req,res) => {
        try {
          const {id} = req.params;
          await Thought.findByIdAndDelete(id);
          return res.json ({success:true});
        }catch (error) {
          console.log(`[ERROR]: could not delete thought at thus time`)
        }
        };
      
  
module.exports = {
  getAllThoughts,
  getThoughtsById,
  createThought,
  updateThought,
  deleteThought
};

const { Schema, model } = require("mongoose");

const reactionsSchema = {
  dateOfPost: {
    type: Date,
    required: true,
    trim: true,
  },
  reactionMessage: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 8000,
  },

  friend: {
    type: Schema.Types.ObjectId,
    ref: "Friend",
  },
};

const schema = new Schema(reactionsSchema);

const Reactions = model("Reactions", schema);

module.exports = Reactions;

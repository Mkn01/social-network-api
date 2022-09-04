const moment = require("moment");
const { Schema, model } = require("mongoose");
const reactionSchema = require("./reactions");

const thoughtSchema = {
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (date) => {
      return moment(date).format("MMMM Do YYYY, h:mm a");
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
};

const schema = new Schema(thoughtSchema);

const Thought = model("Thought", schema);

module.exports = Thought;

const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (date) => {
      return moment(date).format("MMMM Do YYYY, h:mm a");
    },
  },
});

module.exports = reactionSchema;

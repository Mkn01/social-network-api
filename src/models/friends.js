const { Schema, model } = require("mongoose");

const friendsSchema = {
  firstName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
    trim: true,
  },
  profileImageUrl: {
    type: String,
    required: true,
    trim: true,
  },
};

const schema = new Schema(friendsSchema);

const Friends = model("Friends", schema);

module.exports = Friends;

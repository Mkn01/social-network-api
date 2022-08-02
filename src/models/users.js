const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = {
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
  email: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImageUrl: {
    type: String,
    required: true,
    trim: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 20,
    trim: true,
  },
};

const schema = new Schema(userSchema);
// ask dom ??
schema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const password = await bcrypt.hash(this.password, 10);
    this.password = password;
  }

  next();
});

const User = model("User", schema);

module.exports = User;

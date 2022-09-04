const { User } = require("../models");

const users = [
  {
    username: "HPotter1",
    email: "Harry.Potter@Gryffindor.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "Hermione Granger",
    email: "Hermione.Granger@Gryffindor.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "Ron Weasley",
    email: "Ron.Weasley@Gryffindor.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "Ginny Weasley ",
    email: "Ginny.Weasley@Gryffindor.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "Luna Lovegood",
    email: "Luna.Lovegood@Ravenclaw.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "Draco Malfoy",
    email: "Draco.Malfoy@Slytherin.com",
    thoughts: [],
    friends: [],
  },
];

const seedUsers = async () => {
  await User.insertMany(users);

  console.log("[INFO]: Successfully seeded users");
};

module.exports = { seedUsers };

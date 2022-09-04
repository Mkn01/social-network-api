const { Thought } = require("../models");

const thoughts = [
  {
    thoughtText:
      "Books! And cleverness! There are more important things — friendship and bravery.",
    createdAt: "19 Aug 2020 08:08",
    username: "Hermione Granger",
    reactions: [
      {
        reactionBody: "!!!",
        username: "Ron Weasley",
        createdAt: "19 Aug 2020 08:18",
      },
    ],
  },
  {
    thoughtText: "Don't let the Muggles get you down.",
    createdAt: "19 Aug 2020 08:08",
    username: "Ron Weasley",
    reactions: [
      {
        reactionBody: ":)",
        username: "Hermione Granger",
        createdAt: "19 Aug 2020 08:18",
      },
      {
        reactionBody: "Liked",
        username: "HPotter1",
        createdAt: "19 Aug 2020 08:18",
      },
      {
        reactionBody: ":)",
        username: "Luna Lovegood",
        createdAt: "19 Aug 2020 08:18",
      },
    ],
  },
  {
    thoughtText:
      "All my shoes have mysteriously disappeared. I suspect the Nargles are behind it.",
    createdAt: "19 Aug 2020 08:08",
    username: "Luna Lovegood",
    reactions: [],
  },
  {
    thoughtText: "Bouillabaisse",
    createdAt: "19 Aug 2020 08:08",
    username: "Hermione Granger",
    reactions: [
      {
        reactionBody: "Bless you",
        username: "Ron Weasley",
        createdAt: "19 Aug 2020 08:18",
      },
    ],
  },
  {
    thoughtText:
      "Things we lose have a way of coming back to us in the end, if not always in the way we expect.",
    createdAt: "20 Aug 2020 08:08",
    username: "Luna Lovegood",
    reactions: [
      {
        reactionBody: ":)",
        username: "HPotter1",
        createdAt: "8 Aug 2020 08:18",
      },
      {
        reactionBody: "Liked",
        username: "Hermione Granger",
        createdAt: "20 Aug 2020 08:18",
      },
    ],
  },
  {
    thoughtText: "I'm not buying anything Malfoy thinks is good.",
    createdAt: "8 Aug 2020 08:08",
    username: "HPotter1",
    reactions: [
      {
        reactionBody: ":p",
        username: "Draco Malfoy",
        createdAt: "20 Aug 2020 08:18",
      },
    ],
  },
];

const seedThoughts = async () => {
  await Thought.insertMany(thoughts);

  console.log("[INFO]: Successfully seeded thoughts");
};

module.exports = { seedThoughts };

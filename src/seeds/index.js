const connectToDatabase = require("../config/connection");

const { User, Thought } = require("../models");

const { seedUsers } = require("./users");
const { seedThoughts } = require("./thoughts");

const clearCollections = async () => {
  await User.deleteMany({});
  await Thought.deleteMany({});
};

const init = async () => {
  try {
    await connectToDatabase();

    await clearCollections();

    await seedUsers();

    await seedThoughts();

    const thoughtsFromDb = await Thought.find({});

    const usersFromDb = await User.find({});

    const thoughtPromises = thoughtsFromDb.map(async (thought) => {
      const username = thought.username;

      const user = usersFromDb.find((user) => user.username === username);

      user.thoughts.push(thought._id.toString());

      await User.findByIdAndUpdate(user._id, { ...user });
    });

    const userArray = usersFromDb.map((user) => user._id);

    const friendPromises = usersFromDb.map(async (user) => {
      const randomUsers = userArray.sort(() => 0.5 - Math.random());
      const randomArray = randomUsers.slice(
        Math.floor(Math.random() * randomUsers.length)
      );

      const friends = randomArray.filter((userId) => userId !== user._id);

      await User.findByIdAndUpdate(user._id, { friends });
    });

    await Promise.all(thoughtPromises);
    await Promise.all(friendPromises);
  } catch (error) {
    console.log(`[ERROR]: Failed to seed DB | ${error.message}`);
  }

  process.exit(0);
};

init();

const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const scoreCollection = db.collection('post');



// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

function addPosts(post) {
  return scoreCollection.insertOne(post); // Returning the result of the insert operation
}

function getPosts() {
  // Assuming you want to get all posts, sorted by date or any other appropriate field
  const query = {}; // Query to get all posts
  const options = {
    sort: { date: -1 }, // Sorting by date in descending order, adjust as per your requirement
    limit: 10, // Limiting to 10 posts, adjust as per your requirement
  };
  return scoreCollection.find(query, options).toArray(); // Returning the result of find operation
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addPosts,
  getPosts,
};

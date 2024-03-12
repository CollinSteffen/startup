const express = require('express');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetPosts
apiRouter.get('/posts', (_req, res) => {
  res.send(posts);
});

// SubmitScore
apiRouter.post('/posts', (req, res) => {
  posts = updatePosts(req.body, scores);
  res.send(posts);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// updateScores considers a new score for inclusion in the high scores.
// The high scores are saved in memory and disappear whenever the service is restarted.
let scores = [];
function updatePosts(newPost, posts) {
  let found = false;
  for (const [i, previousPost] of posts.entries()) {
    if (newPost.score > previousPost.score) {
      posts.splice(i, 0, newPost);
      found = true;
      break;
    }
  }

  if (!found) {
    scores.push(newPost);
  }

  if (posts.length > 10) {
    posts.length = 10;
  }

  return scores;
}

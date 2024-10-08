const express = require('express');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const DB = require('./database.js');
const app = express();


const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the applications static content
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);


// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// GetUser returns information about a user
apiRouter.get('/user/:email', async (req, res) => {
  const user = await DB.getUser(req.params.email);
  if (user) {
    const token = req?.cookies.token;
    res.send({ email: user.email, authenticated: token === user.token });
    return;
  }
  res.status(404).send({ msg: 'Unknown' });
});

// secureApiRouter verifies credentials for endpoints
var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

// GetUser returns information about a user
apiRouter.get('/user/:email', async (req, res) => {
  const user = await DB.getUser(req.params.email);
  if (user) {
    const token = req?.cookies.token;
    res.send({ email: user.email, authenticated: token === user.token });
    return;
  }
  res.status(404).send({ msg: 'Unknown' });
});

// secureApiRouter verifies credentials for endpoints
var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// GetPosts
secureApiRouter.get('/posts', async (req, res) => {
  const posts = await DB.getPosts();
  res.send(posts);
});

// SubmitPost
secureApiRouter.post('/posts', async (req, res) => {
  try {
      const post = req.body; // Assuming the request body contains the post data
      await DB.addPost(post); // Add the new post to the database
      const posts = await DB.getPosts(); // Retrieve all posts from the database
      res.json(posts); // Send the updated list of posts as a response
  } catch (error) {
      console.error('Error adding post:', error);
      res.status(500).send('Error adding post');
  }
});

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// });

// const upload = multer({storage: storage});

// // Handle file uploads
// app.post('/upload', upload.single('file'), (req, res) => {
//   if (req.file) {
//     res.send({
//       message: 'Upload succeeded',
//       file: req.file.filename,
//     });
//   } else {
//     res.status(400).send({ message: 'Upload failed' });
//   }
// });

// // Serve uploaded files
// app.get('/file/:filename', (req, res) => {
//   res.sendFile(__dirname + `/uploads/${req.params.filename}`);
// });

// // Default error handler
// app.use(function (err, req, res, next) {
//   res.status(500).send({ type: err.name, message: err.message });
// });

// // Default route
// app.use((_req, res) => {
//   res.sendFile('index.html', { root: 'public' });
// });


// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

// Start server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
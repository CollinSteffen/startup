const express = require('express');
const multer = require('multer');
const fs = require('fs');

const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Set up multer for file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
      const filetype = file.originalname.split('.').pop();
      const id = Math.round(Math.random() * 1e9);
      const filename = `${id}.${filetype}`;
      cb(null, filename);
    },
  }),
  limits: { fileSize: 64000 },
});

// Define API routes
const apiRouter = express.Router();

let posts = [];

// GetPosts
apiRouter.get('/posts', (_req, res) => {
  res.send(posts);
});

// SubmitPost
apiRouter.post('/posts', (req, res) => {
  const newPost = req.body;
  posts.push(newPost);
  res.json(posts);
});

app.use('/api', apiRouter);

// Handle file uploads
app.post('/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    res.send({
      message: 'Upload succeeded',
      file: req.file.filename,
    });
  } else {
    res.status(400).send({ message: 'Upload failed' });
  }
});

// Serve uploaded files
app.get('/file/:filename', (req, res) => {
  res.sendFile(__dirname + `/uploads/${req.params.filename}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res.status(413).send({ message: err.message });
  } else {
    res.status(500).send({ message: err.message });
  }
});

// Default route
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// // Function to update posts
// function updatePosts(newPost, posts) {
//   posts.push(newPost);
//   return posts;
// }

app.post('/storeCredentials', (req, res) => {
  const { username, password } = req.body;
  const credentials = { username, password };
  const jsonContent = JSON.stringify(credentials);

  // Write to the JSON file
  fs.writeFile('credentials.json', jsonContent, 'utf8', (err) => {
    if (err) {
      console.error('An error occurred while writing to file:', err);
      res.status(500).send('Error storing credentials');
      return;
    }
    console.log('Credentials stored successfully.');
    res.status(200).send('Credentials stored successfully');
  });
});



// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

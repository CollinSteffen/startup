const express = require('express');
const multer = require('multer');

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

// GetPosts
apiRouter.get('/posts', (_req, res) => {
  res.send(posts);
});

// SubmitPost
apiRouter.post('/posts', (req, res) => {
  posts = updatePosts(req.body, posts);
  res.send(posts);
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

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Function to update posts
function updatePosts(newPost, posts) {
  posts.push(newPost);
  return posts;
}

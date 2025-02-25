import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import { chat } from './api/chat.js';

const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;

// For ES modules: set __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to parse JSON request bodies
app.use(express.json());

// API endpoint for chat requests using the external chat API
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    const result = await chat(message);
    res.json(result);
  } catch (error) {
    console.error('Error handling chat request:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Redirect /resume to /resume.pdf this is needed because i could not figure out how to do it in the frontend
app.get('/resume', (req, res) => {
  res.redirect('/resume.pdf');
});

// Serve static files from the "dist" directory (built assets)
app.use(express.static(path.resolve(__dirname, 'dist')));

// Fallback route to serve the client application (index.html)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});

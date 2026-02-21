const express = require('express');
const cors = require('cors');
const jsSnippets = require('./snippets');

const app = express();
// Changed to 8080 to avoid Mac AirPlay conflicts!
const PORT = 8080; 

// Middleware
app.use(cors());
app.use(express.json());

// API Route to get a random snippet
app.get('/api/snippet/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * jsSnippets.length);
  const randomSnippet = jsSnippets[randomIndex];
  
  res.json({ snippet: randomSnippet });
});

// THIS BLOCK KEEPS THE SERVER ALIVE
app.listen(PORT, () => {
  console.log(`Backend server is running and LISTENING on http://localhost:${PORT}`);
});
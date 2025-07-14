// 1. Import dependencies
const express = require('express');
const cors = require('cors');
const cardData = require('./cardData.json');
const { computeScore } = require('./scoring');

// 2. Create the app
const app = express();

// 3. Middleware
app.use(cors());
app.use(express.json());

// 4. Routes
app.post('/api/spend-profile', (req, res) => {
  const { travel = 0, dining = 0, other = 0 } = req.body;

  // Compute scores
  const scored = cardData.map(card => ({
    ...card,
    score: computeScore(card, { travel, dining, other })
  }));

  const best = scored.reduce((a, b) => (b.score > a.score ? b : a));
  res.json({
    name: best.name,
    logoUrl: best.logoUrl,
    score: best.score
  });
});

// 5. Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API listening on port ${PORT}`));
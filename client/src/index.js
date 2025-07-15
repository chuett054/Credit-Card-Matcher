// server/index.js

// 1. Imports
const express = require('express');
const cors = require('cors');
const cardData = require('./cardData.json');
const { computeScore } = require('./scoring');

// 2. Create & configure the app
const app = express();
app.use(cors({ origin: 'https://credit-card-matcher.vercel.app' }));
app.use(express.json());

// 3. Health-check route (optional)
app.get('/', (_req, res) => {
  res.send('✅ Credit Card Matcher API is running');
});

// 4. API endpoint
app.post('/api/spend-profile', (req, res) => {
  const { travel = 0, dining = 0, other = 0 } = req.body;

  const scored = cardData.map(card => {
    const { rewards, cost, netBenefit } = computeScore(card, { travel, dining, other });
    return { ...card, rewards, cost, netBenefit };
  });

  const best = scored.reduce((a, b) => (b.netBenefit > a.netBenefit ? b : a));
  res.json(best);
});

// 5. Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API listening on port ${PORT}`));


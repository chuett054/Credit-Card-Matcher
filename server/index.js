cat > index.js << 'EOF'
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

// TODO: Import your scoring logic and form-handling routes here
app.post('/api/spend-profile', (req, res) => {
  // req.body = { travel, dining, other… }
  // apply scoring and return top card
  res.json({ card: 'Placeholder Card', score: 0 })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`API listening on port ${PORT}`))
EOF
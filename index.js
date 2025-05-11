const express = require('express');
const crypto = require('crypto');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.sendStatus(200);
});

app.post('/auth', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }

  // Insecure MD5 hash (for training/demo only)
  const hashedPassword = crypto.createHash('md5').update(password).digest('hex');

  res.status(200).json({
    message: 'Password hashed using MD5 (insecure)',
    username,
    hash: hashedPassword
  });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

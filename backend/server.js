const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const links = [
  { name: 'GitHub', url: '<https://github.com>' },
  { name: 'LinkedIn', url: '<https://linkedin.com>' },
  { name: 'Twitter', url: '<https://twitter.com>' }
];

app.get('/api/links', (req, res) => {
  res.json(links);
});

app.listen(5000, () => {
  console.log('Backend running on <http://localhost:5000>');
});

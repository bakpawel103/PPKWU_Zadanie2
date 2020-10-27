const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome at site, that will check your password validity');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})

const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome at site, that will check your password validity');
});

app.get('/validate', (req, res) => {
  res.json({ result: isValid(req.body.string) });
});

var isValid = (string) => {
  if(!hasLowerCase(string)) return false;

  return true;
}

var hasLowerCase = (string) => {
  if(string.toUpperCase() != string) return true;
  return false;
}

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})

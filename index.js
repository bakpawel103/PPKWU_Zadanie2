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
  if(req.body || req.body.string || !(typeof req.body.string == "string")) {
    res.status(500).send("Pass body with string property");
  } else {
    res.json({ result: {
      hasLowerCase: hasLowerCase(req.body.string),
      hasUpperCase: hasUpperCase(req.body.string),
      hasNumbers: hasNumbers(req.body.string),
      hasSpecialCharacters: hasSpecialChars(req.body.string)
    }});
  }
});

var hasLowerCase = (string) => {
  if(string.toUpperCase() != string) return true;
  return false;
}

var hasUpperCase = (string) => {
  if(string.toLowerCase() != string) return true;
  return false;
}

var hasNumbers = (string) => {
  var format = /\d/;
  return format.test(string);
}

var hasSpecialChars = (string) => {
  var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return format.test(string);
}

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})

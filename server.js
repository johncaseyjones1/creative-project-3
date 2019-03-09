const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
   extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'));

let items = [];
let id = 0;
app.listen(3000, () => console.log('Server listening on port 3000!'));

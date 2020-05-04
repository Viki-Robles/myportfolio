const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => res.send('Hello World!this is my app'))

app.listen(port, () => console.log(``))
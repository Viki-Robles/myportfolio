const express = require('express');
const app = express();
const port = 3003;

app.get('/', (req, res) => res.send('Hello viki this is the Backend End'));

app.listen(port, () => console.log(``))
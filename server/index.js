/** Th3 Part Libraries */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const api = require('./routes');

const app = express()
;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// Routing
app.use('/api', api);

// Serve Server
const port = process.env.port || 1234;
app.listen(port, () => console.log('Runing on port: ' + port));
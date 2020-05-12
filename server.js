const express = require('express');

const app = express();

app.use(express.static('./dist/scm-covid19id-client'));

app.get('/*', (req, res) => 
    res.sendFile('index.html', {root: 'dist/scm-covid19id-client/'}),
);

app.listen(process.env.PORT || 8080);
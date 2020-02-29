const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h1>It appears to be working my good man.</h1>')
});

function logger(req, res, next) {
    console.log(
        `[${new Date().toISOString()} ${req.method} to ${req.url} from ${req.get('Origin')}]`
    );
    next();
}

server.use(logger)

module.exports = server;
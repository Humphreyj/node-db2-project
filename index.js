const server = require('./server');

const PORT = process.env.PORT || 3030;

const apiRoutes = require('./api/apiRoutes');

server.use('/api', apiRoutes);

server.listen(PORT, () => {
    console.log(`Runnin' on port ${PORT} : )`);
})
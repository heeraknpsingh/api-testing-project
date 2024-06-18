const jsonServer = require('json-server');
const auth = require('json-server-auth');

const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Replace with your JSON file

// Middlewares
server.db = router.db;
server.use(jsonServer.defaults());
server.use(auth);

// Custom login endpoint
server.post('/users/login', (req, res, next) => {
    res.json({ message: 'Custom login endpoint' });
});

// Start server
const port = 3000;
server.listen(port, () => {
    console.log(`JSON Server with Auth is running on port ${port}`);
});

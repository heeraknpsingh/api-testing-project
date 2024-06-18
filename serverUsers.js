// import pkg from 'json-server';
// const { create, router: _router, defaults } = pkg;
// import auth from 'json-server-auth';
// const server = create();
// const router = _router('users.json');
// const middlewares = defaults();

// // Set default middlewares (logger, static, cors, etc.)
// server.use(middlewares);
// server.use(pkg.bodyParser);

// // Add custom routes before auth middleware
// server.post('/users/register', (req, res, next) => {
//     const { username, password, email } = req.body;
//     const db = router.db;
//     const users = db.get('users');
//     users.push({ username, password, email }).write();
//     res.status(201).json({ message: 'User registered successfully' });
// });

// // Use default authentication
// server.db = router.db; // Required for json-server-auth
// server.use(auth);
// server.use(router);

// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`JSON Server with auth is running on http://localhost:${PORT}`);
// });
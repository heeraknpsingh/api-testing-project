import pkg from 'json-server';
const { create, router: _router, defaults } = pkg;
var server = create()
var router = _router('books.json')
var middlewares = defaults()
server.use(pkg.bodyParser);

function simpleAuth(req, res, next) {
  const arr = ["1", "2", "3", "4", "5", "6"]
  const exists = arr.indexOf(req.body.id) !== -1;
  const stat = req.url.split('/')[2] === "100"

  if(!exists && !stat){
    next();
  } else if(exists) {
    res.status(404).send("adding duplicate book with id "+req.body.id)
  } else if(stat) {
    res.status(404).send("id does not exist "+req.url.split('/')[2])
  }
}
router.render = function (req, res) {
  res.json(res.locals.data)
}
server.use(middlewares)
server.use(simpleAuth);
server.use(router);
server.listen(3000, function () {
  console.log('JSON Server is running on port 3000');
})
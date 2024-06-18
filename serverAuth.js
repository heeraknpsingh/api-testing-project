import pkg from 'json-server';
const { create, router: _router, defaults } = pkg;
var server = create()
var router = _router('books.json')
var middlewares = defaults()

function simpleAuth(req, res, next) {
  if (req.headers.authorization) {
    var user_and_password = Buffer.from(req.headers.authorization.split(" ")[1], 'base64').toString();
    if(user_and_password !== "heera:heera"){
        console.log("auth mismatched "+user_and_password+"/"+"heera:heera")
        res.status(401).send({error: 'unauthorized'})
    } else {
        var user_only = user_and_password.split(':')[0];
        console.log(user_and_password)
        req.user = user_only;
        next();
    }
  } else {
    res.status(401).send({error: 'missing auth'})
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
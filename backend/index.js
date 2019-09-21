var express = require("express");
const app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var math = require("mathjs");

app.use(cors({ origin: "http://localhost:3000" }));

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Cache-Control", "no-cache");
  next();
});

app.post("/calculate", function(req, res) {
  console.log("Inside Calculate Function..");
  console.log("Req Body: ", req.body);
  var text = req.body.result;
  console.log("text is: " + text);
  console.log("math.eval(text) is: " + math.eval(text));
  var total_res = math.eval(text);
  console.log("Final Result is ", total_res);
  //res.end(2);
  res.send({ result: total_res });
});

app.listen(3001, () => console.log("Listening to port 3001!!"));

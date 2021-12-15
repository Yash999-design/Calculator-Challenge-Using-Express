const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  // console.log(req.body);

  var number1 = Number(req.body.num1); //this num1 name of index.html input tag
  var number2 = Number(req.body.num2);

  var result = number1 + number2;

  res.send("The result of the calculation is " + result);
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function (req, res) {
  var weightOfPlayer = parseFloat(req.body.weight);
  var heightOfPlayer = parseFloat(req.body.height);

  var bmi = weightOfPlayer / (heightOfPlayer * heightOfPlayer);

  res.send("Your BMI is " + bmi);
});

app.listen(3000, function (req, res) {
  console.log("Example app listening at http:localhost:3000");
});

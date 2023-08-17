const express = require("express");
const requestValidator = require("./middleware/requestValidator");

const app = express();

app.use(express.json());

//@ts-ignore
app.post("/", [requestValidator], (req, res) => {
  res.send({message: "success", statusCode: 200})
});

app.listen(3000, () => {
  console.log("Server started listening ...");
});

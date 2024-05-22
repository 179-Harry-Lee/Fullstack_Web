import express from "express";
import bodyParser from "body-parser"; // query parameter
import viewEngine from "./config/viewEngine";
import initWebRouets from "./route/web";
require("dotenv").config();

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({}));

viewEngine(app);
initWebRouets(app);

let port = process.env.PORT;
app.listen(port, () => {
  console.log(`Backend Nodejs is running on http://localhost:${port}`);
});

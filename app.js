import express from "express";
import PATH from "path";
import consign from "consign";
import bodyParser from "body-parser";
import ejs from "ejs";

import userRoutes from "./controller/routes/usuario.js";

var app = express();

//npm install body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//nom install ejs
app.set("view engine", "ejs");
app.engine("html", ejs.renderFile);
app.set("views", PATH.join("view/"));

//consign.apply('controller/routes', app);
// consign().include('controller/routes').into(app);

app.use("/user", userRoutes);

app.listen(8081, () => {
  console.log("http://localhost:8081");
});

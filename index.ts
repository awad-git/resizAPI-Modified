/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-var-requires */
//importing modules & middleware
import express, { query } from "express";
import { Server } from "http";
//import routes from './routes/postform';
import * as fs from "fs";
const bodyParser = require("body-parser");
//const multer = require('multer');
import sharp from "sharp";
import router from "./routes/getimage";
//sharp.cache({ files : 0 });

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Upload the image |or //Get url query strings (?filename=&width=&height=)
app.get("/", (req, res) => {
  res.send("<h1>Welcome to image processing API </h1>");
});

//app.use('/images',routes)

app.use("/images", router);

let port = process.env.PORT || 3000;
let server = app.listen(port, () => {
  console.log(`server is running or port ${port}`);
});

module.exports = { server, app, router };

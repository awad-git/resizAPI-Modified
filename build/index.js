"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-var-requires */
//importing modules & middleware
const express_1 = __importDefault(require("express"));
const bodyParser = require("body-parser");
const getimage_1 = __importDefault(require("./routes/getimage"));
//sharp.cache({ files : 0 });
const app = (0, express_1.default)();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Upload the image |or //Get url query strings (?filename=&width=&height=)
app.get("/", (req, res) => {
    res.send("<h1>Welcome to image processing API </h1>");
});
//app.use('/images',routes)
app.use("/images", getimage_1.default);
let port = process.env.PORT || 3000;
let server = app.listen(port, () => {
    console.log(`server is running or port ${port}`);
});
module.exports = { server, app, router: getimage_1.default };

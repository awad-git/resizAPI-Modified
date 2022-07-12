"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharping = void 0;
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
const fs = __importStar(require("fs"));
const sharp_1 = __importDefault(require("sharp"));
const sharping = (req, res, next, data) => __awaiter(void 0, void 0, void 0, function* () {
    let filename = req.query.filename;
    let width = parseInt(req.query.width);
    let height = parseInt(req.query.height);
    yield (0, sharp_1.default)(data)
        .resize(width, height)
        //Save image to file (asyncrounous)
        .toFile(`./resized/${filename}-${width}-${height}.jpg`);
    console.log("after  sharp");
    let key1 = `./resized/${filename}-${width}-${height}.jpg`;
    let file = yield fs.readFileSync(key1);
    //console.log(data)
    console.log("after fetching resized");
    res.writeHead(200, { "Content-Type": "image/jpeg" });
    //send resized image to the user
    res.end(file); //res.end(data,'binary');
    //let cached=`${filename}-${width}-${height}`
    //appCache.set(cached,data,500)
    //res.sendStatus(200)
});
exports.sharping = sharping;

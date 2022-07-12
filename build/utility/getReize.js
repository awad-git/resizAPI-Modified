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
exports.resizing = void 0;
/* eslint-disable no-inner-declarations */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-labels */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-var-requires */
//const fs =require('fs')
const fs = __importStar(require("fs"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const sharping_1 = require("./sharping");
//const delay = require('delay');
//const nCache=require('node-cache')
const resizing = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let width = req.query.width;
    let height = req.query.height;
    const key1 = `./resized/${req.query.filename}-${width}-${height}.jpg`; // as string .filename |was req.originalurl
    //let data=await fs.readFileSync(key1)
    fs.readFile(key1, (err, data) => {
        //await (err:Error, data:string)=> {   if (err) {   //was await fs.readfile
        //throw err;
        if (!data) {
            //data===null
            ///let result=data
            let filename = req.query.filename;
            //const specialChars = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;
            //if(filename.includes(specialChars)){res.send('invalid file name')}
            const containsSpecialChars = (filename) => {
                const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
                return specialChars.test(filename);
            };
            if (containsSpecialChars(filename)) {
                res.send("invalid file name");
            }
            console.log(filename);
            let width = parseInt(req.query.width);
            if (isNaN(width) || width <= 0) {
                res.send("width should be a number");
            }
            let height1 = req.query.height;
            let height = parseInt(height1);
            if (isNaN(height) || height <= 0) {
                res.send("height should be a number");
            }
            if (width && height && filename) {
                //Send the image to API-asyncrounous (Resizing operation)
                //Await function to read the file from images folder and put it inside sharpt
                let p = "images" + "\\" + `${filename}` + ".jpg";
                for (let i = 0; i < 100; i++) {
                    console.log("-");
                } //delay function console.log('-')
                fs.readFile(p, (err, data) => {
                    //was await(err:Error, data:string)=> {   if (err) {   //was await fs.readfile
                    //throw err;
                    if (!data) {
                        res.send("Error fetching file drag a file to images folder and set width&height");
                    } //data===null
                    console.log("after  reading");
                    //const sharpen=async()=>{
                    (0, sharping_1.sharping)(req, res, next, data);
                });
                //////////////////////////////////////////////////////////////////////////////////////////sharping
                /* sharping here */
                /////////////////////////////////////////////////////////////////////////////////////////////////////
            }
            else {
                res.send("url should be like http://localhost:3000/images?filename=download&width=60&height=50");
            }
        }
        else {
            console.log("this is cached one");
            res.writeHead(200, { "Content-Type": "image/jpeg" });
            res.end(data, "binary");
        }
    });
});
exports.resizing = resizing;
//res.send(appCache.get(key1))

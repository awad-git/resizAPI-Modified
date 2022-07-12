"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable @typescript-eslint/no-var-requires */
//import { Request,Response,NextFunction } from "express"
//import { NextFunction } from "express"
//import { sharping } from "../utility/sharping"
const express = require("express");
const fs = require("fs");
const base_url = "http://localhost:3000/images?filename=butterf&width=60&height=50";
const request = express();
const response = require("express");
describe("GET /", function () {
    ////
    it("returns status code 200", () => __awaiter(this, void 0, void 0, function* () {
        yield request.get(base_url, () => __awaiter(this, void 0, void 0, function* () {
            expect(response.status).toBe(200);
        }));
    }));
});
it("returns Hello World", () => {
    request.get("http://localhost:3000/", () => {
        //error:Error,req:Request,res:Response
        // expect(_body).toBeDefined()
        expect(response.body).toBeDefined();
    });
});
//unlinkSync -file related tasks are asynchronous-you could use a fileExist utility here
//test for image processing.
it("testing sharping", () => __awaiter(void 0, void 0, void 0, function* () {
    //fs.exists('../resized/download-600-50.jpg', function(exists) {
    if (fs.existsSync("../resized/download-600-50.jpg")) {
        console.log("File exists. Deleting now ...");
        fs.unlinkSync("../resized/download-600-50.jpg");
    }
    else {
        console.log("File not found, so not deleting.");
        request.get("http://localhost:3000/images?filename=download&width=600&height=50", () => __awaiter(void 0, void 0, void 0, function* () {
            //await sharping(request,response,next,'../resized/download-600-50.jpg')}
            expect(fs.existsSync("../resized/download-600-50.jpg")).toBeTruthy();
        }));
    }
}));

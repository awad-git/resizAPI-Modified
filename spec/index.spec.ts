/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-var-requires */
//import { Request,Response,NextFunction } from "express"
//import { NextFunction } from "express"
//import { sharping } from "../utility/sharping"
const express = require("express");
const fs = require("fs");

const base_url =
  "http://localhost:3000/images?filename=butterf&width=60&height=50";

const request = express();
const response = require("express");

describe("GET /", function () {
  ////
  it("returns status code 200", async () => {
    await request.get(base_url, async () => {
      expect(response.status).toBe(200);
    });
  });
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

it("testing sharping", async () => {
  //fs.exists('../resized/download-600-50.jpg', function(exists) {
  if (fs.existsSync("../resized/download-600-50.jpg")) {
    console.log("File exists. Deleting now ...");
    fs.unlinkSync("../resized/download-600-50.jpg");
  } else {
    console.log("File not found, so not deleting.");
    request.get(
      "http://localhost:3000/images?filename=download&width=600&height=50",
      async () => {
        //await sharping(request,response,next,'../resized/download-600-50.jpg')}
        expect(fs.existsSync("../resized/download-600-50.jpg")).toBeTruthy();
      }
    );
  }
});

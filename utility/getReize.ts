/* eslint-disable no-inner-declarations */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-labels */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-var-requires */
//const fs =require('fs')
import * as fs from "fs";
import sharp from "sharp";
import { NextFunction } from "express";
import router from "../routes/getimage";
import express, { Request, Response } from "express";
import { resolve } from "path";
const app = express();

import { sharping } from "./sharping";
//const delay = require('delay');
//const nCache=require('node-cache')

export const resizing = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let width = req.query.width;
  let height = req.query.height;

  const key1 = `./resized/${req.query.filename}-${width}-${height}.jpg`; // as string .filename |was req.originalurl

  //let data=await fs.readFileSync(key1)

  fs.readFile(
    key1,
    (err: NodeJS.ErrnoException | null, data: Buffer | string) => {
      //await (err:Error, data:string)=> {   if (err) {   //was await fs.readfile
      //throw err;

      if (!data) {
        //data===null

        ///let result=data

        let filename = req.query.filename;

        //const specialChars = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;
        //if(filename.includes(specialChars)){res.send('invalid file name')}
        const containsSpecialChars = (filename: string): boolean => {
          const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
          return specialChars.test(filename);
        };
        if (containsSpecialChars(filename as string)) {
          res.send("invalid file name");
        }

        console.log(filename);
        let width = parseInt(req.query.width as string);
        if (isNaN(width) || width <= 0) {
          res.send("width should be a number");
        }
        let height1 = req.query.height as string;
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

          fs.readFile(
            p,
            (err: NodeJS.ErrnoException | null, data: Buffer | string) => {
              //was await(err:Error, data:string)=> {   if (err) {   //was await fs.readfile
              //throw err;
              if (!data) {
                res.send(
                  "Error fetching file drag a file to images folder and set width&height"
                );
                console.log('url should be like http://localhost:3000/images?filename=download&width=60&height=50')
              } //data===null

              //console.log("after  reading");
              //const sharpen=async()=>{
              if(data){sharping(req, res, next, data as string);}
            }
          );
          //////////////////////////////////////////////////////////////////////////////////////////sharping
          /* sharping here */
          /////////////////////////////////////////////////////////////////////////////////////////////////////
        } else {
          res.send(
            "url should be like http://localhost:3000/images?filename=download&width=60&height=50"
          );
        }
      } else {
        console.log("this is cached one");
        res.writeHead(200, { "Content-Type": "image/jpeg" });

        res.end(data, "binary");
      }
    }
  );
};

//res.send(appCache.get(key1))

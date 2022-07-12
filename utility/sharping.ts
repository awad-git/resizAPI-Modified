/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as fs from "fs";
import sharp from "sharp";
import { Express, Request, Response, NextFunction } from "express";

export const sharping = async (
  req: Request,
  res: Response,
  next: NextFunction,
  data: string
) => {
  let filename = req.query.filename as string;
  let width = parseInt(req.query.width as string);
  let height = parseInt(req.query.height as string);
  await sharp(data)
    .resize(width, height)
    //Save image to file (asyncrounous)
    .toFile(`./resized/${filename}-${width}-${height}.jpg`);

  console.log("after  sharp");
  let key1 = `./resized/${filename}-${width}-${height}.jpg`;

  let file = await fs.readFileSync(key1);
  //console.log(data)
  console.log("after fetching resized");
  res.writeHead(200, { "Content-Type": "image/jpeg" });
  //send resized image to the user
  res.end(file); //res.end(data,'binary');
  //let cached=`${filename}-${width}-${height}`
  //appCache.set(cached,data,500)
  //res.sendStatus(200)
};

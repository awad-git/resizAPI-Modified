/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
//const express=require('express')
const express = require("express");
const router = express.Router();
import * as fs from "fs";
import sharp from "sharp";
import { NextFunction, Request, Response } from "express";
import { resizing } from "../utility/getReize";

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  resizing(req, res, next);
});

export default router;

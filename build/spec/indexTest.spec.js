/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//const supertest=require('supertest')
var request = require("request");
const server = require("../build/index");
describe('testing image processing API', () => {
    it('should GET imageResized on load', () => __awaiter(void 0, void 0, void 0, function* () {
        yield request.get('http://localhost:3000/imhttp://localhost:3000/images?filename=download&width=200&height=100', (_err, response, body) => {
            expect(response.body).toBeDefined();
        });
    }));
    it('should call imageResized on load', () => __awaiter(void 0, void 0, void 0, function* () {
        yield request.post('http://localhost:3000/images', (_err, response, body) => {
            expect(request.body).toBeDefined();
        });
    }));
});

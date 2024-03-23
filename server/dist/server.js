"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//calling functions
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//assigning function
const app = (0, express_1.default)();
//function use
app.use(express_1.default.json());
//constant
const port = 5000;
//listening
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});

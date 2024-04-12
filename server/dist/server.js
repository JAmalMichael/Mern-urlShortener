"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importing files and functions
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const dbConnection_1 = __importDefault(require("./config/dbConnection"));
const shortUrl_1 = __importDefault(require("./routes/shortUrl"));
//assigning function
const app = (0, express_1.default)();
//function use
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/", shortUrl_1.default);
app.use((0, cors_1.default)({
    origin: "http://localhost:5000",
    credentials: true
}));
//external function call
(0, dbConnection_1.default)();
//constant
const port = 5000;
//listening
app.listen(port, () => {
    console.log(`Server is running on: Port-${port}`);
});

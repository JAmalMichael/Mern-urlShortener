"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const urlController_1 = require("../controller/urlController");
exports.router = express_1.default.Router();
exports.router.post("/shortUrl", urlController_1.createUrl);
exports.router.get("/shortUrl", urlController_1.getAllUrl);
exports.router.get("/shortUrl/:id", urlController_1.getUrl);
exports.router.delete("/shortUrl/:id", urlController_1.deleteUrl);
exports.default = exports.router;

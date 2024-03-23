import express from "express";
import {createUrl, getAllUrl, getUrl, deleteUrl} from "../controller/urlController";

export const router = express.Router();

router.post("/shortUrl", createUrl);
router.get("/shortUrl", getAllUrl);
router.get("/shortUrl/:id", getUrl);
router.delete("/shortUrl/:id", deleteUrl);

export default router;
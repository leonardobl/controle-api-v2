import crypto from "crypto";
import { Request } from "express";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination(req: Request, file, cb) {
    cb(
      null,
      path.resolve(__dirname, "..", "..", "..", "public", "img", "uploads")
    );
  },
  filename(req, file, cb) {
    const newName =
      crypto.randomBytes(16).toString("hex") +
      file.originalname.replace(/\s/g, "");
    cb(null, newName);
  },
});

const multerMiddleware = multer({ storage });

export default multerMiddleware;

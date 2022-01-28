import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(
      null,
      path.resolve(__dirname, "..", "..", "..", "public", "img", "uploads")
    );
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}`);
  },
});

export default storage;

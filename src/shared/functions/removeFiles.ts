import fs from "fs";
import { promisify } from "util";

const unlink = promisify(fs.unlink);

export default unlink;

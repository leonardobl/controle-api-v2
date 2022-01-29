import fs from "fs";
import fse from "fs-extra";
import { promisify } from "util";

const unlink = promisify(fs.unlink);
export const verify = promisify(fse.pathExists);

export default unlink;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const https_1 = __importDefault(require("https"));
const zlib_1 = __importDefault(require("zlib"));
const APILogger_1 = __importDefault(require("../../../../../commons/APILogger"));
const unzip = zlib_1.default.createGunzip();
const logger = APILogger_1.default.getInstance();
class FetchProductFilesService {
    async execute(url, numberFile) {
        https_1.default.get(url, (res) => {
            console.log(url);
            const out = fs_1.default.createWriteStream(`${__dirname}/temp/products_0${numberFile}.json`);
            res.pipe(unzip).pipe(out);
            out.on('finish', () => {
                out.close();
                logger.info('Download completed', {});
            });
        });
    }
}
exports.default = FetchProductFilesService;

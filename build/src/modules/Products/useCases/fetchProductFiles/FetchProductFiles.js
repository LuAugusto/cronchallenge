"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FetchProductFilesService_1 = __importDefault(require("./services/FetchProductFilesService"));
const FetchProductFilesGenerateUrl_1 = __importDefault(require("./services/FetchProductFilesGenerateUrl"));
const fetchProductFilesGenerateUrl = new FetchProductFilesGenerateUrl_1.default();
class FetchProductFilesController {
    async execute({ request, response }) {
        const urls = fetchProductFilesGenerateUrl.urlDownloadfiles();
        urls.forEach((url, index) => {
            setTimeout(() => {
                const service = new FetchProductFilesService_1.default();
                service.execute(url, index + 1);
            }, 60000 * (index + 2));
        });
        // const r1 = readLine.createInterface({
        //   input: fs.createReadStream(`${__dirname}/temp/products_08.json`),
        // })
        // const products: string[] = []
        // r1.on('line', (line) => {
        //   products.push(line)
        //   console.log('Line from line', line)
        //   if (products.length == 2) {
        //     r1.close()
        //     console.log(products)
        //   }
        // })
        response.body = 'ok';
    }
}
exports.default = FetchProductFilesController;

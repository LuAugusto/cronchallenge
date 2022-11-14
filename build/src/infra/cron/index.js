"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeCron = void 0;
const node_cron_1 = __importDefault(require("node-cron"));
const FetchProductFilesService_1 = __importDefault(require("../../modules/Products/useCases/fetchProductFiles/services/FetchProductFilesService"));
const FetchProductFilesGenerateUrl_1 = __importDefault(require("../../modules/Products/useCases/fetchProductFiles/services/FetchProductFilesGenerateUrl"));
const fetchProductFilesGenerateUrl = new FetchProductFilesGenerateUrl_1.default();
const fetchProductFilesService = new FetchProductFilesService_1.default();
const urls = fetchProductFilesGenerateUrl.urlDownloadfiles();
function executeCron() {
    urls.forEach((url, index) => {
        const indexCalc = (index + 1) * 2;
        node_cron_1.default.schedule(`*/${indexCalc} * * * *`, () => {
            console.log(`${url} -> ${index}`);
        });
    });
}
exports.executeCron = executeCron;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contants_1 = require("../../../../../commons/config/Contants");
class FetchProductFilesGenerateUrl {
    constructor() {
        this.paths = Contants_1.paths;
    }
    generateUrl(path, url) {
        return `${url}/${path}`;
    }
    urlDownloadfiles() {
        const urlPaths = [];
        this.paths.forEach((path) => {
            urlPaths.push(this.generateUrl(path, Contants_1.url));
        });
        return urlPaths;
    }
}
exports.default = FetchProductFilesGenerateUrl;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decompressedFiles = exports.getBody = void 0;
const node_gzip_1 = require("node-gzip");
function getBody(request) {
    const body = request.body;
    return body;
}
exports.getBody = getBody;
async function decompressedFiles(file) {
    return await (0, node_gzip_1.gzip)(file).then((result) => console.log(result));
}
exports.decompressedFiles = decompressedFiles;

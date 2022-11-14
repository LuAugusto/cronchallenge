"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractError_1 = __importDefault(require("./AbstractError"));
class NotFoundError extends AbstractError_1.default {
    constructor(message, code) {
        super(code, 404, message, 'Not Found');
    }
}
exports.default = NotFoundError;

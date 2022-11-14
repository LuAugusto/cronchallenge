"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractError_1 = __importDefault(require("commons/errors/AbstractError"));
const mongodb_1 = require("mongodb");
class MongoConnectionError extends AbstractError_1.default {
    constructor(error) {
        super('mongo connection error', 500, error.message, 'Mongo Error');
    }
    throwError() {
        return new mongodb_1.MongoNotConnectedError(this.message);
    }
}
exports.default = MongoConnectionError;

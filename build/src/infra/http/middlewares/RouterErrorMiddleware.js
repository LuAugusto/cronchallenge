"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NotFoundError_1 = __importDefault(require("../../../commons/errors/NotFoundError"));
const APILogger_1 = __importDefault(require("../../../commons/APILogger"));
const logger = APILogger_1.default.getInstance();
class RouterErrorMiddleware {
    constructor(notFoundError) {
        this.notFoundError = notFoundError;
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new RouterErrorMiddleware(new NotFoundError_1.default('Route not found', '404'));
        }
        return this.instance;
    }
    execute({ response }) {
        logger.error(this.notFoundError.message, this.notFoundError);
        response.status = this.notFoundError.status;
        response.body = {
            code: this.notFoundError.code,
            message: this.notFoundError.message,
        };
    }
}
exports.default = RouterErrorMiddleware;

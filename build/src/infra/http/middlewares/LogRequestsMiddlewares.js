"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APILogger_1 = __importDefault(require("../../../commons/APILogger"));
const logger = APILogger_1.default.getInstance();
class LogRequestsMiddlewares {
    static getInstance() {
        if (!this.instance) {
            this.instance = new LogRequestsMiddlewares();
        }
        return this.instance;
    }
    async execute({ request }, next) {
        logger.info('Request received', request);
        await next();
    }
}
exports.default = LogRequestsMiddlewares;

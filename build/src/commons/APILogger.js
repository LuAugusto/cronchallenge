"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = __importDefault(require("pino"));
const ecs_pino_format_1 = __importDefault(require("@elastic/ecs-pino-format"));
class APILogger {
    constructor(logger) {
        this.logger = logger;
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new APILogger((0, pino_1.default)((0, ecs_pino_format_1.default)()));
        }
        return this.instance;
    }
    info(message, info) {
        this.logger.info(info, message);
    }
    error(message, error) {
        this.logger.error(error, message);
    }
}
exports.default = APILogger;

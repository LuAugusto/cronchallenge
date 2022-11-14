"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class Config {
    static getInstance() {
        if (!this.instance) {
            this.instance = new Config();
        }
        return this.instance;
    }
    getValue(key) {
        return process.env[key];
    }
    getValuesAsNumber(key) {
        const asNumber = Number(process.env[key]);
        return isNaN(asNumber) ? undefined : asNumber;
    }
}
exports.default = Config;

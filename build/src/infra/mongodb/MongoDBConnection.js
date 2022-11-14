"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const Config_1 = __importDefault(require("../../commons/config/Config"));
const Contants_1 = require("../../commons/config/Contants");
const MongoDBConnectionError_1 = __importDefault(require("./MongoDBConnectionError"));
const APILogger_1 = __importDefault(require("../../commons/APILogger"));
const config = Config_1.default.getInstance();
const logger = APILogger_1.default.getInstance();
class MongoDBConnection {
    static getInstance() {
        if (!this.instance) {
            this.instance = new MongoDBConnection();
        }
        return this.instance;
    }
    async makeConnection() {
        const url = config.getValue(Contants_1.DB_URL);
        try {
            this.connection = new mongodb_1.MongoClient(`url:${url}`);
            await this.connection.connect();
        }
        catch (error) {
            const connectionError = new MongoDBConnectionError_1.default(error);
            logger.error('Mongodb connection error', connectionError);
            throw connectionError.throwError();
        }
    }
    async getConnection() {
        if (!this.connection) {
            await this.makeConnection();
        }
        return this.connection?.db();
    }
}
exports.default = MongoDBConnection;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const cors_1 = __importDefault(require("@koa/cors"));
const router_1 = __importDefault(require("./http/router"));
const LogRequestsMiddlewares_1 = __importDefault(require("../infra/http/middlewares/LogRequestsMiddlewares"));
const RouterErrorMiddleware_1 = __importDefault(require("../infra/http/middlewares/RouterErrorMiddleware"));
const logRequestMiddleware = LogRequestsMiddlewares_1.default.getInstance();
const routerErrorMiddleware = RouterErrorMiddleware_1.default.getInstance();
class App {
    constructor() {
        this.app = new koa_1.default();
        this.setup();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new App();
        }
        return this.instance;
    }
    setup() {
        this.app.use((0, koa_bodyparser_1.default)());
        this.app.use(logRequestMiddleware.execute);
        //this.app.use(routerErrorMiddleware.execute.bind(routerErrorMiddleware))
        this.app.use((0, cors_1.default)());
        this.app.use(router_1.default.routes());
    }
    getApp() {
        return this.app;
    }
}
exports.default = App;

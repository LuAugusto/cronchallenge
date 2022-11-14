"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const koa2_swagger_ui_1 = require("koa2-swagger-ui");
const yamljs_1 = __importDefault(require("yamljs"));
const DocsEnum_1 = __importDefault(require("./DocsEnum"));
const spec = yamljs_1.default.load('./docs/openapi.yaml');
class DocsRouter {
    constructor() {
        this.router = new router_1.default();
        this.CreateRoutes();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new DocsRouter();
        }
        return this.instance;
    }
    CreateRoutes() {
        this.router.get(DocsEnum_1.default.DOCS, (0, koa2_swagger_ui_1.koaSwagger)({ routePrefix: false, swaggerOptions: { spec } }));
    }
    getRouter() {
        return new router_1.default().use(this.router.routes(), this.router.allowedMethods());
    }
}
exports.default = DocsRouter;

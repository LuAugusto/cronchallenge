"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const routesEnum_1 = __importDefault(require("./routesEnum"));
const FetchProductFiles_1 = __importDefault(require("../useCases/fetchProductFiles/FetchProductFiles"));
const fetchProductFilesController = new FetchProductFiles_1.default();
class ProductRoutes {
    constructor() {
        this.router = new router_1.default();
        this.CreateRoutes();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new ProductRoutes();
        }
        return this.instance;
    }
    CreateRoutes() {
        this.router.get(routesEnum_1.default.FETCH_PRODUCT_FILE, fetchProductFilesController.execute);
    }
    getRouter() {
        return new router_1.default().use(this.router.routes(), this.router.allowedMethods());
    }
}
exports.default = ProductRoutes;

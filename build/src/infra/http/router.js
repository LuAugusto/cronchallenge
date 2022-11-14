"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const DocsRouter_1 = __importDefault(require("./rest/docs/DocsRouter"));
const routes_1 = __importDefault(require("../../modules/Products/infra/routes"));
const router = new router_1.default();
const docsRouter = DocsRouter_1.default.getInstance().getRouter();
const productRoutes = routes_1.default.getInstance().getRouter();
router.prefix('/api');
router.use(docsRouter.routes());
router.use('/product', productRoutes.routes());
exports.default = router;

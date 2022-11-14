"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./infra/app"));
const Contants_1 = require("./commons/config/Contants");
const Config_1 = __importDefault(require("./commons/config/Config"));
const config = Config_1.default.getInstance();
const app = app_1.default.getInstance();
const port = config.getValuesAsNumber(Contants_1.API_PORT);
app.getApp().listen(port, () => console.log(`Server is running on http://localhost:${port}`));

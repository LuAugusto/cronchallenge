"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Method = void 0;
const axios_1 = __importDefault(require("axios"));
const RequesterError_1 = require("./RequesterError");
const APILogger_1 = __importDefault(require("../../commons/APILogger"));
var Method;
(function (Method) {
    Method["DELETE"] = "DELETE";
    Method["POST"] = "POST";
    Method["GET"] = "GET";
    Method["PUT"] = "PUT";
    Method["PATCH"] = "PATCH";
})(Method = exports.Method || (exports.Method = {}));
const logger = APILogger_1.default.getInstance();
function getFormattedQuery(queryStr, key, value) {
    if (typeof value == 'undefined')
        return '';
    const keyValue = `${key}=${value}`;
    if (queryStr)
        return `&${keyValue}`;
    return keyValue;
}
class Requester {
    constructor(url, headers = {}, method = Method.GET) {
        this.url = url;
        this.headers = headers;
        this.method = method;
        this.url = url;
        this.headers = headers;
    }
    // public setQuery<T>(query: T): Requester {
    //   const queryURL = Object.keys(query).reduce(
    //     (queryStr: string, queryKey: string) =>
    //       `${queryStr}${getFormattedQuery(queryStr, queryKey, query[queryKey as keyof T])}`,
    //     ''
    //   )
    //   if (queryURL) {
    //     this.url += `?${queryURL}`
    //   }
    //   return this
    // }
    setBody(body) {
        this.body = JSON.stringify(body);
        return this;
    }
    gehHeaders() {
        return {
            'Content-Type': 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
            responseType: 'buffer',
            ...this.headers,
        };
    }
    async fetch() {
        logger.info(`Requester fetch: ${this.url}`, {
            body: this.body,
            method: this.method,
        });
        try {
            console.log({
                url: this.url,
                headers: this.gehHeaders(),
                data: this.body,
                method: this.method,
            });
            const { data } = await (0, axios_1.default)({
                url: this.url,
                headers: this.gehHeaders(),
                data: this.body,
                method: this.method,
            });
            return data;
        }
        catch (error) {
            const { status, message } = error.toJSON();
            throw new RequesterError_1.RequesterError(status, message);
        }
    }
}
exports.default = Requester;

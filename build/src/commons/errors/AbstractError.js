"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractError extends Error {
    constructor(code, status, message, name = 'Error') {
        super();
        this.code = code;
        this.status = status;
        this.name = name;
        this.message = message;
    }
}
exports.default = AbstractError;

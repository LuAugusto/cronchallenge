"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequesterError = void 0;
class RequesterError extends Error {
    constructor(status, message = 'Requester error') {
        super();
        this.status = status;
        this.message = message;
        this.name = 'Requester Error';
    }
}
exports.RequesterError = RequesterError;

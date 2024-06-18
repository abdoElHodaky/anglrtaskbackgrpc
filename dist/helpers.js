"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genCode = exports.isEmpty = exports.nationalIdvalid = exports.isNumeric = void 0;
function isNumeric(value) {
    return /^\d+$/.test(value);
}
exports.isNumeric = isNumeric;
function nationalIdvalid(value) {
    const message = value;
    const pattern = /^([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$/;
    return (pattern.test(message));
}
exports.nationalIdvalid = nationalIdvalid;
function isEmpty(obj) {
    return Object.values(obj).some(o => o == null || o == "");
}
exports.isEmpty = isEmpty;
function genCode() {
    const { randomInt } = require("crypto");
    return randomInt(0, 1000000).toString().padStart(6, "0");
}
exports.genCode = genCode;

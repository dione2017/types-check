'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var toString = Object.prototype.toString;

function isObject (type) {
  return toString.call(type) === "[object Object]";
}

function isArray (type) {
  return toString.call(type) === "[object Array]";
}

function isFunction (type) {
  return toString.call(type) === "[object Function]";
}

function isString (type) {
  return toString.call(type) === "[object String]";
}

function isNumber (type) {
  return toString.call(type) === "[object Number]";
}

function isBoolean (type) {
  return toString.call(type) === "[object Boolean]";
}

function isRealNaN (type) {
  return isNumber(type) && isNaN(type);
}

function isUndefined (type) {
  return toString.call(type) === "[object Undefined]";
}

function isNull (type) {
  return toString.call(type) === "[object Null]";
}

function isDate (type) {
  return toString.call(type) === "[object Date]";
}

function isRegExp (type) {
  return toString.call(type) === "[object RegExp]";
}

function isBlob (type) {
  return toString.call(type) === "[object Blob]";
}

function isSymbol (type) {
  return toString.call(type) === "[object Symbol]";
}

function isArrayBuffer (type) {
  return toString.call(type) === "[object ArrayBuffer]";
}

function isPromise (type) {
  return toString.call(type) === "[object Promise]";
}

exports.isObject = isObject;
exports.isArray = isArray;
exports.isFunction = isFunction;
exports.isString = isString;
exports.isNumber = isNumber;
exports.isBoolean = isBoolean;
exports.isRealNaN = isRealNaN;
exports.isUndefined = isUndefined;
exports.isNull = isNull;
exports.isDate = isDate;
exports.isRegExp = isRegExp;
exports.isBlob = isBlob;
exports.isSymbol = isSymbol;
exports.isArrayBuffer = isArrayBuffer;
exports.isPromise = isPromise;

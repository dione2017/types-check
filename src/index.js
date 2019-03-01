var toString = Object.prototype.toString;

export function isObject (type) {
  return toString.call(type) === "[object Object]";
}

export function isArray (type) {
  return toString.call(type) === "[object Array]";
}

export function isFunction (type) {
  return toString.call(type) === "[object Function]";
}

export function isString (type) {
  return toString.call(type) === "[object String]";
}

export function isNumber (type) {
  return toString.call(type) === "[object Number]";
}

export function isBoolean (type) {
  return toString.call(type) === "[object Boolean]";
}

export function isRealNaN (type) {
  return isNumber(type) && isNaN(type);
}

export function isUndefined (type) {
  return toString.call(type) === "[object Undefined]";
}

export function isNull (type) {
  return toString.call(type) === "[object Null]";
}

export function isDate (type) {
  return toString.call(type) === "[object Date]";
}

export function isRegExp (type) {
  return toString.call(type) === "[object RegExp]";
}

export function isBlob (type) {
  return toString.call(type) === "[object Blob]";
}

export function isSymbol (type) {
  return toString.call(type) === "[object Symbol]";
}

export function isArrayBuffer (type) {
  return toString.call(type) === "[object ArrayBuffer]";
}

export function isPromise (type) {
  return toString.call(type) === "[object Promise]";
}

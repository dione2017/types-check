import * as typeCheck from "../src/index";

describe("javascript types check", function () {
  it("isObject", function () {
    var obj = {};
    expect(typeCheck.isObject(obj)).toBe(true);
    expect(typeCheck.isArray(obj)).toBe(false);
  });

  it("isArray", function () {
    var array = [];
    expect(typeCheck.isArray(array)).toBe(true);
  });

  it("isFunction", function () {
    var func = function () {};
    expect(typeCheck.isFunction(func)).toBe(true);
  });

  it("isString", function () {
    var str = "test";
    expect(typeCheck.isString(str)).toBe(true);
  });

  it("isNumber", function () {
    var num = 5;
    var str = "5";
    expect(typeCheck.isNumber(num)).toBe(true);
    expect(typeCheck.isNumber(str)).toBe(false);
  });

  it("isBoolean", function () {
    var boolean = true;
    expect(typeCheck.isBoolean(boolean)).toBe(true);
    expect(typeCheck.isBoolean("true")).toBe(false);
  });

  it("isRealNaN", function () {
    expect(typeCheck.isRealNaN(NaN)).toBe(true);
    expect(typeCheck.isRealNaN("5f")).toBe(false);
  });

  it("isUndefined", function () {
    var a;
    expect(typeCheck.isUndefined(a)).toBe(true);
    expect(typeCheck.isUndefined(undefined)).toBe(true);
    expect(typeCheck.isUndefined("undefined")).toBe(false);
  });

  it("isNull", function () {
    var a = null;
    expect(typeCheck.isNull(a)).toBe(true);
    expect(typeCheck.isNull({})).toBe(false);
    expect(typeCheck.isNull(undefined)).toBe(false);
  });

  it("isDate", function () {
    var a = new Date();
    expect(typeCheck.isDate(a)).toBe(true);
  });

  it("isRegExp", function () {
    var a = new RegExp();
    var b = /\d/gi;
    expect(typeCheck.isRegExp(a)).toBe(true);
    expect(typeCheck.isRegExp(b)).toBe(true);
  });

  it("isBlob", function () {
    var a = new Blob(["test"], { type: "text/plain" });
    var b = {};
    expect(typeCheck.isBlob(a)).toBe(true);
    expect(typeCheck.isBlob(b)).toBe(false);
  });

  it("isSymbol", function () {
    var a = Symbol("apple");
    var b = "apple";
    expect(typeCheck.isSymbol(a)).toBe(true);
    expect(typeCheck.isSymbol(b)).toBe(false);
  });

  it("isArrayBuffer", function () {
    var a = new ArrayBuffer(["ArrayBuffer"]);
    var b = [];
    expect(typeCheck.isArrayBuffer(a)).toBe(true);
    expect(typeCheck.isArrayBuffer(b)).toBe(false);
  });

  it("isPromise", function () {
    var a = new Promise(function () {});
    expect(typeCheck.isPromise(a)).toBe(true);
  });
});

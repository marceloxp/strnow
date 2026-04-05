var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/strnow.js
var strnow_exports = {};
__export(strnow_exports, {
  default: () => strnow_default,
  get: () => get
});
module.exports = __toCommonJS(strnow_exports);
var import_date_and_time = require("date-and-time");
var get = () => {
  return (0, import_date_and_time.format)(/* @__PURE__ */ new Date(), "YYYY-MM-DD HH:mm:ss");
};
var strnow_default = {
  get
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  get
});

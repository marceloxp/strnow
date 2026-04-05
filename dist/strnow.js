// src/strnow.js
import { format } from "date-and-time";
var get = () => {
  return format(/* @__PURE__ */ new Date(), "YYYY-MM-DD HH:mm:ss");
};
var strnow_default = {
  get
};
export {
  strnow_default as default,
  get
};

var l = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? l(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    p.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      c.call(o, r) && t(e, r, o[r]);
  return e;
}, s = (e, o) => f(e, i(o));
import d, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import u from "../defs/CloudSlash.mjs";
const w = h((e, o) => /* @__PURE__ */ d.createElement(n, s(m({ ref: o }, e), { weights: u })));
w.displayName = "CloudSlash";
export {
  w as CloudSlash
};
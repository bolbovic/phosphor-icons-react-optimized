var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && t(r, o, e[o]);
  if (p)
    for (var o of p(e))
      R.call(e, o) && t(r, o, e[o]);
  return r;
}, a = (r, e) => i(r, s(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Pepper.mjs";
const P = l((r, e) => /* @__PURE__ */ d.createElement(n, a(m({ ref: e }, r), { weights: w })));
P.displayName = "Pepper";
export {
  P as Pepper
};
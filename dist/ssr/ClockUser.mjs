var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      l.call(e, o) && m(r, o, e[o]);
  return r;
}, s = (r, e) => f(r, i(e));
import R, { forwardRef as d } from "react";
import k from "../lib/SSRBase.mjs";
import n from "../defs/ClockUser.mjs";
const w = d((r, e) => /* @__PURE__ */ R.createElement(k, s(a({ ref: e }, r), { weights: n })));
w.displayName = "ClockUser";
export {
  w as ClockUser
};

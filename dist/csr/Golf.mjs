var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      l.call(o, r) && m(e, r, o[r]);
  return e;
}, f = (e, o) => p(e, s(o));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import G from "../defs/Golf.mjs";
const I = d((e, o) => /* @__PURE__ */ n.createElement(w, f(a({ ref: o }, e), { weights: G })));
I.displayName = "Golf";
export {
  I as Golf
};

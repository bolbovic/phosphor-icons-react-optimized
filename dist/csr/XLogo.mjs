var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      g.call(o, r) && m(e, r, o[r]);
  return e;
}, f = (e, o) => p(e, s(o));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/XLogo.mjs";
const I = d((e, o) => /* @__PURE__ */ n.createElement(l, f(a({ ref: o }, e), { weights: w })));
I.displayName = "XLogo";
export {
  I as XLogo
};
var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    n.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      c.call(e, a) && t(r, a, e[a]);
  return r;
}, i = (r, e) => f(r, s(e));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/MapPinArea.mjs";
const A = d((r, e) => /* @__PURE__ */ R.createElement(l, i(m({ ref: e }, r), { weights: w })));
A.displayName = "MapPinArea";
export {
  A as MapPinArea
};

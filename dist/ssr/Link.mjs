var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    n.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      c.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => p(r, s(e));
import R, { forwardRef as d } from "react";
import k from "../lib/SSRBase.mjs";
import l from "../defs/Link.mjs";
const w = d((r, e) => /* @__PURE__ */ R.createElement(k, i(a({ ref: e }, r), { weights: l })));
w.displayName = "Link";
export {
  w as Link
};
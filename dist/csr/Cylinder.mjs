var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      c.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => n(r, p(e));
import d, { forwardRef as l } from "react";
import y from "../lib/IconBase.mjs";
import w from "../defs/Cylinder.mjs";
const C = l((r, e) => /* @__PURE__ */ d.createElement(y, i(a({ ref: e }, r), { weights: w })));
C.displayName = "Cylinder";
export {
  C as Cylinder
};
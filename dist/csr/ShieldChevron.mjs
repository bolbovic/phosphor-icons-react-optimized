var f = Object.defineProperty, h = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      s.call(e, r) && m(o, r, e[r]);
  return o;
}, i = (o, e) => h(o, n(e));
import c, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import v from "../defs/ShieldChevron.mjs";
const w = d((o, e) => /* @__PURE__ */ c.createElement(l, i(a({ ref: e }, o), { weights: v })));
w.displayName = "ShieldChevron";
export {
  w as ShieldChevron
};
var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      d.call(e, r) && m(o, r, e[r]);
  return o;
}, c = (o, e) => i(o, p(e));
import l, { forwardRef as n } from "react";
import x from "../lib/IconBase.mjs";
import E from "../defs/Exclude.mjs";
const u = n((o, e) => /* @__PURE__ */ l.createElement(x, c(a({ ref: e }, o), { weights: E })));
u.displayName = "Exclude";
export {
  u as Exclude
};
var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
var a = (r, e, m) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    c.call(e, m) && a(r, m, e[m]);
  if (o)
    for (var m of o(e))
      u.call(e, m) && a(r, m, e[m]);
  return r;
}, i = (r, e) => p(r, s(e));
import n, { forwardRef as N } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/NumberSquareFive.mjs";
const l = N((r, e) => /* @__PURE__ */ n.createElement(b, i(t({ ref: e }, r), { weights: d })));
l.displayName = "NumberSquareFive";
export {
  l as NumberSquareFive
};
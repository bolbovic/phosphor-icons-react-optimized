var s = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    h.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      p.call(t, r) && o(e, r, t[r]);
  return e;
}, i = (e, t) => l(e, f(t));
import c, { forwardRef as g } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/Flashlight.mjs";
const n = g((e, t) => /* @__PURE__ */ c.createElement(R, i(m({ ref: t }, e), { weights: d })));
n.displayName = "Flashlight";
export {
  n as Flashlight
};
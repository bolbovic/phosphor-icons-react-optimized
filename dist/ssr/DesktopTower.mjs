var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    w.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      c.call(e, r) && m(o, r, e[r]);
  return o;
}, p = (o, e) => f(o, i(e));
import R, { forwardRef as d } from "react";
import k from "../lib/SSRBase.mjs";
import l from "../defs/DesktopTower.mjs";
const n = d((o, e) => /* @__PURE__ */ R.createElement(k, p(a({ ref: e }, o), { weights: l })));
n.displayName = "DesktopTower";
export {
  n as DesktopTower
};
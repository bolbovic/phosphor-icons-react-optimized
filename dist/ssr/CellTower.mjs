var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      w.call(e, o) && m(r, o, e[o]);
  return r;
}, l = (r, e) => i(r, p(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/CellTower.mjs";
const C = R((r, e) => /* @__PURE__ */ c.createElement(d, l(a({ ref: e }, r), { weights: n })));
C.displayName = "CellTower";
export {
  C as CellTower
};

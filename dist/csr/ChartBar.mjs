var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, r, t) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[r] = t, m = (a, r) => {
  for (var t in r || (r = {}))
    c.call(r, t) && o(a, t, r[t]);
  if (e)
    for (var t of e(r))
      h.call(r, t) && o(a, t, r[t]);
  return a;
}, f = (a, r) => p(a, s(r));
import n, { forwardRef as B } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/ChartBar.mjs";
const w = B((a, r) => /* @__PURE__ */ n.createElement(d, f(m({ ref: r }, a), { weights: l })));
w.displayName = "ChartBar";
export {
  w as ChartBar
};
var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var a = (o, t, e) => t in o ? f(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e, m = (o, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && a(o, e, t[e]);
  if (r)
    for (var e of r(t))
      h.call(t, e) && a(o, e, t[e]);
  return o;
}, s = (o, t) => i(o, p(t));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/ChatDots.mjs";
const w = d((o, t) => /* @__PURE__ */ R.createElement(l, s(m({ ref: t }, o), { weights: n })));
w.displayName = "ChatDots";
export {
  w as ChatDots
};
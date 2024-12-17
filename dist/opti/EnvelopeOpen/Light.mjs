var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, L = (e, a) => {
  for (var t in a || (a = {}))
    i.call(a, t) && o(e, t, a[t]);
  if (r)
    for (var t of r(a))
      p.call(a, t) && o(e, t, a[t]);
  return e;
};
var Z = (e, a) => {
  var t = {};
  for (var m in e)
    i.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      a.indexOf(m) < 0 && p.call(e, m) && (t[m] = e[m]);
  return t;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const V = h((m, t) => {
  var l = m, { children: e } = l, a = Z(l, ["children"]);
  return /* @__PURE__ */ c.createElement(s, L({ ref: t }, a), e, /* @__PURE__ */ c.createElement("path", { d: "M227.33,91l-96-64a6,6,0,0,0-6.66,0l-96,64A6,6,0,0,0,26,96V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V96A6,6,0,0,0,227.33,91ZM100.18,152,38,195.9V107.65Zm12.27,6h31.1l62.29,44H50.16Zm43.37-6L218,107.65V195.9ZM128,39.21l85.43,57L143.53,146H112.47L42.57,96.17Z" }));
});
V.displayName = "Light";
export {
  V as Light
};

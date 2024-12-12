var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && H(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && H(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const V = h((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M243.61,174.27A4,4,0,0,0,240,172H140V140h76a4,4,0,0,0,3-6.69L140,46.45V8a4,4,0,0,0-7.1-2.52l-104,128A4,4,0,0,0,32,140H132v32H16a4,4,0,0,0-3.12,6.5l29.59,37a12,12,0,0,0,9.37,4.5H204.16a12,12,0,0,0,9.37-4.5l29.59-37A4,4,0,0,0,243.61,174.27ZM207,132H140V58.35ZM40.4,132,132,19.27V132Zm166.88,78.5a4,4,0,0,1-3.12,1.5H51.84a4,4,0,0,1-3.12-1.5L24.32,180H231.68Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};

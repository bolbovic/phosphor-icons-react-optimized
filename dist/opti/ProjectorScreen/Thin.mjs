var c = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (V)
    for (var e of V(t))
      h.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    H.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && V)
    for (var r of V(a))
      t.indexOf(r) < 0 && h.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const A = f((r, e) => {
  var m = r, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ n.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M216,76a12,12,0,0,0,12-12V48a12,12,0,0,0-12-12H40A12,12,0,0,0,28,48V64A12,12,0,0,0,40,76h4V180H32a4,4,0,0,0,0,8h92v24.4a20,20,0,1,0,8,0V188h92a4,4,0,0,0,0-8H212V76ZM140,232a12,12,0,1,1-12-12A12,12,0,0,1,140,232ZM36,64V48a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4V64a4,4,0,0,1-4,4H40A4,4,0,0,1,36,64ZM204,180H52V76H204Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};

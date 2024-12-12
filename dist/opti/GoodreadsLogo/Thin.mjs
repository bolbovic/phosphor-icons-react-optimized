var V = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(h, n({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M184,28a4,4,0,0,0-4,4V58.13A60,60,0,0,0,68,88v24a60,60,0,0,0,112,29.87V168a52.06,52.06,0,0,1-52,52c-17.72,0-35.28-8.75-44.72-22.29a4,4,0,0,0-6.56,4.58C87.61,217.91,107.74,228,128,228a60.07,60.07,0,0,0,60-60V32A4,4,0,0,0,184,28ZM128,164a52.06,52.06,0,0,1-52-52V88a52,52,0,0,1,104,0v24A52.06,52.06,0,0,1,128,164Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};

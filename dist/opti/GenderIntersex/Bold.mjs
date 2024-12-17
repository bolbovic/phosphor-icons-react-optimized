var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    d.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    d.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && l.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const A = i((o, e) => {
  var m = o, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(s, V({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M208,20H168a12,12,0,0,0,0,24h11L163.36,59.67A68,68,0,1,0,108,178.92V192H88a12,12,0,0,0,0,24h20v16a12,12,0,0,0,24,0V216h20a12,12,0,0,0,0-24H132V178.92A67.93,67.93,0,0,0,178.9,78.08L196,61V72a12,12,0,0,0,24,0V32A12,12,0,0,0,208,20ZM120,156a44,44,0,1,1,44-44A44.05,44.05,0,0,1,120,156Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};

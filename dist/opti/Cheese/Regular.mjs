var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const d = Z((r, e) => {
  var l = r, { children: a } = l, t = h(l, ["children"]);
  return /* @__PURE__ */ s.createElement(c, f({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M184,32a7.81,7.81,0,0,0-2.3.34l-160,48h0A8,8,0,0,0,16,88v24a8,8,0,0,0,8,8h8a16.08,16.08,0,0,1,16,15.69A15.6,15.6,0,0,1,43.42,147a16.87,16.87,0,0,1-12,5.05H24a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8H224a16,16,0,0,0,16-16V88A56.06,56.06,0,0,0,184,32Zm1.12,16a40.06,40.06,0,0,1,38.07,32H78.51ZM192,104a24,24,0,1,1-46.62-8h45.24A23.86,23.86,0,0,1,192,104ZM88,184a24,24,0,0,1,48,0Zm136,0H152a40,40,0,0,0-80,0H32V168a33,33,0,0,0,22.84-9.85A31.39,31.39,0,0,0,64,135.38,32.15,32.15,0,0,0,32,104V96h96.81a40,40,0,1,0,78.38,0H224Z" }));
});
d.displayName = "Regular";
export {
  d as Regular,
  d as default
};

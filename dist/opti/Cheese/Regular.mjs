var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var l = (a, r, e) => r in a ? c(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, h = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && l(a, e, r[e]);
  if (m)
    for (var e of m(r))
      H.call(r, e) && l(a, e, r[e]);
  return a;
};
var A = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && H.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var o = t, { children: a } = o, r = A(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, h({ ref: e }, r), a, /* @__PURE__ */ Z.createElement("path", { d: "M184,32a7.81,7.81,0,0,0-2.3.34l-160,48h0A8,8,0,0,0,16,88v24a8,8,0,0,0,8,8h8a16.08,16.08,0,0,1,16,15.69A15.6,15.6,0,0,1,43.42,147a16.87,16.87,0,0,1-12,5.05H24a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8H224a16,16,0,0,0,16-16V88A56.06,56.06,0,0,0,184,32Zm1.12,16a40.06,40.06,0,0,1,38.07,32H78.51ZM192,104a24,24,0,1,1-46.62-8h45.24A23.86,23.86,0,0,1,192,104ZM88,184a24,24,0,0,1,48,0Zm136,0H152a40,40,0,0,0-80,0H32V168a33,33,0,0,0,22.84-9.85A31.39,31.39,0,0,0,64,135.38,32.15,32.15,0,0,0,32,104V96h96.81a40,40,0,1,0,78.38,0H224Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};

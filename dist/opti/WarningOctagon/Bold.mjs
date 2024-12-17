var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      L.call(t, e) && l(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && L.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = i((o, e) => {
  var m = o, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M116,132V80a12,12,0,0,1,24,0v52a12,12,0,0,1-24,0ZM236,91.55v72.9a19.86,19.86,0,0,1-5.86,14.14l-51.55,51.55A19.85,19.85,0,0,1,164.45,236H91.55a19.85,19.85,0,0,1-14.14-5.86L25.86,178.59A19.86,19.86,0,0,1,20,164.45V91.55a19.86,19.86,0,0,1,5.86-14.14L77.41,25.86A19.85,19.85,0,0,1,91.55,20h72.9a19.85,19.85,0,0,1,14.14,5.86l51.55,51.55A19.86,19.86,0,0,1,236,91.55Zm-24,1.66L162.79,44H93.21L44,93.21v69.58L93.21,212h69.58L212,162.79ZM128,156a16,16,0,1,0,16,16A16,16,0,0,0,128,156Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};

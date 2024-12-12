var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import Z, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((l, e) => {
  var m = l, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, n({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M235.27,152.07,216.19,99.85a12,12,0,0,0-15.34-7.13l-74.3,26.92,13.27-75.83a12,12,0,0,0-9.68-13.9L75.47,20.19a11.75,11.75,0,0,0-8.89,2,11.9,11.9,0,0,0-4.94,7.77l-25,143.13A40,40,0,0,0,68.8,219.39,42.68,42.68,0,0,0,76,220H224a12,12,0,0,0,12-12V156.19A14,14,0,0,0,235.27,152.07Zm-31.7-51.83a4,4,0,0,1,5.1,2.36l19.09,52.21a3.9,3.9,0,0,1-.13,3,3.94,3.94,0,0,1-2.24,2L108.78,202.11a40,40,0,0,0,6-15.17L125,128.73ZM93.75,206.29a31.25,31.25,0,0,1-23.55,5.22,32,32,0,0,1-25.71-37.08l25-143.13a4,4,0,0,1,1.64-2.59A3.85,3.85,0,0,1,73.38,28a4,4,0,0,1,.69.06l54.67,9.73a4,4,0,0,1,3.2,4.64l-25,143.13h0A31.79,31.79,0,0,1,93.75,206.29ZM228,208a4,4,0,0,1-4,4H105l123-44.59ZM84,180a8,8,0,1,1-8-8A8,8,0,0,1,84,180Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};

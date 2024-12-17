var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      c.call(t, e) && l(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import i, { forwardRef as L } from "react";
import n from "../../lib/OptiBase.mjs";
const A = L((o, e) => {
  var m = o, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(n, d({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M234.7,29.3a31.83,31.83,0,0,0-45,0L15.52,203.56a12,12,0,0,0,5.78,20.19A164.85,164.85,0,0,0,58.42,228c33.71,0,67.41-10.42,99.1-30.87,32.32-20.86,51.16-44.7,51.94-45.7a12,12,0,0,0-1-15.89L191,118,234.7,74.29A31.86,31.86,0,0,0,234.7,29.3ZM143.87,177.36C113,197.12,81.28,206,49.28,203.74L146,107l19.5,19.51,0,0h0l18,18A216.69,216.69,0,0,1,143.87,177.36Zm73.86-120L174,101,163,90,206.7,46.28a7.8,7.8,0,0,1,11,11Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};

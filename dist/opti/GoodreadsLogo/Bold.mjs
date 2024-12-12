var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && p(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import i, { forwardRef as n } from "react";
import v from "../../lib/OptiBase.mjs";
const A = n((o, e) => {
  var m = o, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(v, l({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M184,20a12,12,0,0,0-12,12v4.22A67.94,67.94,0,0,0,60,88v24a67.94,67.94,0,0,0,112,51.78V168a44.05,44.05,0,0,1-44,44c-15,0-30.29-7.58-38.16-18.87a12,12,0,0,0-19.68,13.74C82.5,224.56,105.21,236,128,236a68.07,68.07,0,0,0,68-68V32A12,12,0,0,0,184,20ZM128,156a44.05,44.05,0,0,1-44-44V88a44,44,0,0,1,88,0v24A44.05,44.05,0,0,1,128,156Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};

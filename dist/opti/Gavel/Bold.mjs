var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, Z = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && r(a, e, l[e]);
  if (m)
    for (var e of m(l))
      d.call(l, e) && r(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && d.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const B = s((t, e) => {
  var o = t, { children: a } = o, l = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(n, Z({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M246.14,113.86l-16-16a20,20,0,0,0-23.06-3.75l-45.2-45.2a20,20,0,0,0-3.74-23.06l-16-16a20,20,0,0,0-28.28,0l-64,64a20,20,0,0,0,0,28.28l16,16a20,20,0,0,0,23,3.79L29.36,181.38a32,32,0,0,0,45.26,45.26L134,167.21a20,20,0,0,0,3.81,22.94l16,16a20,20,0,0,0,28.29,0l64-64a20,20,0,0,0,0-28.29ZM80,98.34,69.64,88,128,29.65,138.34,40ZM57.64,209.67a8,8,0,0,1-11.31-11.32l59.52-59.52,11.31,11.32Zm92.7-60.29-43.72-43.72,39-39,43.72,43.72Zm17.65,37L157.65,176,216,117.66,226.34,128Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
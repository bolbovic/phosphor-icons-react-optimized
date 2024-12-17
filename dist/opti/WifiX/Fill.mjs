var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? A(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as L } from "react";
import d from "../../lib/OptiBase.mjs";
const n = L((t, e) => {
  var m = t, { children: a } = m, l = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(d, c({ ref: e }, l), a, /* @__PURE__ */ s.createElement("path", { d: "M229.66,98.34a8,8,0,0,1-11.32,11.32L200,91.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L188.69,80,170.34,61.66a8,8,0,0,1,11.32-11.32L200,68.69l18.34-18.35a8,8,0,0,1,11.32,11.32L211.31,80ZM206.85,131a32.75,32.75,0,0,1-4.15-3.14,4,4,0,0,0-5.37,0,32,32,0,0,1-45.18-45.18,4,4,0,0,0,0-5.34A32,32,0,0,1,149,38.91a4,4,0,0,0-3.11-6.08Q137,32,128,32A186.67,186.67,0,0,0,14.28,70.1,15.93,15.93,0,0,0,8.11,80.91,15.65,15.65,0,0,0,11.65,92.8l104,125.43A15.93,15.93,0,0,0,128,224h0a15.93,15.93,0,0,0,12.31-5.77l67.45-81.31A4,4,0,0,0,206.85,131Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};

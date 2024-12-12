var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var m = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, d = (a, e) => {
  for (var l in e || (e = {}))
    p.call(e, l) && m(a, l, e[l]);
  if (o)
    for (var l of o(e))
      Z.call(e, l) && m(a, l, e[l]);
  return a;
};
var M = (a, e) => {
  var l = {};
  for (var t in a)
    p.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      e.indexOf(t) < 0 && Z.call(a, t) && (l[t] = a[t]);
  return l;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const A = i((t, l) => {
  var r = t, { children: a } = r, e = M(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: l }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M56.88,31.93A12,12,0,1,0,39.12,48.07l45.64,50.2-50.9,50.9A19.86,19.86,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.85,19.85,0,0,0,14.14-5.86l47.43-47.42,44.87,49.35a12,12,0,1,0,17.76-16.14Zm54.55,95.68L72,167,61,156l40-39.95ZM52,181l23,23H52ZM100,195,89,184l38.62-38.62,10.51,11.56ZM230.15,70.54,185.46,25.86a20,20,0,0,0-28.28,0l-36,36a12,12,0,0,0,14.55,18.82L147.08,92A12,12,0,0,0,164,108.93L175,120l-.54.53a12,12,0,1,0,17,17l38.67-38.67A20,20,0,0,0,230.15,70.54ZM192,103,153,64l18.34-18.34,39,39Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};

var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable;
var r = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, p = (a, e) => {
  for (var l in e || (e = {}))
    L.call(e, l) && r(a, l, e[l]);
  if (t)
    for (var l of t(e))
      m.call(e, l) && r(a, l, e[l]);
  return a;
};
var d = (a, e) => {
  var l = {};
  for (var A in a)
    L.call(a, A) && e.indexOf(A) < 0 && (l[A] = a[A]);
  if (a != null && t)
    for (var A of t(a))
      e.indexOf(A) < 0 && m.call(a, A) && (l[A] = a[A]);
  return l;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const H = i((A, l) => {
  var o = A, { children: a } = o, e = d(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: l }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M232,116H219.22A91.1,91.1,0,0,0,213,92.79l11.08-6.4a12,12,0,1,0-12-20.78L201,72a92.85,92.85,0,0,0-17-17l6.41-11.11a12,12,0,1,0-20.78-12L163.21,43A91.1,91.1,0,0,0,140,36.78V24a12,12,0,0,0-24,0V36.78A91.1,91.1,0,0,0,92.79,43l-6.4-11.08a12,12,0,0,0-20.78,12L72,55A92.85,92.85,0,0,0,55,72L43.93,65.61a12,12,0,0,0-12,20.78L43,92.79A91.1,91.1,0,0,0,36.78,116H24a12,12,0,0,0,0,24H36.78A91.1,91.1,0,0,0,43,163.21l-11.08,6.4a12,12,0,1,0,12,20.78L55,184a92.85,92.85,0,0,0,17,17l-6.41,11.11a12,12,0,1,0,20.78,12L92.79,213A91.1,91.1,0,0,0,116,219.22V232a12,12,0,0,0,24,0V219.22A91.1,91.1,0,0,0,163.21,213l6.4,11.08a12,12,0,0,0,20.78-12L184,201a92.85,92.85,0,0,0,17-17l11.11,6.41a12,12,0,1,0,12-20.78L213,163.21A91.1,91.1,0,0,0,219.22,140H232a12,12,0,0,0,0-24ZM128,60a68.1,68.1,0,0,1,66.92,56h-60l-30-52A67.61,67.61,0,0,1,128,60ZM60,128A67.9,67.9,0,0,1,84.16,76.07l30,51.93-30,51.93A67.9,67.9,0,0,1,60,128Zm68,68a67.61,67.61,0,0,1-23.07-4l30-52h60A68.1,68.1,0,0,1,128,196Z" }));
});
H.displayName = "Bold";
export {
  H as Bold
};

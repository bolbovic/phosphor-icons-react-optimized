var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var l in a)
    c.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const h = s((l, e) => {
  var r = l, { children: a } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ f.createElement(V, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M203.91,230.51a12,12,0,0,1-10.42,13.4A12.87,12.87,0,0,1,192,244a12,12,0,0,1-11.89-10.51l-8-64a12,12,0,0,1,4.7-11.08,68.26,68.26,0,0,0,27.19-56c0-.81-.07-1.6-.11-2.4H189.62l-23.1,27.72A23.69,23.69,0,0,1,168,136a24.07,24.07,0,1,1-19.92-23.64l26.7-32A12,12,0,0,1,184,76h13.91a68.19,68.19,0,0,0-58.22-39.9Q137.85,36,136,36V55.23a24,24,0,1,1-24,0V40.34A68.11,68.11,0,0,0,68,104a12,12,0,0,1-1.36,5.54L45.51,150.15,69,160.9a12,12,0,0,1,7,10.91V204h44a12,12,0,0,1,0,24H72a20,20,0,0,1-20-20V179.51l-20.57-9.42a3.26,3.26,0,0,1-.38-.18,20,20,0,0,1-9.43-25.76,7.49,7.49,0,0,1,.38-.81l22-42.37A92,92,0,0,1,141,12.13c47.7,2.51,85.93,41.92,87,89.71a92.33,92.33,0,0,1-31.25,71.26Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
var f = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && r(a, e, t[e]);
  if (c)
    for (var e of c(t))
      p.call(t, e) && r(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var A in a)
    m.call(a, A) && t.indexOf(A) < 0 && (e[A] = a[A]);
  if (a != null && c)
    for (var A of c(a))
      t.indexOf(A) < 0 && p.call(a, A) && (e[A] = a[A]);
  return e;
};
import s, { forwardRef as i } from "react";
import h from "../../lib/OptiBase.mjs";
const n = i((A, e) => {
  var o = A, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ s.createElement(h, d({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M244,28a12,12,0,0,0-12,12A48.71,48.71,0,0,1,228.67,56C224.23,66.64,217.43,68,212,68c-8.81,0-14.91-8.5-23.91-22.49C178.5,30.58,166.55,12,144,12c-18.14,0-32,9.78-39.14,27.54A68.26,68.26,0,0,0,101.27,52H88A20,20,0,0,0,68,72v7.18A92,92,0,0,0,112,252h1.66A92,92,0,0,0,156,79.18V72a20,20,0,0,0-20-20H125.93a40.89,40.89,0,0,1,1.4-4c4.44-10.62,11.24-12,16.67-12,8.81,0,14.91,8.5,23.91,22.49C177.5,73.42,189.45,92,212,92c18.14,0,32-9.78,39.14-27.54A71.91,71.91,0,0,0,256,40,12,12,0,0,0,244,28ZM139.2,97.65a68,68,0,1,1-54.4,0,12,12,0,0,0,7.2-11V76h19.5c.17,0,.33,0,.5,0s.34,0,.51,0H132V86.66A12,12,0,0,0,139.2,97.65ZM111.45,201.76A12,12,0,0,1,100,210.17a12.2,12.2,0,0,1-3.6-.55A51.79,51.79,0,0,1,60,160a12,12,0,0,1,24,0,27.89,27.89,0,0,0,19.6,26.72A12,12,0,0,1,111.45,201.76Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
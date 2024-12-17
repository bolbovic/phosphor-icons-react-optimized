var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && l(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && A.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = i((o, e) => {
  var m = o, { children: a } = m, t = d(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, H({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M241.55,64.74A12,12,0,0,0,232,60H60.23L51.56,28.79A12,12,0,0,0,40,20H20a12,12,0,0,0,0,24H30.88l34.3,123.49a28.09,28.09,0,0,0,27,20.51H191a28.09,28.09,0,0,0,27-20.51l25.63-92.28A12,12,0,0,0,241.55,64.74ZM194.8,161.07A4,4,0,0,1,191,164H92.16a4,4,0,0,1-3.85-2.93L66.9,84H216.21ZM108,220a20,20,0,1,1-20-20A20,20,0,0,1,108,220Zm104,0a20,20,0,1,1-20-20A20,20,0,0,1,212,220Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};

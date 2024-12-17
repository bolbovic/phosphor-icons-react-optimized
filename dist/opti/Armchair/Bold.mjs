var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && m(a, e, t[e]);
  return a;
};
var l = (a, t) => {
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
const v = i((o, e) => {
  var V = o, { children: a } = V, t = l(V, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M220,78.53V72a44.05,44.05,0,0,0-44-44H80A44.05,44.05,0,0,0,36,72v6.53a52,52,0,0,0,0,99V200a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V177.51a52,52,0,0,0,0-99ZM80,52h96a20,20,0,0,1,20,20v4.62A52.09,52.09,0,0,0,152.17,124H103.83A52.09,52.09,0,0,0,60,76.62V72A20,20,0,0,1,80,52ZM206.81,155.86A12,12,0,0,0,196,167.8V196H60V167.8a12,12,0,0,0-10.81-11.94A28,28,0,1,1,80,128v36a12,12,0,0,0,24,0V148h48v16a12,12,0,0,0,24,0V128a28,28,0,1,1,30.81,27.86Z" }));
});
v.displayName = "Bold";
export {
  v as Bold
};

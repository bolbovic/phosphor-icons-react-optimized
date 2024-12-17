var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && h(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = V(o, ["children"]);
  return /* @__PURE__ */ c.createElement(A, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M208,28H168a4,4,0,0,0,0,8h30.34L163.55,70.79A60,60,0,1,0,116,171.85V196H88a4,4,0,0,0,0,8h28v28a4,4,0,0,0,8,0V204h28a4,4,0,0,0,0-8H124V171.85A59.94,59.94,0,0,0,168.68,77L204,41.66V72a4,4,0,0,0,8,0V32A4,4,0,0,0,208,28ZM120,164a52,52,0,1,1,52-52A52.06,52.06,0,0,1,120,164Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};

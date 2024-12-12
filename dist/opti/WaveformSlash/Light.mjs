var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var V in a)
    i.call(a, V) && t.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && m)
    for (var V of m(a))
      t.indexOf(V) < 0 && p.call(a, V) && (e[V] = a[V]);
  return e;
};
import c, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const v = l((V, e) => {
  var r = V, { children: a } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, Z({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M54,96v64a6,6,0,0,1-12,0V96a6,6,0,0,1,12,0ZM52.44,36A6,6,0,0,0,43.56,44L82,86.32V224a6,6,0,0,0,12,0V99.52l28,30.8V192a6,6,0,0,0,12,0V143.52L203.56,220a6,6,0,0,0,8.88-8.08ZM88,42.43a6,6,0,0,0,6-6V32a6,6,0,0,0-12,0v4.43A6,6,0,0,0,88,42.43Zm40,44a6,6,0,0,0,6-6V64a6,6,0,0,0-12,0V80.43A6,6,0,0,0,128,86.43Zm40,44a6,6,0,0,0,6-6V96a6,6,0,0,0-12,0v28.43A6,6,0,0,0,168,130.43ZM208,74a6,6,0,0,0-6,6v88.43a6,6,0,0,0,12,0V80A6,6,0,0,0,208,74Z" }));
});
v.displayName = "Light";
export {
  v as Light
};

var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const d = h((r, e) => {
  var o = r, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M117.17,157.17l96-96a4,4,0,1,1,5.66,5.66l-96,96a4,4,0,0,1-5.66-5.66ZM128,84a67.94,67.94,0,0,1,21.72,3.54A4,4,0,1,0,152.27,80,76,76,0,0,0,52,152a79.27,79.27,0,0,0,.46,8.44,4,4,0,0,0,4,3.56l.45,0a4,4,0,0,0,3.54-4.42A68,68,0,0,1,128,84Zm96.17,18.82a4,4,0,1,0-7.11,3.64,100.34,100.34,0,0,1,5.26,78.84,4,4,0,0,1-3.79,2.7H37.46a4.07,4.07,0,0,1-3.8-2.74A100.05,100.05,0,0,1,173.54,62.94a4,4,0,1,0,3.64-7.12A107,107,0,0,0,129,44h-1A108.06,108.06,0,0,0,26.12,187.92,12.07,12.07,0,0,0,37.46,196H218.53a12,12,0,0,0,11.34-8,108.31,108.31,0,0,0-5.7-85.14Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};

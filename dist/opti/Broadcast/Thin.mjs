var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      Z.call(t, e) && i(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var o = m, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ c.createElement(M, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M128,92a36,36,0,1,0,36,36A36,36,0,0,0,128,92Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,156Zm76-28a75.74,75.74,0,0,1-19.35,50.67,4,4,0,0,1-6-5.34,67.92,67.92,0,0,0,0-90.66,4,4,0,0,1,6-5.34A75.74,75.74,0,0,1,204,128ZM65.34,101.53a67.92,67.92,0,0,0,12,71.8,4,4,0,0,1-6,5.34,75.93,75.93,0,0,1,0-101.34,4,4,0,1,1,6,5.34A68,68,0,0,0,65.34,101.53ZM244,128a115.68,115.68,0,0,1-33.14,81.18,4,4,0,0,1-5.72-5.6,107.89,107.89,0,0,0,0-151.16,4,4,0,0,1,5.72-5.6A115.68,115.68,0,0,1,244,128ZM50.86,203.58a4,4,0,0,1-5.72,5.6,115.91,115.91,0,0,1,0-162.36,4,4,0,1,1,5.72,5.6,107.89,107.89,0,0,0,0,151.16Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};

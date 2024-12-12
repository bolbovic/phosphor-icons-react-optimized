var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var l = m, { children: a } = l, t = Z(l, ["children"]);
  return /* @__PURE__ */ c.createElement(L, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M194.4,172.8,134.67,128,194.4,83.2a4,4,0,0,0,0-6.4l-64-48A4,4,0,0,0,124,32v88L66.4,76.8a4,4,0,0,0-4.8,6.4L121.33,128,61.6,172.8a4,4,0,0,0,4.8,6.4L124,136v88a4,4,0,0,0,6.4,3.2l64-48a4,4,0,0,0,0-6.4ZM132,40l53.33,40L132,120Zm0,176V136l53.33,40ZM60,136a8,8,0,1,1,8-8A8,8,0,0,1,60,136Zm152-8a8,8,0,1,1-8-8A8,8,0,0,1,212,128Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};

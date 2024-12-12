var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && o(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var V in a)
    i.call(a, V) && t.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && r)
    for (var V of r(a))
      t.indexOf(V) < 0 && l.call(a, V) && (e[V] = a[V]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const A = h((V, e) => {
  var m = V, { children: a } = m, t = H(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M184,18H72A14,14,0,0,0,58,32V77.33a14,14,0,0,0,2.8,8.4l20.8,27.73a2,2,0,0,1,.4,1.21V224a14,14,0,0,0,14,14h64a14,14,0,0,0,14-14V114.67a2,2,0,0,1,.4-1.2l20.8-27.74a14,14,0,0,0,2.8-8.4V32A14,14,0,0,0,184,18ZM72,30H184a2,2,0,0,1,2,2V58H70V32A2,2,0,0,1,72,30ZM185.6,78.53l-20.8,27.74a14,14,0,0,0-2.8,8.4V224a2,2,0,0,1-2,2H96a2,2,0,0,1-2-2V114.67a14,14,0,0,0-2.8-8.4L70.4,78.54a2,2,0,0,1-.4-1.21V70H186v7.33A2,2,0,0,1,185.6,78.53ZM134,120v32a6,6,0,0,1-12,0V120a6,6,0,0,1,12,0Z" }));
});
A.displayName = "Light";
export {
  A as Light
};

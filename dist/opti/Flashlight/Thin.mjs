var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var V in a)
    i.call(a, V) && t.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && r)
    for (var V of r(a))
      t.indexOf(V) < 0 && l.call(a, V) && (e[V] = a[V]);
  return e;
};
import H, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((V, e) => {
  var m = V, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ H.createElement(h, p({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M184,20H72A12,12,0,0,0,60,32V77.33a12.05,12.05,0,0,0,2.4,7.2l20.8,27.74a4,4,0,0,1,.8,2.4V224a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V114.67a4,4,0,0,1,.8-2.4l20.8-27.74a12.05,12.05,0,0,0,2.4-7.2V32A12,12,0,0,0,184,20ZM72,28H184a4,4,0,0,1,4,4V60H68V32A4,4,0,0,1,72,28ZM187.2,79.73l-20.8,27.74a12.05,12.05,0,0,0-2.4,7.2V224a4,4,0,0,1-4,4H96a4,4,0,0,1-4-4V114.67a12.05,12.05,0,0,0-2.4-7.2L68.8,79.73a4,4,0,0,1-.8-2.4V68H188v9.33A4,4,0,0,1,187.2,79.73ZM132,120v32a4,4,0,0,1-8,0V120a4,4,0,0,1,8,0Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};

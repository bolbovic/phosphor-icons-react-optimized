var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import v from "../../lib/OptiBase.mjs";
const A = s((m, e) => {
  var V = m, { children: a } = V, t = l(V, ["children"]);
  return /* @__PURE__ */ c.createElement(v, h({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M217.72,50.25,152.21,30.6l34.47-17.23a6,6,0,1,0-5.36-10.74L134.51,26A78.07,78.07,0,0,0,58,104V208a6,6,0,0,0,12,0V174H90v58a14,14,0,0,0,14,14h64a14,14,0,0,0,14-14V104a46.07,46.07,0,0,0-40-45.6V40.07l72.27,21.68A6.14,6.14,0,0,0,216,62a6,6,0,0,0,1.72-11.75ZM70,162V104a66.07,66.07,0,0,1,60-65.71V58.4A46.07,46.07,0,0,0,90,104v58Zm98,72H104a2,2,0,0,1-2-2V174h68v58A2,2,0,0,1,168,234Zm2-130v58H102V104a34,34,0,0,1,68,0Z" }));
});
A.displayName = "Light";
export {
  A as Light
};

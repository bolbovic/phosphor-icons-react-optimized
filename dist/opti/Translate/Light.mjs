var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const n = A((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, h({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M245.37,213.32l-56-112a6,6,0,0,0-10.74,0l-22.3,44.6A90,90,0,0,1,105,127.19,101.73,101.73,0,0,0,133.82,62H160a6,6,0,0,0,0-12H102V32a6,6,0,0,0-12,0V50H32a6,6,0,0,0,0,12h89.79A89.71,89.71,0,0,1,96,119.23,89.81,89.81,0,0,1,75.11,86,6,6,0,1,0,63.8,90,101.66,101.66,0,0,0,87,127.2,89.56,89.56,0,0,1,32,146a6,6,0,0,0,0,12,101.55,101.55,0,0,0,64-22.63,102.11,102.11,0,0,0,54.53,22.17l-27.89,55.78a6,6,0,0,0,10.74,5.36L147.71,190h72.58l14.34,28.68A6,6,0,0,0,240,222a5.87,5.87,0,0,0,2.68-.64A6,6,0,0,0,245.37,213.32ZM153.71,178,184,117.42,214.29,178Z" }));
});
n.displayName = "Light";
export {
  n as Light
};

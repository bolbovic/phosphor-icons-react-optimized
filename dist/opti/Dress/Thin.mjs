var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    L.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      i.call(l, e) && o(a, e, l[e]);
  return a;
};
var n = (a, l) => {
  var e = {};
  for (var t in a)
    L.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const V = h((t, e) => {
  var m = t, { children: a } = m, l = n(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M211,211.27l-.06-.12-46.41-98.86,21.68-34,0-.1a11.94,11.94,0,0,0,0-12.34l-.15-.24L164,34V8a4,4,0,0,0-8,0V33.82l-6.13,7.67a28,28,0,0,1-43.74,0L100,33.82V8a4,4,0,0,0-8,0V34L69.86,65.59l-.15.24a11.94,11.94,0,0,0,0,12.34.93.93,0,0,1,.05.1l21.68,34L45,211.15l-.06.12A12,12,0,0,0,56,228H200a12,12,0,0,0,11-16.73ZM76.54,74a4,4,0,0,1,0-4L96.21,41.9l3.68,4.59a36,36,0,0,0,56.22,0l3.68-4.59L179.49,70a4,4,0,0,1,0,4l-21.65,34H98.19ZM203.33,218.2A3.94,3.94,0,0,1,200,220H56a3.94,3.94,0,0,1-3.33-1.8,3.89,3.89,0,0,1-.36-3.72L98.54,116h58.92l46.23,98.48A3.89,3.89,0,0,1,203.33,218.2Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};

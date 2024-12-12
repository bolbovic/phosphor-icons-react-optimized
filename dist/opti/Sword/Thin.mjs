var f = Object.defineProperty;
var L = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && m(a, e, l[e]);
  if (L)
    for (var e of L(l))
      i.call(l, e) && m(a, e, l[e]);
  return a;
};
var n = (a, l) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && L)
    for (var t of L(a))
      l.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = h((t, e) => {
  var r = t, { children: a } = r, l = n(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M216,36H152a4,4,0,0,0-3.17,1.56L82.05,124.38,69.19,111.52a12,12,0,0,0-17,0L39.52,124.21a12,12,0,0,0,0,17L62.34,164,31.52,194.83a12,12,0,0,0,0,17L44.2,224.49a12,12,0,0,0,17,0L92,193.67l22.81,22.82a12,12,0,0,0,17,0l12.69-12.7a12,12,0,0,0,0-17L131.62,174l86.82-66.79A4,4,0,0,0,220,104V40A4,4,0,0,0,216,36ZM55.52,218.83a4,4,0,0,1-5.66,0L37.17,206.15a4,4,0,0,1,0-5.66L68,169.67,86.34,188Zm83.31-26.36a4,4,0,0,1,0,5.67l-12.7,12.69a4,4,0,0,1-5.66,0l-75.3-75.3a4,4,0,0,1,0-5.66l12.7-12.69a4,4,0,0,1,5.66,0ZM212,102l-86.08,66.22L109.66,152l53.17-53.17a4,4,0,1,0-5.66-5.66L104,146.34,87.75,130.08,154,44h58Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};

var H = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var v = (a, e, V) => e in a ? H(a, e, { enumerable: !0, configurable: !0, writable: !0, value: V }) : a[e] = V, h = (a, e) => {
  for (var V in e || (e = {}))
    A.call(e, V) && v(a, V, e[V]);
  if (m)
    for (var V of m(e))
      o.call(e, V) && v(a, V, e[V]);
  return a;
};
var i = (a, e) => {
  var V = {};
  for (var t in a)
    A.call(a, t) && e.indexOf(t) < 0 && (V[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && o.call(a, t) && (V[t] = a[t]);
  return V;
};
import p, { forwardRef as Z } from "react";
import l from "../../lib/OptiBase.mjs";
const c = Z((t, V) => {
  var r = t, { children: a } = r, e = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(l, h({ ref: V }, e), a, /* @__PURE__ */ p.createElement("path", { d: "M206,58.84V32a6,6,0,0,0-12,0V58.84A22,22,0,0,0,178,80v45.66l-44-25.14V72a6,6,0,0,0-12,0v28.52L78,125.66V80A22,22,0,0,0,62,58.84V32a6,6,0,0,0-12,0V58.84A22,22,0,0,0,34,80V216a6,6,0,0,0,6,6h72a6,6,0,0,0,6-6V176a10,10,0,0,1,20,0v40a6,6,0,0,0,6,6h72a6,6,0,0,0,6-6V80A22,22,0,0,0,206,58.84ZM200,70a10,10,0,0,1,10,10v26H190V80A10,10,0,0,1,200,70ZM56,70A10,10,0,0,1,66,80v26H46V80A10,10,0,0,1,56,70ZM46,118H66v92H46Zm82,36a22,22,0,0,0-22,22v34H78V139.48l50-28.57,50,28.57V210H150V176A22,22,0,0,0,128,154Zm62,56V118h20v92Z" }));
});
c.displayName = "Light";
export {
  c as Light
};

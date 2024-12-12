var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && H(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && H(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const s = h((r, e) => {
  var o = r, { children: a } = o, t = L(o, ["children"]);
  return /* @__PURE__ */ c.createElement(l, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M208,196H71.59l29.09-32H152A60,60,0,0,0,194.07,61.27L211,42.69A4,4,0,0,0,205,37.31L188,56a59.73,59.73,0,0,0-36-12H56a4,4,0,0,0,0,8h96a51.75,51.75,0,0,1,30.6,10L97.14,156H56a4,4,0,0,0,0,8H89.87L45,213.31A4,4,0,1,0,51,218.69L64.31,204H208a4,4,0,0,0,0-8ZM188.69,67.19A52,52,0,0,1,152,156H108Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};

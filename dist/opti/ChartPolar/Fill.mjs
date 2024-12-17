var M = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? M(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && Z(a, e, t[e]);
  if (m)
    for (var e of m(t))
      o.call(t, e) && Z(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var A in a)
    l.call(a, A) && t.indexOf(A) < 0 && (e[A] = a[A]);
  if (a != null && m)
    for (var A of m(a))
      t.indexOf(A) < 0 && o.call(a, A) && (e[A] = a[A]);
  return e;
};
import H, { forwardRef as V } from "react";
import c from "../../lib/OptiBase.mjs";
const f = V((A, e) => {
  var r = A, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ H.createElement(c, i({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M120,199.54v27.74a4,4,0,0,1-4.46,4,104.22,104.22,0,0,1-90.8-90.8,4,4,0,0,1,4-4.46H56.46A72.11,72.11,0,0,0,120,199.54ZM183.42,136H136v47.42A56.11,56.11,0,0,0,183.42,136ZM136,72.58V120h47.42A56.11,56.11,0,0,0,136,72.58ZM227.28,136H199.54A72.11,72.11,0,0,1,136,199.54v27.74a4,4,0,0,0,4.46,4,104.22,104.22,0,0,0,90.8-90.8A4,4,0,0,0,227.28,136Zm-27.74-16h27.74a4,4,0,0,0,4-4.46,104.22,104.22,0,0,0-90.8-90.8,4,4,0,0,0-4.46,4V56.46A72.11,72.11,0,0,1,199.54,120Zm-84-95.26a104.22,104.22,0,0,0-90.8,90.8,4,4,0,0,0,4,4.46H56.46A72.11,72.11,0,0,1,120,56.46V28.72A4,4,0,0,0,115.54,24.74ZM72.58,120H120V72.58A56.11,56.11,0,0,0,72.58,120ZM120,183.42V136H72.58A56.11,56.11,0,0,0,120,183.42Z" }));
});
f.displayName = "Fill";
export {
  f as Fill
};

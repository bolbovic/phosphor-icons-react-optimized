var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var H = (a, e, V) => e in a ? n(a, e, { enumerable: !0, configurable: !0, writable: !0, value: V }) : a[e] = V, l = (a, e) => {
  for (var V in e || (e = {}))
    o.call(e, V) && H(a, V, e[V]);
  if (r)
    for (var V of r(e))
      i.call(e, V) && H(a, V, e[V]);
  return a;
};
var p = (a, e) => {
  var V = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (V[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && i.call(a, t) && (V[t] = a[t]);
  return V;
};
import h, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((t, V) => {
  var m = t, { children: a } = m, e = p(m, ["children"]);
  return /* @__PURE__ */ h.createElement(c, l({ ref: V }, e), a, /* @__PURE__ */ h.createElement("path", { d: "M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212Zm-41.17-86.83a4,4,0,0,1,0,5.66l-48,48a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L116,170.34l45.17-45.17A4,4,0,0,1,166.83,125.17Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};

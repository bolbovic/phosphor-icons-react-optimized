var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && V(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const A = h((l, e) => {
  var m = l, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M124,25.66V128a4,4,0,0,1-8,0V25.66L90.83,50.83a4,4,0,0,1-5.66-5.66l32-32a4,4,0,0,1,5.66,0l32,32a4,4,0,0,1-5.66,5.66Zm64,100.12V96a12,12,0,0,0-12-12H160a4,4,0,0,0,0,8h16a4,4,0,0,1,4,4v92.9l-3.27-5A24,24,0,0,0,135.22,208a1.22,1.22,0,0,0,.12.19l22.26,34a4,4,0,1,0,6.69-4.38l-22.2-33.9A16,16,0,0,1,169.86,188l.12.19,10.67,16.31a4,4,0,0,0,7.35-2.19V135.47a78.83,78.83,0,0,1,32,63.18V240a4,4,0,0,0,8,0V198.65A86.84,86.84,0,0,0,188,125.78ZM80,84H64A12,12,0,0,0,52,96V200a4,4,0,0,0,8,0V96a4,4,0,0,1,4-4H80a4,4,0,0,0,0-8Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};

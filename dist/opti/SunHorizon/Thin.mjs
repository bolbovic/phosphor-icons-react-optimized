var c = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && o(a, e, m[e]);
  if (l)
    for (var e of l(m))
      i.call(m, e) && o(a, e, m[e]);
  return a;
};
var H = (a, m) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      m.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const A = f((t, e) => {
  var r = t, { children: a } = r, m = H(r, ["children"]);
  return /* @__PURE__ */ n.createElement(s, p({ ref: e }, m), a, /* @__PURE__ */ n.createElement("path", { d: "M240,156H194.94A68,68,0,1,0,60,144a68.73,68.73,0,0,0,1.06,12H16a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8ZM68,144a60,60,0,1,1,118.79,12H69.21A60.16,60.16,0,0,1,68,144Zm144,56a4,4,0,0,1-4,4H48a4,4,0,0,1,0-8H208A4,4,0,0,1,212,200ZM76.42,41.79a4,4,0,0,1,7.16-3.58l8,16a4,4,0,0,1-7.16,3.58Zm-56,52.42a4,4,0,0,1,5.37-1.79l16,8a4,4,0,0,1-3.58,7.16l-16-8A4,4,0,0,1,20.42,94.21Zm192,11.58a4,4,0,0,1,1.79-5.37l16-8a4,4,0,1,1,3.58,7.16l-16,8a4,4,0,0,1-5.37-1.79Zm-48-51.58,8-16a4,4,0,1,1,7.16,3.58l-8,16a4,4,0,0,1-7.16-3.58Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};

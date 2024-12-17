var p = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var t = (a, m, e) => m in a ? p(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, M = (a, m) => {
  for (var e in m || (m = {}))
    r.call(m, e) && t(a, e, m[e]);
  if (H)
    for (var e of H(m))
      o.call(m, e) && t(a, e, m[e]);
  return a;
};
var h = (a, m) => {
  var e = {};
  for (var Z in a)
    r.call(a, Z) && m.indexOf(Z) < 0 && (e[Z] = a[Z]);
  if (a != null && H)
    for (var Z of H(a))
      m.indexOf(Z) < 0 && o.call(a, Z) && (e[Z] = a[Z]);
  return e;
};
import i, { forwardRef as A } from "react";
import n from "../../lib/OptiBase.mjs";
const c = A((Z, e) => {
  var l = Z, { children: a } = l, m = h(l, ["children"]);
  return /* @__PURE__ */ i.createElement(n, M({ ref: e }, m), a, /* @__PURE__ */ i.createElement("path", { d: "M36,104a4,4,0,0,1,4-4H56a4,4,0,0,1,0,8H40A4,4,0,0,1,36,104ZM74.26,55.92a4,4,0,1,0,5.66-5.66L68.6,39A4,4,0,0,0,63,44.6ZM128,36a4,4,0,0,0,4-4V16a4,4,0,0,0-8,0V32A4,4,0,0,0,128,36Zm50.91,21.09a4,4,0,0,0,2.83-1.17L193.05,44.6A4,4,0,1,0,187.4,39L176.08,50.26a4,4,0,0,0,2.83,6.83ZM200,108h16a4,4,0,0,0,0-8H200a4,4,0,0,0,0,8ZM88,108a4,4,0,0,0,4-4,36,36,0,0,1,72,0,4,4,0,0,0,8,0,44,44,0,0,0-88,0A4,4,0,0,0,88,108ZM235.45,218a4,4,0,0,1-3.45,2H24a4,4,0,0,1-3.48-6l40.69-72a4,4,0,0,1,3.49-2H191.3a4,4,0,0,1,3.49,2l40.69,72A4,4,0,0,1,235.45,218ZM189,148H157.31l5.22,24h40Zm-34.63,24-5.22-24H106.88l-5.22,24Zm-54.42,8-7,32H163l-7-32Zm-46.46-8h40l5.22-24H67Zm-22.6,40H84.78l7-32H48.94Zm194.28,0-18.08-32H164.27l6.95,32Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};

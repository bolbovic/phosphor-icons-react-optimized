var f = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, i = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && r(a, e, m[e]);
  if (A)
    for (var e of A(m))
      o.call(m, e) && r(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && A)
    for (var t of A(a))
      m.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((t, e) => {
  var c = t, { children: a } = c, m = p(c, ["children"]);
  return /* @__PURE__ */ n.createElement(d, i({ ref: e }, m), a, /* @__PURE__ */ n.createElement("path", { d: "M191.69,98.3c.2-2.07.31-4.17.31-6.3A64,64,0,0,0,64,92c0,2.13.11,4.23.31,6.3A64,64,0,1,0,128,208.88,64,64,0,1,0,191.69,98.3ZM72,92a56,56,0,0,1,112,0c0,1.07,0,2.13-.1,3.18a63.84,63.84,0,0,0-55.9,7.94,63.84,63.84,0,0,0-55.9-7.94C72,94.13,72,93.07,72,92Zm76,64a55.88,55.88,0,0,1-20,42.85A55.88,55.88,0,0,1,108,156c0-1.07,0-2.13.1-3.18a63.86,63.86,0,0,0,39.8,0C148,153.87,148,154.93,148,156Zm-20-8a55.63,55.63,0,0,1-18.86-3.28A56.06,56.06,0,0,1,128,113.15a56.06,56.06,0,0,1,18.86,31.57A55.63,55.63,0,0,1,128,148Zm-26.3-6.58a56.18,56.18,0,0,1-28.56-38.14,55.87,55.87,0,0,1,48.21,5A64.06,64.06,0,0,0,101.7,141.42Zm33-33.09a55.87,55.87,0,0,1,48.21-5,56.18,56.18,0,0,1-28.56,38.14A64.06,64.06,0,0,0,134.65,108.33ZM92,212A56,56,0,0,1,65.7,106.58a64.26,64.26,0,0,0,34.61,43.12c-.2,2.07-.31,4.17-.31,6.3a63.87,63.87,0,0,0,21.35,47.67A55.71,55.71,0,0,1,92,212Zm72,0a55.71,55.71,0,0,1-29.35-8.33A63.87,63.87,0,0,0,156,156c0-2.13-.11-4.23-.31-6.3a64.26,64.26,0,0,0,34.61-43.12A56,56,0,0,1,164,212Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
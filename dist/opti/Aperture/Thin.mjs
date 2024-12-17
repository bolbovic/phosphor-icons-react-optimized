var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    o.call(m, e) && l(a, e, m[e]);
  if (r)
    for (var e of r(m))
      i.call(m, e) && l(a, e, m[e]);
  return a;
};
var L = (a, m) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const M = f((t, e) => {
  var Z = t, { children: a } = Z, m = L(Z, ["children"]);
  return /* @__PURE__ */ n.createElement(s, p({ ref: e }, m), a, /* @__PURE__ */ n.createElement("path", { d: "M198.71,57.29A100,100,0,1,0,57.29,198.71,100,100,0,1,0,198.71,57.29Zm10.37,114.27-61-11.14L210.4,87a92.26,92.26,0,0,1-1.32,84.52ZM95.87,122.13,117,97.24l32.14,5.86,11,30.77L139,158.76l-32.14-5.86ZM206.24,79.58l-40.13,47.25L133.75,36.2a92.09,92.09,0,0,1,72.49,43.38ZM63,63a91.31,91.31,0,0,1,62.26-26.88L146,94.41,51.32,77.11A92.94,92.94,0,0,1,63,63Zm-16,21.49,61,11.14L45.6,169a92.26,92.26,0,0,1,1.32-84.52Zm2.84,92,40.13-47.25,32.36,90.63a92.09,92.09,0,0,1-72.49-43.38Zm143.29,16.63a91.31,91.31,0,0,1-62.26,26.88L110,161.59l94.72,17.3A92.94,92.94,0,0,1,193.05,193.05Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};

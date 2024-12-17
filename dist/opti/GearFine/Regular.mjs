var i = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, e, l) => e in a ? i(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, H = (a, e) => {
  for (var l in e || (e = {}))
    o.call(e, l) && m(a, l, e[l]);
  if (t)
    for (var l of t(e))
      p.call(e, l) && m(a, l, e[l]);
  return a;
};
var c = (a, e) => {
  var l = {};
  for (var r in a)
    o.call(a, r) && e.indexOf(r) < 0 && (l[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      e.indexOf(r) < 0 && p.call(a, r) && (l[r] = a[r]);
  return l;
};
import f, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const R = s((r, l) => {
  var A = r, { children: a } = A, e = c(A, ["children"]);
  return /* @__PURE__ */ f.createElement(L, H({ ref: l }, e), a, /* @__PURE__ */ f.createElement("path", { d: "M232,120H215.63a87.27,87.27,0,0,0-7.74-28.88l14.18-8.19a8,8,0,0,0-8-13.86l-14.2,8.2a88.78,88.78,0,0,0-21.14-21.14l8.2-14.2a8,8,0,0,0-13.86-8l-8.19,14.18A87.27,87.27,0,0,0,136,40.37V24a8,8,0,0,0-16,0V40.37a87.27,87.27,0,0,0-28.88,7.74L82.93,33.93a8,8,0,0,0-13.86,8l8.2,14.2A88.78,88.78,0,0,0,56.13,77.27l-14.2-8.2a8,8,0,0,0-8,13.86l14.18,8.19A87.27,87.27,0,0,0,40.37,120H24a8,8,0,0,0,0,16H40.37a87.27,87.27,0,0,0,7.74,28.88l-14.18,8.19a8,8,0,0,0,4,14.93,7.92,7.92,0,0,0,4-1.07l14.2-8.2a88.78,88.78,0,0,0,21.14,21.14l-8.2,14.2a8,8,0,0,0,13.86,8l8.19-14.18A87.27,87.27,0,0,0,120,215.63V232a8,8,0,0,0,16,0V215.63a87.27,87.27,0,0,0,28.88-7.74l8.19,14.18a8,8,0,0,0,13.86-8l-8.2-14.2a88.78,88.78,0,0,0,21.14-21.14l14.2,8.2A8,8,0,0,0,225,184a8,8,0,0,0-2.92-10.93l-14.18-8.19A87.27,87.27,0,0,0,215.63,136H232a8,8,0,0,0,0-16ZM128,56a72.08,72.08,0,0,1,71.54,64H132.62L99.16,62.05A71.58,71.58,0,0,1,128,56ZM56,128A72,72,0,0,1,85.31,70.06L118.76,128,85.31,185.94A72,72,0,0,1,56,128Zm72,72A71.58,71.58,0,0,1,99.16,194L132.62,136h66.92A72.08,72.08,0,0,1,128,200Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};

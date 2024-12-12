var i = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, L = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && H(a, e, l[e]);
  if (t)
    for (var e of t(l))
      p.call(l, e) && H(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && l.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      l.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const R = s((r, e) => {
  var m = r, { children: a } = m, l = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(A, L({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M230.33,141.06a24.43,24.43,0,0,0-21.24-4.23l-41.84,9.62A28,28,0,0,0,140,112H89.94a31.82,31.82,0,0,0-22.63,9.37L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a7.35,7.35,0,0,0,1.2-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM40,200H16V160H40Zm179.43-31.79-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9ZM154.34,61.66a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32L200,43.31V104a8,8,0,0,1-16,0V43.31L165.66,61.66A8,8,0,0,1,154.34,61.66Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};

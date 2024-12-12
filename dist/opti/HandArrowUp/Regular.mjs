var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, l, e) => l in a ? c(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, f = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && H(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && H(a, e, l[e]);
  return a;
};
var s = (a, l) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import L, { forwardRef as d } from "react";
import i from "../../lib/OptiBase.mjs";
const A = d((t, e) => {
  var m = t, { children: a } = m, l = s(m, ["children"]);
  return /* @__PURE__ */ L.createElement(i, f({ ref: e }, l), a, /* @__PURE__ */ L.createElement("path", { d: "M230.33,141.06a24.43,24.43,0,0,0-21.24-4.23l-41.84,9.62A28,28,0,0,0,140,112H89.94a31.82,31.82,0,0,0-22.63,9.37L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a7.35,7.35,0,0,0,1.2-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM40,200H16V160H40Zm179.43-31.79-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9ZM154.34,61.66a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32L200,43.31V104a8,8,0,0,1-16,0V43.31L165.66,61.66A8,8,0,0,1,154.34,61.66Z" }));
});
A.displayName = "Regular";
export {
  A as Regular,
  A as default
};

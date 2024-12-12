var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as L } from "react";
import d from "../../lib/OptiBase.mjs";
const h = L((r, e) => {
  var o = r, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ s.createElement(d, f({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M52.44,36A6,6,0,0,0,43.56,44l23.7,26.07C50.51,94.93,42,119.77,42,144a86,86,0,0,0,147.28,60.33L203.56,220a6,6,0,0,0,8.88-8.08ZM128,218a74.09,74.09,0,0,1-74-74c0-21,7.27-42.76,21.59-64.73L181.18,195.42A73.81,73.81,0,0,1,128,218ZM91.4,49.07a6,6,0,0,1-.2-8.49,245.6,245.6,0,0,1,33.36-29.49,6,6,0,0,1,6.88,0,251.42,251.42,0,0,1,41.09,38C199.66,80.26,214,113.09,214,144a86.2,86.2,0,0,1-3.08,22.87,6,6,0,0,1-5.78,4.41,6.2,6.2,0,0,1-1.59-.21,6,6,0,0,1-4.2-7.38A74,74,0,0,0,202,144c0-59.63-59-108.94-74-120.52A253.83,253.83,0,0,0,99.88,48.86,6,6,0,0,1,91.4,49.07Z" }));
});
h.displayName = "Light";
export {
  h as Light
};

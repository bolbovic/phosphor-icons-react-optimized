var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && l(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var c in a)
    o.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && m)
    for (var c of m(a))
      t.indexOf(c) < 0 && i.call(a, c) && (e[c] = a[c]);
  return e;
};
import s, { forwardRef as n } from "react";
import q from "../../lib/OptiBase.mjs";
const Z = n((c, e) => {
  var r = c, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ s.createElement(q, p({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M168,76a12,12,0,1,1-12-12A12,12,0,0,1,168,76Zm42,79.08c-15.08,20.84-37.53,34.88-66.7,41.74-20.08,4.72-43.54,6-70.12,3.93q2.4,17.82,6.72,37.54a8,8,0,0,1-6.1,9.52,7.81,7.81,0,0,1-1.72.19,8,8,0,0,1-7.81-6.29q-4.89-22.36-7.41-42.62-20.22-2.51-42.58-7.41a8,8,0,0,1,3.43-15.63q19.7,4.32,37.5,6.73c-2.09-26.56-.78-50,3.93-70.06C66,83.55,80.05,61.1,100.88,46,115,35.76,140.14,23.64,179.27,24c21.19.21,40.83,4.33,43.81,6.08a8,8,0,0,1,2.83,2.83c1.75,3,5.87,22.59,6.08,43.78C232.21,98.31,228.57,129.44,210,155.08Zm2.43-111.52a175.75,175.75,0,0,0-39.22-3.51c-24.34.64-44.71,6.49-60.76,17.39a96,96,0,0,0,86.09,86.1c10.91-16,16.76-36.42,17.4-60.76A175.82,175.82,0,0,0,212.44,43.56Z" }));
});
Z.displayName = "Fill";
export {
  Z as Fill
};
var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      d.call(t, e) && r(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var c in a)
    p.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && m)
    for (var c of m(a))
      t.indexOf(c) < 0 && d.call(a, c) && (e[c] = a[c]);
  return e;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = s((c, e) => {
  var o = c, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M170.21,60.72a12,12,0,0,0-4.42-23.59C150.5,40,137.49,47.2,128.08,57.66,116,44,98.14,36,78,36a66.08,66.08,0,0,0-66,66c0,31,18.91,63,56.2,94.87a342.69,342.69,0,0,0,54.11,37.7A12.1,12.1,0,0,0,128,236a11.92,11.92,0,0,0,5.68-1.46v0A339.75,339.75,0,0,0,175.32,207a12,12,0,0,0-14.64-19c-7.48,5.76-14.63,10.72-20.68,14.68V82.55C145.43,71.23,156.31,63.32,170.21,60.72ZM116,202.66a318.88,318.88,0,0,1-32.51-24.3C61.82,159.77,36,131.42,36,102A42,42,0,0,1,78,60c17,0,31.35,8.57,38,22.52Zm117-94.73a12,12,0,0,1-13.25-10.61,41.89,41.89,0,0,0-18.41-30.25,12,12,0,0,1,13.34-19.95A65.84,65.84,0,0,1,243.6,94.68,12,12,0,0,1,233,107.93Zm1,33.42c-5.84,11.72-14.33,23.63-25.23,35.43a12,12,0,0,1-17.62-16.29c9.36-10.13,16.55-20.17,21.38-29.84A12,12,0,1,1,234,141.35Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
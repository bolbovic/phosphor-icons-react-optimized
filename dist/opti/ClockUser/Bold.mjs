var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && l(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as i } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = i((m, e) => {
  var r = m, { children: a } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ c.createElement(Z, s({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M181.36,114.73l-48,24A12,12,0,0,1,116,128V72a12,12,0,0,1,24,0v36.58l30.63-15.31a12,12,0,1,1,10.73,21.46Zm45.72,120.86a12,12,0,0,1-14.68-8.51C210,218.2,201.65,212,192,212s-18,6.2-20.4,15.08A12,12,0,0,1,160,236a11.77,11.77,0,0,1-3.09-.41,12,12,0,0,1-8.52-14.68,43.76,43.76,0,0,1,15.08-23,36,36,0,1,1,57,0,43.7,43.7,0,0,1,15.08,23A12,12,0,0,1,227.08,235.59ZM180,176a12,12,0,1,0,12-12A12,12,0,0,0,180,176Zm-62.52,35.35a84,84,0,1,1,93.87-93.87,12,12,0,1,0,23.81-3A108,108,0,1,0,114.51,235.16a11,11,0,0,0,1.5.1,12,12,0,0,0,1.47-23.91Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};

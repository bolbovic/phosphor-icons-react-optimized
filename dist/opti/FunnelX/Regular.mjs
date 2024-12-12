var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? d(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, f = (a, l) => {
  for (var e in l || (l = {}))
    L.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var s = (a, l) => {
  var e = {};
  for (var t in a)
    L.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import A from "../../lib/OptiBase.mjs";
const R = i((t, e) => {
  var m = t, { children: a } = m, l = s(m, ["children"]);
  return /* @__PURE__ */ c.createElement(A, f({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M227.82,66.76A16,16,0,0,0,216,40H40A16,16,0,0,0,28.19,66.76l.08.09L96,139.17V216a16,16,0,0,0,24.87,13.32l32-21.34A16,16,0,0,0,160,194.66V139.17l67.73-72.32ZM40,56h0Zm106.19,74.59A8,8,0,0,0,144,136v58.66L112,216V136a8,8,0,0,0-2.16-5.46L40,56H216Zm99.49,79.81a8,8,0,0,1-11.32,11.32L216,203.32l-18.34,18.35a8,8,0,0,1-11.31-11.32L204.69,192l-18.34-18.35a8,8,0,0,1,11.31-11.31L216,180.69l18.34-18.34a8,8,0,0,1,11.32,11.31L227.31,192Z" }));
});
R.displayName = "Regular";
export {
  R as Regular,
  R as default
};

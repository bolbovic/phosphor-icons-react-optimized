var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && c(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var o = m, { children: a } = o, t = L(o, ["children"]);
  return /* @__PURE__ */ n.createElement(h, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M216,124a4,4,0,0,0-3.39,1.88A174.9,174.9,0,0,1,193,151.81l-18.62-98A12,12,0,0,0,155,46.69L130.5,67.13a4,4,0,0,1-4.94.05L100.9,46.64a12,12,0,0,0-19.29,7.15L63,151.81a174.9,174.9,0,0,1-19.6-25.93A4,4,0,0,0,40,124a36,36,0,0,0,0,72H216a36,36,0,0,0,0-72ZM89.48,55.28a4,4,0,0,1,6.37-2.44L120.5,73.38a12,12,0,0,0,15.06-.06l24.53-20.43a3.92,3.92,0,0,1,3.89-.63,4,4,0,0,1,2.55,3L181.11,132H74.89ZM40,188a28,28,0,0,1-2.15-55.92C58.3,164,80.59,180,97.9,188Zm88,0h0c-.27,0-11.78-.21-27.77-7.84a118.23,118.23,0,0,1-30.43-21.4L73.37,140H182.63l3.56,18.76a118.23,118.23,0,0,1-30.43,21.4C139.77,187.79,128.26,188,128,188Zm88,0H158.1c17.31-8,39.6-24,60.05-55.92A28,28,0,0,1,216,188Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var M = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import Z, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const A = h((r, e) => {
  var o = r, { children: a } = o, t = M(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, n({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M171,50.37a250.18,250.18,0,0,0-40.73-37.65,4,4,0,0,0-4.58,0A250.18,250.18,0,0,0,85,50.37C58.17,81.21,44,113.58,44,144a84,84,0,0,0,168,0C212,113.58,197.83,81.21,171,50.37ZM189.91,188H66.09a75.63,75.63,0,0,1-11.4-24H201.31A75.63,75.63,0,0,1,189.91,188ZM53,156a75.41,75.41,0,0,1-1-12,93.38,93.38,0,0,1,.79-12H203.21a93.38,93.38,0,0,1,.79,12,75.41,75.41,0,0,1-1,12ZM90.9,55.77A254,254,0,0,1,128,21a254,254,0,0,1,37.1,34.81c14.37,16.55,31,40.61,36.77,68.23H54.13C59.93,96.38,76.53,72.32,90.9,55.77ZM128,220a75.77,75.77,0,0,1-55.35-24h110.7A75.77,75.77,0,0,1,128,220Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};

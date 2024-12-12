var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, A = (a, r) => {
  for (var e in r || (r = {}))
    l.call(r, e) && c(a, e, r[e]);
  if (m)
    for (var e of m(r))
      p.call(r, e) && c(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as R } from "react";
import d from "../../lib/OptiBase.mjs";
const n = R((t, e) => {
  var o = t, { children: a } = o, r = f(o, ["children"]);
  return /* @__PURE__ */ i.createElement(d, A({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M53.92,34.62A8,8,0,1,0,42.08,45.38L64.72,70.29C48.32,95,40,119.78,40,144a88,88,0,0,0,149.21,63.22l12.87,14.16a8,8,0,1,0,11.84-10.76ZM128,216a72.08,72.08,0,0,1-72-72c0-19.93,6.68-40.57,19.86-61.46L178.43,195.36A71.84,71.84,0,0,1,128,216ZM90,50.51a8,8,0,0,1-.27-11.31A247.8,247.8,0,0,1,123.41,9.45a8,8,0,0,1,9.18,0C136,11.83,216,68.7,216,144a88.08,88.08,0,0,1-3.15,23.4,8,8,0,0,1-7.71,5.88A7.79,7.79,0,0,1,203,173a8,8,0,0,1-5.59-9.83A72.55,72.55,0,0,0,200,144c0-57.24-55.48-105-72-118a252.23,252.23,0,0,0-26.66,24.23A8,8,0,0,1,90,50.51Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};

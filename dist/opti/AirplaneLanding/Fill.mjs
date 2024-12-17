var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import s, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const E = d((l, e) => {
  var m = l, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(n, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M256,216a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16H248A8,8,0,0,1,256,216Zm-24-24a8,8,0,0,0,8-8V148.32a40.13,40.13,0,0,0-29.28-38.54l-60.84-17-22.5-53.63a8,8,0,0,0-4.85-4.5l-5.47-1.82A16,16,0,0,0,96,48V77.39L66.13,68.88,55.52,39.51a8,8,0,0,0-5-4.87l-5.47-1.82A16,16,0,0,0,24,48v55.72a40.12,40.12,0,0,0,29.21,38.52L229.84,191.7A8,8,0,0,0,232,192Z" }));
});
E.displayName = "Fill";
export {
  E as Fill
};

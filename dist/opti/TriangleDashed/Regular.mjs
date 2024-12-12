var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? c(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, Z = (a, l) => {
  for (var e in l || (l = {}))
    A.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var t in a)
    A.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as d } from "react";
import i from "../../lib/OptiBase.mjs";
const H = d((t, e) => {
  var m = t, { children: a } = m, l = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(i, Z({ ref: e }, l), a, /* @__PURE__ */ s.createElement("path", { d: "M160,216a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16h48A8,8,0,0,1,160,216Zm76.8-27.91L232.14,180a8,8,0,0,0-13.86,8l4.65,8.09a7.59,7.59,0,0,1,0,7.72,8.5,8.5,0,0,1-7.48,4.2H192a8,8,0,0,0,0,16h23.45a24.34,24.34,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM64,208H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L37.72,188a8,8,0,1,0-13.86-8l-4.66,8.08a23.51,23.51,0,0,0,0,23.72A24.34,24.34,0,0,0,40.55,224H64a8,8,0,0,0,0-16Zm138.18-56a8,8,0,0,0,6.93-12l-23-40a8,8,0,0,0-13.86,8l23,40A8,8,0,0,0,202.18,152ZM149.35,36.22a24.76,24.76,0,0,0-42.7,0L93,60a8,8,0,1,0,13.86,8l13.7-23.78a8.75,8.75,0,0,1,15,0L149.18,68a8,8,0,0,0,6.94,4,7.91,7.91,0,0,0,4-1.07A8,8,0,0,0,163,60ZM80.85,97.07A8,8,0,0,0,69.93,100l-23,40a8,8,0,0,0,13.87,8l23-40A8,8,0,0,0,80.85,97.07Z" }));
});
H.displayName = "Regular";
export {
  H as Regular,
  H as default
};

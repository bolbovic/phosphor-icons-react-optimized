var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import L, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var Z = m, { children: a } = Z, t = A(Z, ["children"]);
  return /* @__PURE__ */ L.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M200.12,55.88A102,102,0,0,0,55.87,200.12,102,102,0,1,0,200.12,55.88Zm-102,66.67,19.65-23.14,29.86,5.46,10.21,28.58-19.65,23.14-29.86-5.46ZM209.93,90.69a90.24,90.24,0,0,1-2,78.63l-56.14-10.24Zm-6.16-11.28-36.94,43.48L136.66,38.42a89.31,89.31,0,0,1,55,25.94A91.33,91.33,0,0,1,203.77,79.41Zm-139.41-15A89.37,89.37,0,0,1,123.81,38.1L143,91.82,54.75,75.71A91.2,91.2,0,0,1,64.36,64.36ZM48,86.68l56.14,10.24L46.07,165.31a90.24,90.24,0,0,1,2-78.63Zm4.21,89.91,36.94-43.48,30.17,84.47a89.31,89.31,0,0,1-55-25.94A91.33,91.33,0,0,1,52.23,176.59Zm139.41,15a89.32,89.32,0,0,1-59.45,26.26L113,164.18l88.24,16.11A91.2,91.2,0,0,1,191.64,191.64Z" }));
});
d.displayName = "Light";
export {
  d as Light
};

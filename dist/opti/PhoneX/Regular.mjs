var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, l, e) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, s = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && c(a, e, l[e]);
  if (t)
    for (var e of t(l))
      p.call(l, e) && c(a, e, l[e]);
  return a;
};
var A = (a, l) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && l.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      l.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import L, { forwardRef as i } from "react";
import R from "../../lib/OptiBase.mjs";
const d = i((r, e) => {
  var m = r, { children: a } = m, l = A(m, ["children"]);
  return /* @__PURE__ */ L.createElement(R, s({ ref: e }, l), a, /* @__PURE__ */ L.createElement("path", { d: "M146.34,98.34,164.69,80,146.34,61.66a8,8,0,0,1,11.32-11.32L176,68.69l18.34-18.35a8,8,0,0,1,11.32,11.32L187.32,80l18.34,18.34a8,8,0,0,1-11.32,11.32L176,91.31l-18.34,18.35a8,8,0,0,1-11.32-11.32Zm77.54,84.74A56.26,56.26,0,0,1,168,232C88.6,232,24,167.4,24,88A56.26,56.26,0,0,1,72.92,32.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,109.39,104c-.18.27-.37.52-.57.77L88,129.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,223.88,183.08Zm-15.88-2s-.07,0-.11,0h0l-47-21.05-24.35,20.71a8.44,8.44,0,0,1-.74.56,16,16,0,0,1-15.75,1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16,16,0,0,1,1-15.7,6.13,6.13,0,0,1,.57-.77L96,95.15l-21-47a.61.61,0,0,1,0-.12A40.2,40.2,0,0,0,40,88,128.14,128.14,0,0,0,168,216,40.21,40.21,0,0,0,208,181.07Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};

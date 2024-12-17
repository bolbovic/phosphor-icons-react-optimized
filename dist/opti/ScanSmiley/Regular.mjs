var V = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? V(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    A.call(m, e) && o(a, e, m[e]);
  if (t)
    for (var e of t(m))
      c.call(m, e) && o(a, e, m[e]);
  return a;
};
var s = (a, m) => {
  var e = {};
  for (var r in a)
    A.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import H, { forwardRef as l } from "react";
import f from "../../lib/OptiBase.mjs";
const i = l((r, e) => {
  var Z = r, { children: a } = Z, m = s(Z, ["children"]);
  return /* @__PURE__ */ H.createElement(f, p({ ref: e }, m), a, /* @__PURE__ */ H.createElement("path", { d: "M224,40V76a8,8,0,0,1-16,0V48H180a8,8,0,0,1,0-16h36A8,8,0,0,1,224,40Zm-8,132a8,8,0,0,0-8,8v28H180a8,8,0,0,0,0,16h36a8,8,0,0,0,8-8V180A8,8,0,0,0,216,172ZM76,208H48V180a8,8,0,0,0-16,0v36a8,8,0,0,0,8,8H76a8,8,0,0,0,0-16ZM40,84a8,8,0,0,0,8-8V48H76a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8V76A8,8,0,0,0,40,84Zm88,116a72,72,0,1,1,72-72A72.08,72.08,0,0,1,128,200Zm56-72a56,56,0,1,0-56,56A56.06,56.06,0,0,0,184,128Zm-68-12a12,12,0,1,0-12,12A12,12,0,0,0,116,116Zm36-12a12,12,0,1,0,12,12A12,12,0,0,0,152,104Zm-5.29,42c-3.81,3.37-12,6-18.71,6s-14.9-2.63-18.71-6a8,8,0,1,0-10.58,12c7.83,6.91,20.35,10,29.29,10s21.46-3.09,29.29-10a8,8,0,1,0-10.58-12Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};

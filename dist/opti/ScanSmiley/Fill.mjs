var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var l = (a, m, e) => m in a ? s(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, c = (a, m) => {
  for (var e in m || (m = {}))
    o.call(m, e) && l(a, e, m[e]);
  if (r)
    for (var e of r(m))
      A.call(m, e) && l(a, e, m[e]);
  return a;
};
var i = (a, m) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import p, { forwardRef as H } from "react";
import V from "../../lib/OptiBase.mjs";
const f = H((t, e) => {
  var Z = t, { children: a } = Z, m = i(Z, ["children"]);
  return /* @__PURE__ */ p.createElement(V, c({ ref: e }, m), a, /* @__PURE__ */ p.createElement("path", { d: "M224,40V76a8,8,0,0,1-16,0V48H180a8,8,0,0,1,0-16h36A8,8,0,0,1,224,40Zm-8,132a8,8,0,0,0-8,8v28H180a8,8,0,0,0,0,16h36a8,8,0,0,0,8-8V180A8,8,0,0,0,216,172ZM76,208H48V180a8,8,0,0,0-16,0v36a8,8,0,0,0,8,8H76a8,8,0,0,0,0-16ZM40,84a8,8,0,0,0,8-8V48H76a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8V76A8,8,0,0,0,40,84Zm88,116a72,72,0,1,1,72-72A72.08,72.08,0,0,1,128,200Zm-24-72a12,12,0,1,0-12-12A12,12,0,0,0,104,128Zm54,18.71a8,8,0,0,0-11.29-.71c-3.81,3.37-12,6-18.71,6s-14.9-2.63-18.71-6a8,8,0,1,0-10.58,12c7.83,6.91,20.35,10,29.29,10s21.46-3.09,29.29-10A8,8,0,0,0,158,146.71ZM164,116a12,12,0,1,0-12,12A12,12,0,0,0,164,116Z" }));
});
f.displayName = "Fill";
export {
  f as Fill
};

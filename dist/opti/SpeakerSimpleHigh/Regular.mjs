var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var l = (a, r, e) => r in a ? A(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, f = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && l(a, e, r[e]);
  if (m)
    for (var e of m(r))
      c.call(r, e) && l(a, e, r[e]);
  return a;
};
var i = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && c.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as H } from "react";
import R from "../../lib/OptiBase.mjs";
const V = H((t, e) => {
  var o = t, { children: a } = o, r = i(o, ["children"]);
  return /* @__PURE__ */ s.createElement(R, f({ ref: e }, r), a, /* @__PURE__ */ s.createElement("path", { d: "M163.51,24.81a8,8,0,0,0-8.42.88L85.25,80H40A16,16,0,0,0,24,96v64a16,16,0,0,0,16,16H85.25l69.84,54.31A8,8,0,0,0,168,224V32A8,8,0,0,0,163.51,24.81ZM152,207.64,92.91,161.69A7.94,7.94,0,0,0,88,160H40V96H88a7.94,7.94,0,0,0,4.91-1.69L152,48.36ZM208,104v48a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v80a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z" }));
});
V.displayName = "Regular";
export {
  V as Regular
};

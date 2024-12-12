var s = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var o = (a, e, l) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, c = (a, e) => {
  for (var l in e || (e = {}))
    p.call(e, l) && o(a, l, e[l]);
  if (t)
    for (var l of t(e))
      H.call(e, l) && o(a, l, e[l]);
  return a;
};
var f = (a, e) => {
  var l = {};
  for (var r in a)
    p.call(a, r) && e.indexOf(r) < 0 && (l[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      e.indexOf(r) < 0 && H.call(a, r) && (l[r] = a[r]);
  return l;
};
import i, { forwardRef as A } from "react";
import R from "../../lib/OptiBase.mjs";
const V = A((r, l) => {
  var m = r, { children: a } = m, e = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(R, c({ ref: l }, e), a, /* @__PURE__ */ i.createElement("path", { d: "M120.56,200H40V88H216v32a8,8,0,0,0,16,0V88a16,16,0,0,0-16-16H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216h81.18a8,8,0,0,0,0-16ZM92.69,56l16,16H40V56ZM239.63,159.2a8,8,0,0,0-7-5.56l-29.84-2.31-11.43-26.5a8,8,0,0,0-14.7,0l-11.43,26.5-29.84,2.31a8,8,0,0,0-4.47,14.14l22.51,18.59-6.85,27.71a8,8,0,0,0,11.82,8.81L184,207.82l25.61,15.07a8,8,0,0,0,11.82-8.81l-6.85-27.71,22.51-18.59A8,8,0,0,0,239.63,159.2Zm-39.12,18a8,8,0,0,0-2.68,8.09l3.5,14.12-13.27-7.81a8,8,0,0,0-8.12,0l-13.27,7.81,3.5-14.12a8,8,0,0,0-2.68-8.09l-11.11-9.18,14.89-1.15a8,8,0,0,0,6.73-4.8l6-13.92,6,13.92a8,8,0,0,0,6.73,4.8l14.89,1.15Z" }));
});
V.displayName = "Regular";
export {
  V as Regular
};

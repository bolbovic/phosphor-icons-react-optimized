var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var o = (a, e, l) => e in a ? d(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, s = (a, e) => {
  for (var l in e || (e = {}))
    p.call(e, l) && o(a, l, e[l]);
  if (r)
    for (var l of r(e))
      f.call(e, l) && o(a, l, e[l]);
  return a;
};
var H = (a, e) => {
  var l = {};
  for (var t in a)
    p.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && f.call(a, t) && (l[t] = a[t]);
  return l;
};
import c, { forwardRef as i } from "react";
import A from "../../lib/OptiBase.mjs";
const R = i((t, l) => {
  var m = t, { children: a } = m, e = H(m, ["children"]);
  return /* @__PURE__ */ c.createElement(A, s({ ref: l }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M120.56,200H40V88H216v32a8,8,0,0,0,16,0V88a16,16,0,0,0-16-16H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216h81.18a8,8,0,0,0,0-16ZM92.69,56l16,16H40V56ZM239.63,159.2a8,8,0,0,0-7-5.56l-29.84-2.31-11.43-26.5a8,8,0,0,0-14.7,0l-11.43,26.5-29.84,2.31a8,8,0,0,0-4.47,14.14l22.51,18.59-6.85,27.71a8,8,0,0,0,11.82,8.81L184,207.82l25.61,15.07a8,8,0,0,0,11.82-8.81l-6.85-27.71,22.51-18.59A8,8,0,0,0,239.63,159.2Zm-39.12,18a8,8,0,0,0-2.68,8.09l3.5,14.12-13.27-7.81a8,8,0,0,0-8.12,0l-13.27,7.81,3.5-14.12a8,8,0,0,0-2.68-8.09l-11.11-9.18,14.89-1.15a8,8,0,0,0,6.73-4.8l6-13.92,6,13.92a8,8,0,0,0,6.73,4.8l14.89,1.15Z" }));
});
R.displayName = "Regular";
export {
  R as Regular,
  R as default
};

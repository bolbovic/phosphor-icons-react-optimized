var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var A = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, i = (a, e) => {
  for (var l in e || (e = {}))
    L.call(e, l) && A(a, l, e[l]);
  if (r)
    for (var l of r(e))
      o.call(e, l) && A(a, l, e[l]);
  return a;
};
var p = (a, e) => {
  var l = {};
  for (var t in a)
    L.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && o.call(a, t) && (l[t] = a[t]);
  return l;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const H = h((t, l) => {
  var m = t, { children: a } = m, e = p(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, i({ ref: l }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M232,122H213.77a85.56,85.56,0,0,0-8.49-31.69l15.79-9.11a6,6,0,0,0-6-10.4l-15.8,9.12a86.72,86.72,0,0,0-23.19-23.19l9.12-15.8a6,6,0,0,0-10.4-6l-9.11,15.79A85.56,85.56,0,0,0,134,42.23V24a6,6,0,0,0-12,0V42.23a85.56,85.56,0,0,0-31.69,8.49L81.2,34.93a6,6,0,0,0-10.4,6l9.12,15.8A86.72,86.72,0,0,0,56.73,79.92L40.93,70.8a6,6,0,0,0-6,10.4l15.79,9.11A85.56,85.56,0,0,0,42.23,122H24a6,6,0,0,0,0,12H42.23a85.56,85.56,0,0,0,8.49,31.69L34.93,174.8a6,6,0,0,0,6,10.4l15.8-9.12a86.72,86.72,0,0,0,23.19,23.19l-9.12,15.8a6,6,0,0,0,10.4,6l9.11-15.79A85.56,85.56,0,0,0,122,213.77V232a6,6,0,0,0,12,0V213.77a85.56,85.56,0,0,0,31.69-8.49l9.11,15.79a6,6,0,0,0,5.21,3,5.93,5.93,0,0,0,3-.81,6,6,0,0,0,2.2-8.19l-9.12-15.8a86.72,86.72,0,0,0,23.19-23.19l15.8,9.12a6,6,0,0,0,6-10.4l-15.79-9.11A85.56,85.56,0,0,0,213.77,134H232a6,6,0,0,0,0-12ZM86,188.84A73.9,73.9,0,0,1,86,67.16L121.07,128ZM128,202a73.5,73.5,0,0,1-31.67-7.14L131.46,134h70.28A74.09,74.09,0,0,1,128,202Zm3.46-80L96.33,61.14A73.95,73.95,0,0,1,201.74,122Z" }));
});
H.displayName = "Light";
export {
  H as Light
};

var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, c, e) => c in a ? f(a, c, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[c] = e, p = (a, c) => {
  for (var e in c || (c = {}))
    i.call(c, e) && o(a, e, c[e]);
  if (r)
    for (var e of r(c))
      l.call(c, e) && o(a, e, c[e]);
  return a;
};
var n = (a, c) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && c.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      c.indexOf(t) < 0 && l.call(a, t) && (e[t] = a[t]);
  return e;
};
import C, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((t, e) => {
  var m = t, { children: a } = m, c = n(m, ["children"]);
  return /* @__PURE__ */ C.createElement(d, p({ ref: e }, c), a, /* @__PURE__ */ C.createElement("path", { d: "M243.63,48.12a4,4,0,0,0-3.76-3.75c-50.25-3-90.44,12.1-107.52,40.29-11.64,19.22-11.17,41.92,1.24,64.21a67.33,67.33,0,0,0-16.65,34.41L93.45,159.79c8.63-16,8.81-32.33.42-46.19C81.45,93.09,52.35,82.13,16,84.26A4,4,0,0,0,12.26,88c-2.13,36.33,8.83,65.43,29.34,77.85a41.82,41.82,0,0,0,21.88,6.18,51.29,51.29,0,0,0,24.31-6.6L116,193.67c0,.28,0,.56,0,.84V224a4,4,0,0,0,8,0V194.51a59.57,59.57,0,0,1,15.29-40c11.49,6.36,23.07,9.56,34.24,9.56a57,57,0,0,0,29.81-8.41C231.52,138.57,246.59,98.38,243.63,48.12ZM45.74,159C28.47,148.56,19,123.69,20.08,92.08c31.61-1.09,56.48,8.39,67,25.66,6.48,10.71,6.59,23.37.46,36.09L58.82,125.17a4,4,0,0,0-5.65,5.65l28.67,28.67C69.11,165.62,56.45,165.51,45.74,159ZM199.19,148.8c-16.05,9.72-35.09,9.59-54.08-.25l57.72-57.73a4,4,0,0,0-5.65-5.66l-57.73,57.73c-9.84-19-10-38-.25-54.08,15.11-25,51.08-38.53,96.63-36.64C237.73,97.72,224.15,133.69,199.19,148.8Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};

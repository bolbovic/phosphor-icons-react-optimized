var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (a, c, e) => c in a ? f(a, c, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[c] = e, i = (a, c) => {
  for (var e in c || (c = {}))
    A.call(c, e) && r(a, e, c[e]);
  if (m)
    for (var e of m(c))
      o.call(c, e) && r(a, e, c[e]);
  return a;
};
var p = (a, c) => {
  var e = {};
  for (var t in a)
    A.call(a, t) && c.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      c.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((t, e) => {
  var l = t, { children: a } = l, c = p(l, ["children"]);
  return /* @__PURE__ */ Z.createElement(d, i({ ref: e }, c), a, /* @__PURE__ */ Z.createElement("path", { d: "M199.28,149.8A71.58,71.58,0,0,0,193,129c19-37.94,30.45-88.28,17.34-110A22,22,0,0,0,190.94,8c-14.12,0-26,11.89-36.44,36.36-6.22,14.62-10.85,31.32-14,44.74a71.8,71.8,0,0,0-25,0c-3.13-13.42-7.76-30.12-14-44.74C91.1,19.89,79.18,8,65.06,8A22,22,0,0,0,45.64,19.08C32.53,40.76,44,91.1,63,129a71.58,71.58,0,0,0-6.26,20.76A52,52,0,1,0,128,225.52l-21.12-19.37a8,8,0,1,1,10.24-12.3L128,202.9l10.88-9.05a8,8,0,0,1,10.24,12.3L128,225.52a52,52,0,1,0,71.28-75.72Zm-126-36.53A218.45,218.45,0,0,1,58.4,67.08c-3.49-18.13-3.15-33,.93-39.72A6,6,0,0,1,65.06,24c6.61,0,14.52,9.7,21.72,26.62,5.93,13.94,10.35,30.12,13.33,43a71.72,71.72,0,0,0-26.88,19.64ZM100,176a12,12,0,1,1,12-12A12,12,0,0,1,100,176Zm56,0a12,12,0,1,1,12-12A12,12,0,0,1,156,176Zm20.55-69.17a71.89,71.89,0,0,0-20.66-13.2c3-12.89,7.4-29.07,13.33-43C176.42,33.7,184.33,24,190.94,24a6,6,0,0,1,5.73,3.36c4.08,6.74,4.42,21.59.93,39.72a218.45,218.45,0,0,1-14.83,46.19A72.6,72.6,0,0,0,176.55,106.83Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};

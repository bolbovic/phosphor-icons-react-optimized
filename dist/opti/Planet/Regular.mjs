var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, c, e) => c in a ? f(a, c, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[c] = e, C = (a, c) => {
  for (var e in c || (c = {}))
    p.call(c, e) && o(a, e, c[e]);
  if (t)
    for (var e of t(c))
      l.call(c, e) && o(a, e, c[e]);
  return a;
};
var M = (a, c) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && c.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      c.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import Z, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const A = i((r, e) => {
  var m = r, { children: a } = m, c = M(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, C({ ref: e }, c), a, /* @__PURE__ */ Z.createElement("path", { d: "M245.11,60.68c-7.65-13.19-27.84-16.16-58.5-8.66A95.93,95.93,0,0,0,32,128a98,98,0,0,0,.78,12.31C5.09,169,5.49,186,10.9,195.32,16,204.16,26.64,208,40.64,208a124.11,124.11,0,0,0,28.79-4A95.93,95.93,0,0,0,224,128a97.08,97.08,0,0,0-.77-12.25c12.5-13,20.82-25.35,23.65-35.92C248.83,72.51,248.24,66.07,245.11,60.68ZM128,48a80.11,80.11,0,0,1,78,62.2c-17.06,16.06-40.15,32.53-62.07,45.13C116.38,171.14,92.48,181,73.42,186.4A79.94,79.94,0,0,1,128,48ZM24.74,187.29c-1.46-2.51-.65-7.24,2.22-13a79.05,79.05,0,0,1,10.29-15.05,96,96,0,0,0,18,31.32C38,193.46,27.24,191.61,24.74,187.29ZM128,208a79.45,79.45,0,0,1-38.56-9.94,370,370,0,0,0,62.43-28.86c21.58-12.39,40.68-25.82,56.07-39.08A80.07,80.07,0,0,1,128,208ZM231.42,75.69c-1.7,6.31-6.19,13.53-12.63,21.13a95.69,95.69,0,0,0-18-31.35c14.21-2.35,27.37-2.17,30.5,3.24C232.19,70.28,232.24,72.63,231.42,75.69Z" }));
});
A.displayName = "Regular";
export {
  A as Regular
};

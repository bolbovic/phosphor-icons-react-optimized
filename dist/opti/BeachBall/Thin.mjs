var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    Z.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var A = m, { children: a } = A, t = n(A, ["children"]);
  return /* @__PURE__ */ c.createElement(M, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm88.14,73.64A195.13,195.13,0,0,0,165,91a195.13,195.13,0,0,0-10.68-51.1A92.33,92.33,0,0,1,216.14,101.64ZM145,37.58A187.54,187.54,0,0,1,156.3,83.26,196.37,196.37,0,0,0,89.67,44.38,91.34,91.34,0,0,1,128,36,92.41,92.41,0,0,1,145,37.58ZM79.86,49.63a188.08,188.08,0,0,1,72.45,40.82A196.19,196.19,0,0,0,36,127.39,92,92,0,0,1,79.86,49.63ZM36.44,137a188.17,188.17,0,0,1,121-38.48,188.17,188.17,0,0,1-38.48,121A92.17,92.17,0,0,1,36.44,137Zm92.17,83a196.19,196.19,0,0,0,36.94-116.3,188.08,188.08,0,0,1,40.82,72.45A92,92,0,0,1,128.61,220Zm83-53.66A196.37,196.37,0,0,0,172.74,99.7,187.54,187.54,0,0,1,218.42,111,92.41,92.41,0,0,1,220,128,91.34,91.34,0,0,1,211.62,166.33Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
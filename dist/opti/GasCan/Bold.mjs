var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      L.call(t, e) && m(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && L.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const s = h((l, e) => {
  var r = l, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(i, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M200,20H131.31a19.86,19.86,0,0,0-14.14,5.86L105.66,37.37,90.14,21.86a20,20,0,0,0-28.28,0l-24,24a20,20,0,0,0,0,28.28L53.37,89.66,41.86,101.17A19.86,19.86,0,0,0,36,115.31V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V40A20,20,0,0,0,200,20ZM57.66,60,76,41.66,88.69,54.34,70.34,72.69ZM196,212H60V117L78.83,98.14h0L133,44h63ZM136,68a12,12,0,0,1,12-12h20a12,12,0,0,1,0,24H148A12,12,0,0,1,136,68Zm39.5,65.37L147.21,156l28.29,22.63a12,12,0,0,1-15,18.74l-32.5-26-32.5,26a12,12,0,0,1-15-18.74L108.79,156,80.5,133.37a12,12,0,0,1,15-18.74l32.5,26,32.5-26a12,12,0,0,1,15,18.74Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};

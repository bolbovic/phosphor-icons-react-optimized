var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      H.call(t, e) && m(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && H.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const L = s((l, e) => {
  var r = l, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(A, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M232.94,163.06l-28.62-14.31A43.78,43.78,0,0,1,180,109.39V80a12,12,0,0,0-12-12,44.05,44.05,0,0,1-44-44,12,12,0,0,0-19.25-9.56l-77,58.41-.3.23a20,20,0,0,0-1.56,29.69L139.57,216.49a12,12,0,0,0,8.49,3.51H224a20,20,0,0,0,20-20V180.94A19.88,19.88,0,0,0,232.94,163.06ZM220,196H153L46.08,89.05l12.86-9.76,41.2,41.2a12,12,0,0,0,17-17L78.25,64.65l25.24-19.14A68.24,68.24,0,0,0,156,90.94v18.45a67.62,67.62,0,0,0,37.59,60.82L220,183.42ZM55.49,184H32a12,12,0,0,1,0-24H55.49a12,12,0,0,1,0,24Zm48,24a12,12,0,0,1-12,12H48a12,12,0,0,1,0-24H91.49A12,12,0,0,1,103.49,208Z" }));
});
L.displayName = "Bold";
export {
  L as Bold
};
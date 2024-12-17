var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      A.call(t, e) && m(a, e, t[e]);
  return a;
};
var M = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && A.call(a, l) && (e[l] = a[l]);
  return e;
};
import Z, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((l, e) => {
  var r = l, { children: a } = r, t = M(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, d({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M243.43,62.05a19.93,19.93,0,0,0-9.06-12.38,205.51,205.51,0,0,0-212.74,0,20,20,0,0,0-6.7,27.48h0l96,157.26a20,20,0,0,0,34.2,0l96-157.26A19.82,19.82,0,0,0,243.43,62.05ZM128,44a180.93,180.93,0,0,1,90.45,24.14L210,82A164.15,164.15,0,0,0,46,82L37.55,68.14A180.93,180.93,0,0,1,128,44ZM83.88,144.06l-20.74-34A20,20,0,0,1,92,128,20.12,20.12,0,0,1,83.88,144.06ZM128,216.36,96.44,164.65A44,44,0,0,0,91.8,88.72a140.45,140.45,0,0,1,105.71,13.74l-8.95,14.66a44,44,0,0,0-45.75,75ZM148,156a20,20,0,0,1,28-18.32l-20.64,33.83A20,20,0,0,1,148,156Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};

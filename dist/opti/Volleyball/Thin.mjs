var l = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && A(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && A(a, e, t[e]);
  return a;
};
var M = (a, t) => {
  var e = {};
  for (var r in a)
    Z.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as n } from "react";
import c from "../../lib/OptiBase.mjs";
const f = n((r, e) => {
  var o = r, { children: a } = o, t = M(o, ["children"]);
  return /* @__PURE__ */ h.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm85,135.19a92,92,0,0,1-102.18,2.57L130.31,132h89.6A91.61,91.61,0,0,1,213,163.19ZM85.52,46.42A91.11,91.11,0,0,1,116,36.79,92,92,0,0,1,169.29,124h-39ZM219.91,124H177.29a100.06,100.06,0,0,0-46-87.93A92.11,92.11,0,0,1,219.91,124ZM78.59,50.42l21.3,36.89a100.09,100.09,0,0,0-53.16,83.77A91.92,91.92,0,0,1,78.59,50.42ZM55,183.94a92,92,0,0,1,48.87-89.7L123.38,128,78.59,205.58A92.75,92.75,0,0,1,55,183.94ZM128,220a91.37,91.37,0,0,1-42.48-10.42l21.3-36.89a100.07,100.07,0,0,0,99.1,4.16A92,92,0,0,1,128,220Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};

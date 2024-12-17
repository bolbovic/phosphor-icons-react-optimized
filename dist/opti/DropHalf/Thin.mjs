var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && Z(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && Z(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import V, { forwardRef as n } from "react";
import M from "../../lib/OptiBase.mjs";
const f = n((m, e) => {
  var h = m, { children: a } = h, t = p(h, ["children"]);
  return /* @__PURE__ */ V.createElement(M, i({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M171,50.37a250.18,250.18,0,0,0-40.73-37.65,4,4,0,0,0-4.58,0A250.18,250.18,0,0,0,85,50.37C58.17,81.21,44,113.58,44,144a84,84,0,0,0,168,0C212,113.58,197.83,81.21,171,50.37ZM204,144a75.41,75.41,0,0,1-1,12H132V132h71.21A93.38,93.38,0,0,1,204,144ZM190.14,92H132V68h43A176.56,176.56,0,0,1,190.14,92ZM132,164h69.31a75.63,75.63,0,0,1-11.4,24H132Zm0-40V100h62a120.07,120.07,0,0,1,7.88,24Zm33.1-68.23q1.77,2,3.59,4.23H132V24.07A256.44,256.44,0,0,1,165.1,55.77ZM52,144c0-35.9,21.15-67.8,38.9-88.23A256.44,256.44,0,0,1,124,24.07V219.89A76.09,76.09,0,0,1,52,144Zm80,75.89V196h51.35A75.79,75.79,0,0,1,132,219.89Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};

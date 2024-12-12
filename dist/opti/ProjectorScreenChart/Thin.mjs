var n = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var H = (a, m, e) => m in a ? n(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, i = (a, m) => {
  for (var e in m || (m = {}))
    o.call(m, e) && H(a, e, m[e]);
  if (V)
    for (var e of V(m))
      Z.call(m, e) && H(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && V)
    for (var t of V(a))
      m.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import A, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((t, e) => {
  var r = t, { children: a } = r, m = p(r, ["children"]);
  return /* @__PURE__ */ A.createElement(f, i({ ref: e }, m), a, /* @__PURE__ */ A.createElement("path", { d: "M92,144V128a4,4,0,0,1,8,0v16a4,4,0,0,1-8,0Zm36,4a4,4,0,0,0,4-4V120a4,4,0,0,0-8,0v24A4,4,0,0,0,128,148Zm32,0a4,4,0,0,0,4-4V112a4,4,0,0,0-8,0v32A4,4,0,0,0,160,148Zm52-72V180h12a4,4,0,0,1,0,8H132v24.4a20,20,0,1,1-8,0V188H32a4,4,0,0,1,0-8H44V76H40A12,12,0,0,1,28,64V48A12,12,0,0,1,40,36H216a12,12,0,0,1,12,12V64a12,12,0,0,1-12,12ZM128,220a12,12,0,1,0,12,12A12,12,0,0,0,128,220ZM40,68H216a4,4,0,0,0,4-4V48a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V64A4,4,0,0,0,40,68Zm164,8H52V180H204Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};

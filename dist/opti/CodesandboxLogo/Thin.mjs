var L = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (l, e, a) => e in l ? L(l, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : l[e] = a, i = (l, e) => {
  for (var a in e || (e = {}))
    v.call(e, a) && o(l, a, e[a]);
  if (m)
    for (var a of m(e))
      Z.call(e, a) && o(l, a, e[a]);
  return l;
};
var p = (l, e) => {
  var a = {};
  for (var t in l)
    v.call(l, t) && e.indexOf(t) < 0 && (a[t] = l[t]);
  if (l != null && m)
    for (var t of m(l))
      e.indexOf(t) < 0 && Z.call(l, t) && (a[t] = l[t]);
  return a;
};
import A, { forwardRef as n } from "react";
import V from "../../lib/OptiBase.mjs";
const c = n((t, a) => {
  var r = t, { children: l } = r, e = p(r, ["children"]);
  return /* @__PURE__ */ A.createElement(V, i({ ref: a }, e), l, /* @__PURE__ */ A.createElement("path", { d: "M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66ZM128,123.44l-87.67-48L83.14,52l42.94,23.5a4,4,0,0,0,3.84,0L172.86,52l42.81,23.43ZM126.08,28.5a3.94,3.94,0,0,1,3.84,0l34.61,19L128,67.44l-36.53-20ZM36,175.82V132.47l40,21.9v45.72L38.08,179.33A4,4,0,0,1,36,175.82Zm48,28.65V152a4,4,0,0,0-2.08-3.51L36,123.35V82.19l88,48.18v96Zm48,21.89v-96l88-48.18v41.16l-45.92,25.14A4,4,0,0,0,172,152v52.47Zm85.92-47L180,200.09V154.37l40-21.9v43.35A4,4,0,0,1,217.92,179.33Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};

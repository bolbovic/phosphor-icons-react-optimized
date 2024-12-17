var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import A, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const Z = s((r, e) => {
  var c = r, { children: a } = c, t = h(c, ["children"]);
  return /* @__PURE__ */ A.createElement(V, p({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M246,120a46.05,46.05,0,0,0-46-46H160.15c-2.58-.15-54.1-3.57-103.15-44.71A14,14,0,0,0,34,40V200a13.85,13.85,0,0,0,8.07,12.68A14.16,14.16,0,0,0,48,214a13.9,13.9,0,0,0,9-3.3c40-33.52,81.57-42,97-44.07v34a14,14,0,0,0,6.23,11.65l11,7.33a14,14,0,0,0,21.32-8.17l12.13-45.71A46.07,46.07,0,0,0,246,120ZM49.29,201.52A2,2,0,0,1,46,200V40a1.9,1.9,0,0,1,1.15-1.8A2.08,2.08,0,0,1,48,38a1.91,1.91,0,0,1,1.26.48c44,36.92,89,45.19,104.71,47v69C138.29,156.33,93.3,164.61,49.29,201.52Zm131.64,7a2,2,0,0,1-3.05,1.18l-11-7.33a2,2,0,0,1-.89-1.67V166h26.2ZM200,154H166V86h34a34,34,0,1,1,0,68Z" }));
});
Z.displayName = "Light";
export {
  Z as Light
};

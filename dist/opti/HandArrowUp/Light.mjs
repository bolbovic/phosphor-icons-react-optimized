var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      L.call(t, e) && H(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && L.call(a, l) && (e[l] = a[l]);
  return e;
};
import A, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((l, e) => {
  var m = l, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ A.createElement(h, i({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M229.12,142.65a22.43,22.43,0,0,0-19.55-3.88l-45.24,10.4A26,26,0,0,0,140,114H89.94a29.78,29.78,0,0,0-21.21,8.79L45.52,146H16A14,14,0,0,0,2,160v40a14,14,0,0,0,14,14H120a6,6,0,0,0,1.46-.18l64-16a7.16,7.16,0,0,0,.89-.3L225.17,181a2.52,2.52,0,0,0,.33-.15,22.6,22.6,0,0,0,3.62-38.18ZM14,200V160a2,2,0,0,1,2-2H42v44H16A2,2,0,0,1,14,200Zm206.28-30-38.2,16.27L119.26,202H54V154.49l23.21-23.22A17.88,17.88,0,0,1,89.94,126H140a14,14,0,0,1,0,28H112a6,6,0,0,0,0,12h32a6,6,0,0,0,1.34-.15l67-15.41.24-.06A10.6,10.6,0,0,1,220.28,170ZM155.76,60.24a6,6,0,0,1,0-8.48l32-32a6,6,0,0,1,8.48,0l32,32a6,6,0,1,1-8.48,8.48L198,38.49V104a6,6,0,0,1-12,0V38.49L164.24,60.24A6,6,0,0,1,155.76,60.24Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
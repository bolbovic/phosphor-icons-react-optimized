var L = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && H(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var l in a)
    c.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && o.call(a, l) && (e[l] = a[l]);
  return e;
};
import A, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((l, e) => {
  var m = l, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ A.createElement(h, i({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M229.12,142.65a22.43,22.43,0,0,0-19.55-3.88l-4.32,1C227,119.55,238,99.51,238,80c0-25.36-20.39-46-45.46-46A45.51,45.51,0,0,0,156,52a45.51,45.51,0,0,0-36.54-18C94.39,34,74,54.64,74,80c0,11.38,3.63,22.49,11.29,34.36a29.73,29.73,0,0,0-16.56,8.43L45.52,146H16A14,14,0,0,0,2,160v40a14,14,0,0,0,14,14H120a6,6,0,0,0,1.46-.18l64-16a7.16,7.16,0,0,0,.89-.3L225.17,181l.33-.15a22.6,22.6,0,0,0,3.62-38.18ZM119.46,46a33.16,33.16,0,0,1,31,20.28,6,6,0,0,0,11.1,0,33.16,33.16,0,0,1,31-20.28C210.68,46,226,61.57,226,80c0,20.24-16.18,43-46.8,65.75l-14.87,3.42A26,26,0,0,0,140,114H99.67C90.36,101.67,86,90.81,86,80,86,61.57,101.32,46,119.46,46ZM14,200V160a2,2,0,0,1,2-2H42v44H16A2,2,0,0,1,14,200Zm206.28-30-38.2,16.27L119.26,202H54V154.49l23.21-23.22A17.88,17.88,0,0,1,89.94,126H140a14,14,0,0,1,0,28H112a6,6,0,0,0,0,12h32a6,6,0,0,0,1.34-.15l67-15.41.24-.06A10.6,10.6,0,0,1,220.28,170Z" }));
});
s.displayName = "Light";
export {
  s as Light
};

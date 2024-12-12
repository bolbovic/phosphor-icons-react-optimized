var L = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var H in a)
    i.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && m)
    for (var H of m(a))
      t.indexOf(H) < 0 && p.call(a, H) && (e[H] = a[H]);
  return e;
};
import l, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((H, e) => {
  var r = H, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ l.createElement(f, A({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M224,154H130L36.57,44.12a6,6,0,1,0-9.14,7.77L161,209.07A14,14,0,0,0,171.7,214H224a14,14,0,0,0,14-14V168A14,14,0,0,0,224,154Zm-53.82,47.3-30-35.3H194v36H171.7A2,2,0,0,1,170.18,201.3ZM226,200a2,2,0,0,1-2,2H206V166h18a2,2,0,0,1,2,2ZM110.89,181.08a6,6,0,0,0-8.46.68L85.82,201.3a2,2,0,0,1-1.52.7H62V166H85.2a6,6,0,0,0,0-12H32a14,14,0,0,0-14,14v32a14,14,0,0,0,14,14H84.3A14,14,0,0,0,95,209.07l16.6-19.54A6,6,0,0,0,110.89,181.08ZM30,200V168a2,2,0,0,1,2-2H50v36H32A2,2,0,0,1,30,200Zm121.43-75.88,68-80a6,6,0,1,1,9.14,7.77l-68,80a6,6,0,0,1-9.14-7.77Z" }));
});
h.displayName = "Light";
export {
  h as Light
};

var Z = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var h = (a, e, H) => e in a ? Z(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, i = (a, e) => {
  for (var H in e || (e = {}))
    r.call(e, H) && h(a, H, e[H]);
  if (V)
    for (var H of V(e))
      o.call(e, H) && h(a, H, e[H]);
  return a;
};
var p = (a, e) => {
  var H = {};
  for (var t in a)
    r.call(a, t) && e.indexOf(t) < 0 && (H[t] = a[t]);
  if (a != null && V)
    for (var t of V(a))
      e.indexOf(t) < 0 && o.call(a, t) && (H[t] = a[t]);
  return H;
};
import v, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, H) => {
  var m = t, { children: a } = m, e = p(m, ["children"]);
  return /* @__PURE__ */ v.createElement(f, i({ ref: H }, e), a, /* @__PURE__ */ v.createElement("path", { d: "M248,122H238V88a14,14,0,0,0-14-14H206V64a14,14,0,0,0-14-14H168a14,14,0,0,0-14,14v58H102V64A14,14,0,0,0,88,50H64A14,14,0,0,0,50,64V74H32A14,14,0,0,0,18,88v34H8a6,6,0,0,0,0,12H18v34a14,14,0,0,0,14,14H50v10a14,14,0,0,0,14,14H88a14,14,0,0,0,14-14V134h52v58a14,14,0,0,0,14,14h24a14,14,0,0,0,14-14V182h18a14,14,0,0,0,14-14V134h10a6,6,0,0,0,0-12ZM32,170a2,2,0,0,1-2-2V88a2,2,0,0,1,2-2H50v84Zm58,22a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H88a2,2,0,0,1,2,2Zm104,0a2,2,0,0,1-2,2H168a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2h24a2,2,0,0,1,2,2Zm32-24a2,2,0,0,1-2,2H206V86h18a2,2,0,0,1,2,2Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
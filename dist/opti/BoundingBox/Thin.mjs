var Z = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (a, V, H) => V in a ? Z(a, V, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[V] = H, i = (a, V) => {
  for (var H in V || (V = {}))
    r.call(V, H) && m(a, H, V[H]);
  if (t)
    for (var H of t(V))
      o.call(V, H) && m(a, H, V[H]);
  return a;
};
var p = (a, V) => {
  var H = {};
  for (var e in a)
    r.call(a, e) && V.indexOf(e) < 0 && (H[e] = a[e]);
  if (a != null && t)
    for (var e of t(a))
      V.indexOf(e) < 0 && o.call(a, e) && (H[e] = a[e]);
  return H;
};
import A, { forwardRef as n } from "react";
import v from "../../lib/OptiBase.mjs";
const c = n((e, H) => {
  var h = e, { children: a } = h, V = p(h, ["children"]);
  return /* @__PURE__ */ A.createElement(v, i({ ref: H }, V), a, /* @__PURE__ */ A.createElement("path", { d: "M208,92a12,12,0,0,0,12-12V48a12,12,0,0,0-12-12H176a12,12,0,0,0-12,12V60H92V48A12,12,0,0,0,80,36H48A12,12,0,0,0,36,48V80A12,12,0,0,0,48,92H60v72H48a12,12,0,0,0-12,12v32a12,12,0,0,0,12,12H80a12,12,0,0,0,12-12V196h72v12a12,12,0,0,0,12,12h32a12,12,0,0,0,12-12V176a12,12,0,0,0-12-12H196V92ZM172,48a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4V80a4,4,0,0,1-4,4H176a4,4,0,0,1-4-4ZM44,80V48a4,4,0,0,1,4-4H80a4,4,0,0,1,4,4V80a4,4,0,0,1-4,4H48A4,4,0,0,1,44,80ZM84,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V176a4,4,0,0,1,4-4H80a4,4,0,0,1,4,4Zm128-32v32a4,4,0,0,1-4,4H176a4,4,0,0,1-4-4V176a4,4,0,0,1,4-4h32A4,4,0,0,1,212,176Zm-24-12H176a12,12,0,0,0-12,12v12H92V176a12,12,0,0,0-12-12H68V92H80A12,12,0,0,0,92,80V68h72V80a12,12,0,0,0,12,12h12Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};

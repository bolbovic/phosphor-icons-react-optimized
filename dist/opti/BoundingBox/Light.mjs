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
import A, { forwardRef as v } from "react";
import c from "../../lib/OptiBase.mjs";
const f = v((e, H) => {
  var h = e, { children: a } = h, V = p(h, ["children"]);
  return /* @__PURE__ */ A.createElement(c, i({ ref: H }, V), a, /* @__PURE__ */ A.createElement("path", { d: "M208,94a14,14,0,0,0,14-14V48a14,14,0,0,0-14-14H176a14,14,0,0,0-14,14V58H94V48A14,14,0,0,0,80,34H48A14,14,0,0,0,34,48V80A14,14,0,0,0,48,94H58v68H48a14,14,0,0,0-14,14v32a14,14,0,0,0,14,14H80a14,14,0,0,0,14-14V198h68v10a14,14,0,0,0,14,14h32a14,14,0,0,0,14-14V176a14,14,0,0,0-14-14H198V94ZM174,48a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2V80a2,2,0,0,1-2,2H176a2,2,0,0,1-2-2ZM46,80V48a2,2,0,0,1,2-2H80a2,2,0,0,1,2,2V80a2,2,0,0,1-2,2H48A2,2,0,0,1,46,80ZM82,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V176a2,2,0,0,1,2-2H80a2,2,0,0,1,2,2Zm128-32v32a2,2,0,0,1-2,2H176a2,2,0,0,1-2-2V176a2,2,0,0,1,2-2h32A2,2,0,0,1,210,176Zm-24-14H176a14,14,0,0,0-14,14v10H94V176a14,14,0,0,0-14-14H70V94H80A14,14,0,0,0,94,80V70h68V80a14,14,0,0,0,14,14h10Z" }));
});
f.displayName = "Light";
export {
  f as Light
};

var c = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (a, e, H) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, v = (a, e) => {
  for (var H in e || (e = {}))
    m.call(e, H) && r(a, H, e[H]);
  if (V)
    for (var H of V(e))
      o.call(e, H) && r(a, H, e[H]);
  return a;
};
var i = (a, e) => {
  var H = {};
  for (var t in a)
    m.call(a, t) && e.indexOf(t) < 0 && (H[t] = a[t]);
  if (a != null && V)
    for (var t of V(a))
      e.indexOf(t) < 0 && o.call(a, t) && (H[t] = a[t]);
  return H;
};
import p, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const A = f((t, H) => {
  var h = t, { children: a } = h, e = i(h, ["children"]);
  return /* @__PURE__ */ p.createElement(s, v({ ref: H }, e), a, /* @__PURE__ */ p.createElement("path", { d: "M232,114H134V86h10a14,14,0,0,0,14-14V40a14,14,0,0,0-14-14H112A14,14,0,0,0,98,40V72a14,14,0,0,0,14,14h10v28H24a6,6,0,0,0,0,12H58v36H48a14,14,0,0,0-14,14v32a14,14,0,0,0,14,14H80a14,14,0,0,0,14-14V176a14,14,0,0,0-14-14H70V126H186v36H176a14,14,0,0,0-14,14v32a14,14,0,0,0,14,14h32a14,14,0,0,0,14-14V176a14,14,0,0,0-14-14H198V126h34a6,6,0,0,0,0-12ZM110,72V40a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2V72a2,2,0,0,1-2,2H112A2,2,0,0,1,110,72ZM82,176v32a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V176a2,2,0,0,1,2-2H80A2,2,0,0,1,82,176Zm128,0v32a2,2,0,0,1-2,2H176a2,2,0,0,1-2-2V176a2,2,0,0,1,2-2h32A2,2,0,0,1,210,176Z" }));
});
A.displayName = "Light";
export {
  A as Light
};

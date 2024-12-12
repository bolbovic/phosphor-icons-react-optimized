var M = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, e, H) => e in a ? M(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, c = (a, e) => {
  for (var H in e || (e = {}))
    Z.call(e, H) && r(a, H, e[H]);
  if (o)
    for (var H of o(e))
      p.call(e, H) && r(a, H, e[H]);
  return a;
};
var n = (a, e) => {
  var H = {};
  for (var t in a)
    Z.call(a, t) && e.indexOf(t) < 0 && (H[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      e.indexOf(t) < 0 && p.call(a, t) && (H[t] = a[t]);
  return H;
};
import m, { forwardRef as h } from "react";
import i from "../../lib/OptiBase.mjs";
const d = h((t, H) => {
  var V = t, { children: a } = V, e = n(V, ["children"]);
  return /* @__PURE__ */ m.createElement(i, c({ ref: H }, e), a, /* @__PURE__ */ m.createElement("path", { d: "M176,40V216H136V160H88v56H48V40Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M248,208H232V96a8,8,0,0,0,0-16H184V48a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16V208H24a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16ZM216,96V208H184V96ZM56,48H168V208H144V160a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v48H56Zm72,160H96V168h32ZM72,80a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,80Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,80ZM72,120a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,120Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,120Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};

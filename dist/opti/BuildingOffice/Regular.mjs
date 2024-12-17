var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (a, e, H) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, p = (a, e) => {
  for (var H in e || (e = {}))
    Z.call(e, H) && V(a, H, e[H]);
  if (t)
    for (var H of t(e))
      o.call(e, H) && V(a, H, e[H]);
  return a;
};
var l = (a, e) => {
  var H = {};
  for (var r in a)
    Z.call(a, r) && e.indexOf(r) < 0 && (H[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      e.indexOf(r) < 0 && o.call(a, r) && (H[r] = a[r]);
  return H;
};
import M, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const i = f((r, H) => {
  var m = r, { children: a } = m, e = l(m, ["children"]);
  return /* @__PURE__ */ M.createElement(h, p({ ref: H }, e), a, /* @__PURE__ */ M.createElement("path", { d: "M248,208H232V96a8,8,0,0,0,0-16H184V48a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16V208H24a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16ZM216,96V208H184V96ZM56,48H168V208H144V160a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v48H56Zm72,160H96V168h32ZM72,80a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,80Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,80ZM72,120a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,120Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,120Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};

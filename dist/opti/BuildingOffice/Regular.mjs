var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (a, e, H) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, l = (a, e) => {
  for (var H in e || (e = {}))
    Z.call(e, H) && V(a, H, e[H]);
  if (r)
    for (var H of r(e))
      o.call(e, H) && V(a, H, e[H]);
  return a;
};
var p = (a, e) => {
  var H = {};
  for (var t in a)
    Z.call(a, t) && e.indexOf(t) < 0 && (H[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && o.call(a, t) && (H[t] = a[t]);
  return H;
};
import f, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const d = M((t, H) => {
  var m = t, { children: a } = m, e = p(m, ["children"]);
  return /* @__PURE__ */ f.createElement(c, l({ ref: H }, e), a, /* @__PURE__ */ f.createElement("path", { d: "M248,208H232V96a8,8,0,0,0,0-16H184V48a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16V208H24a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16ZM216,96V208H184V96ZM56,48H168V208H144V160a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v48H56Zm72,160H96V168h32ZM72,80a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,80Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,80ZM72,120a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,120Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,120Z" }));
});
d.displayName = "Regular";
export {
  d as Regular,
  d as default
};

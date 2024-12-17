var V = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var h = (a, m, H) => m in a ? V(a, m, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[m] = H, o = (a, m) => {
  for (var H in m || (m = {}))
    r.call(m, H) && h(a, H, m[H]);
  if (t)
    for (var H of t(m))
      l.call(m, H) && h(a, H, m[H]);
  return a;
};
var i = (a, m) => {
  var H = {};
  for (var e in a)
    r.call(a, e) && m.indexOf(e) < 0 && (H[e] = a[e]);
  if (a != null && t)
    for (var e of t(a))
      m.indexOf(e) < 0 && l.call(a, e) && (H[e] = a[e]);
  return H;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((e, H) => {
  var Z = e, { children: a } = Z, m = i(Z, ["children"]);
  return /* @__PURE__ */ p.createElement(f, o({ ref: H }, m), a, /* @__PURE__ */ p.createElement("path", { d: "M240,208h-8V72a8,8,0,0,0-8-8H184V40a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V96H32a8,8,0,0,0-8,8V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM80,176H64a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm0-32H64a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm64,64H112V168h32Zm-8-64H120a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-32H120a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-32H120a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm56,96H176a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-32H176a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-32H176a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Z" }));
});
s.displayName = "Fill";
export {
  s as Fill
};
